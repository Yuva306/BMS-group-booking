(() => {
// Shared seat grid, reproducing the Figma "Seat map" markup (e.g. node 37:9827).
// Seat state codes: a = available, s = sold, y = selected by you (blue),
// f = selected by friends (green), x = accessible (wheelchair icon).
const SM = {
  imgGroup: "assets/seatmap/6cbf9.svg",
  imgGroup1: "assets/seatmap/d7496.svg",
  imgGroup2: "assets/seatmap/bdf30.svg",
};

// Returns a copy of `seats` with seat `id` (e.g. "D06") set to state `to`.
function setSeat(seats, id, to) {
  const row = id[0];
  const i = Number(id.slice(1)) - 1;
  const s = seats[row];
  return { ...seats, [row]: s.slice(0, i) + to + s.slice(i + 1) };
}
const countSeats = (seats, codes) =>
  Object.values(seats).join("").split("").filter((c) => codes.includes(c)).length;

const SEAT_FILL = {
  s: "bg-[var(--seat\\/sold,#e3e3e3)]",
  y: "bg-[var(--status\\/blue,#2458d6)]",
  f: "bg-[var(--status\\/green,#1d9a4c)]",
  r: "bg-[var(--brand\\/red,#f5405c)]",
};

// Per-row layout from Figma: flow padding and the seats container width.
const ROW_LAYOUT = {
  A: { pr: "pr-[40.374px]", pt: "pt-[4.329px]", w: "w-[247.737px]" },
  B: { pr: "pr-[64.349px]", pt: "pt-[6.66px]", w: "w-[197.124px]" },
  C: { pr: "pr-[63.849px]", pt: "pt-[4.995px]", w: "w-[197.623px]" },
  D: { pr: "pr-[40.374px]", pt: "pt-[5.994px]", w: "w-[247.737px]" },
  E: { pr: "pr-[40.374px]", pt: "pt-[4.995px]", w: "w-[247.737px]" },
};

// Alignment-wrapper quirks copied from Figma (sub-pixel left padding on a few seats).
const SEAT_WRAP = {
  "A03": "pl-[0.001px] w-[19.98px]", "A06": "pl-[0.001px] w-[19.98px]",
  "C05": "pl-[0.5px] w-[20.478px]", "C07": "pl-[0.001px] w-[19.98px]",
  "D03": "pl-[0.001px] w-[19.98px]", "D06": "pl-[0.001px] w-[19.98px]",
  "E03": "pl-[0.001px] w-[19.98px]", "E06": "pl-[0.001px] w-[19.98px]",
};

function Seat({ id, num, state, colors, onSeat, owner }) {
  const wrap = SEAT_WRAP[id] || "w-[19.979px]";
  if (state === "x") {
    const icon = num === "01" ? SM.imgGroup : SM.imgGroup1;
    const inset = num === "01" ? "inset-[-1.93%_-2.18%_-1.93%_-2.19%]" : "inset-[-1.93%_-2.19%]";
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[19.979px]">
        <div className="content-stretch flex flex-col items-start pb-[0.833px] relative shrink-0 w-[19.979px]">
          <div className="content-stretch flex flex-col items-start mb-[-18.314px] relative shrink-0 w-full">
            <div className="border-[0.624px] border-[var(--status\/green,#1d9a4c)] border-solid content-stretch flex h-[19.979px] items-center justify-center relative rounded-[2.497px] shrink-0 w-full" data-name={`Seat ${id} · available`} />
          </div>
          <div className="content-stretch flex flex-col items-start pl-[0.833px] pr-[0.832px] relative shrink-0 w-full">
            <div className={`content-stretch flex flex-col h-[18.314px] items-start overflow-clip pb-[1.534px] pl-[1.791px] ${num === "01" ? "pr-[3.052px]" : "pr-[3.053px]"} pt-[1.526px] relative shrink-0 w-full`} data-name="Accessible seat">
              <div className="h-[15.254px] relative shrink-0 w-[13.471px]">
                <div className={`absolute ${inset}`}>
                  <img alt="" className="block max-w-none size-full" src={icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const fill = (colors && colors[state]) || SEAT_FILL[state];
  // A picked seat (you / friend / booked) is drawn as a circle with its owner's initial.
  const picked = fill && state !== "s" && owner;
  const box = fill
    ? `${fill} content-stretch flex items-center justify-center relative ${picked ? "rounded-full" : "rounded-[2.497px]"} shrink-0 size-[19.979px]`
    : "border-[0.624px] border-[var(--status\\/green,#1d9a4c)] border-solid content-stretch flex items-center justify-center relative rounded-[2.497px] shrink-0 size-[19.979px]";
  const text = fill ? "text-[color:var(--surface\\/white,white)]" : "text-[color:var(--status\\/green,#1d9a4c)]";
  return (
    <div className={`content-stretch flex flex-col items-start relative shrink-0 ${wrap}`}>
      <div className={box + (onSeat ? " cursor-pointer" : "")} data-name={`Seat ${id}`} onClick={onSeat ? () => onSeat(id, state) : undefined}>
        <p className={`[word-break:break-word] font-['Inter'] font-medium leading-[normal] not-italic relative shrink-0 text-[9.989px] ${text} whitespace-nowrap`}>
          {picked ? owner : num}
        </p>
      </div>
    </div>
  );
}

function SeatRow({ row, states, colors, onSeat, owners }) {
  const L = ROW_LAYOUT[row];
  const first = 1;
  return (
    <div className={`content-stretch flex flex-col items-start pl-[9.989px] ${L.pr} ${L.pt} relative shrink-0 w-full`} data-name={`Seat row ${row} flow`}>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[3.984px] pt-[4.995px] relative">
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[9.157px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            {row}
          </p>
        </div>
        <div className={`content-stretch flex flex-col items-start relative shrink-0 ${L.w}`}>
          <div className={`content-stretch flex items-start justify-between relative shrink-0 ${L.w}`}>
            {states.split("").map((st, i) => {
              const num = String(i + first).padStart(2, "0");
              return <Seat key={i} id={row + num} num={num} state={st} colors={colors} onSeat={onSeat} owner={owners && owners[row + num]} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function TierLabel({ text, pr, w, pt }) {
  return (
    <>
      <div className={`content-stretch flex flex-col items-start pl-[49.947px] ${pr} ${pt || ""} relative shrink-0 w-full`}>
        <p className={`[word-break:break-word] font-['Roboto'] font-normal h-[16px] leading-[1.18] relative shrink-0 text-[13.319px] text-[color:var(--text\\/secondary,#6b6b6b)] ${w}`} style={{ fontVariationSettings: '"wdth" 100' }}>
          {text}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pl-[49.947px] pr-[41.706px] pt-[3.979px] relative shrink-0 w-full">
        <div className="bg-[var(--border\/default,#dcdcdc)] h-[0.666px] relative shrink-0 w-full" data-name="Seat tier divider" />
      </div>
    </>
  );
}

// Seat rows + tier labels (without the outer "Seat map" wrapper or the screen graphic).
function SeatRows({ seats, colors, onSeat, owners = seatOwnersFor(seats) }) {
  return (
    <>
      <TierLabel text="₹ 480 ROYAL ROWS" pr="pr-[226.053px]" w="w-[117px]" />
      <SeatRow row="A" states={seats.A} colors={colors} onSeat={onSeat} owners={owners} />
      <SeatRow row="B" states={seats.B} colors={colors} onSeat={onSeat} owners={owners} />
      <SeatRow row="C" states={seats.C} colors={colors} onSeat={onSeat} owners={owners} />
      <TierLabel text="₹ 430 EXECUTIVE ROWS" pr="pr-[198.053px]" w="w-[145px]" pt="pt-[9.989px]" />
      <SeatRow row="D" states={seats.D} colors={colors} onSeat={onSeat} owners={owners} />
      <SeatRow row="E" states={seats.E} colors={colors} onSeat={onSeat} owners={owners} />
    </>
  );
}

function CinemaScreen() {
  return (
    <>
      <div className="content-stretch flex flex-col items-start pl-[11.654px] pr-[11.738px] pt-[31.633px] relative shrink-0 w-full" data-name="Cinema screen flow">
        <div className="content-stretch flex flex-col h-[28.303px] items-start overflow-clip px-[3.33px] py-[1.665px] relative shrink-0 w-full" data-name="Cinema screen">
          <div className="h-[24.974px] relative shrink-0 w-full">
            <div className="absolute inset-[-1.03%_0_-1.03%_-0.1%]">
              <img alt="" className="block max-w-none size-full" src={SM.imgGroup2} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pl-[71.591px] pr-[70.009px] pt-[3.33px] relative shrink-0 w-full">
        <p className="[word-break:break-word] font-['Roboto'] font-bold leading-[1.18] relative shrink-0 text-[14.984px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          All eyes this way please!
        </p>
      </div>
    </>
  );
}

// Seat states used by the group-booking frames (29:102, 37:9786, ...).
const GROUP_SEATS = {
  A: "aaaassssaa",
  B: "ssssssas",
  C: "aaasaaaa",
  D: "aaassyyfff",
  E: "xxssaasaaa",
};

// Who you are in this session: Yuva (host) or Rishi (joined with a code).
const myInitial = () => (window.joinedAs === "Rishi" ? "R" : "Y");
// Figma's default picks: you on D06–D07, friends on D08 (Shwas), D09 (Aadi), D10 (Rishi), E08 (Pranjal).
const DEFAULT_OWNERS = { D06: "Y", D07: "Y", D08: "S", D09: "A", D10: "R", E08: "P" };
// Fallback owners for seat maps that don't track them: your seats get your initial, others the Figma defaults.
function seatOwnersFor(seats) {
  const o = {};
  Object.entries(seats || {}).forEach(([row, st]) =>
    st.split("").forEach((c, i) => {
      const id = row + String(i + 1).padStart(2, "0");
      if (c === "y") o[id] = myInitial();
      else if ("fr".includes(c)) o[id] = DEFAULT_OWNERS[id] || myInitial();
    })
  );
  return o;
}
const MAX_SEATS = 10;

window.SeatRows = SeatRows;
window.myInitial = myInitial;
window.DEFAULT_OWNERS = DEFAULT_OWNERS;
window.seatOwnersFor = seatOwnersFor;
window.MAX_SEATS = MAX_SEATS;
window.setSeat = setSeat;
window.countSeats = countSeats;
window.CinemaScreen = CinemaScreen;
window.GROUP_SEATS = GROUP_SEATS;
window.SM_ASSETS = SM;
})();
