(() => {
// Figma node 50:13407 "Select seats (individual)". Status bar, header and footer match the
// shared seat page; showtime (50:13682), legend (50:13454) and seat colours differ.
const imgGroup = "assets/SoloSeats/5dbee.svg";

function SoloShowtime({ go, count, onGroup }) {
  return (
    <div className="relative shrink-0 w-full h-[86.575px]">
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start relative size-full" data-node-id="50:13682" data-name="Showtime">
        <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[16.65px] text-[13.319px] text-[color:var(--text\/secondary,#6b6b6b)] top-[13.32px] whitespace-nowrap" data-node-id="50:13683" style={{ fontVariationSettings: '"wdth" 100' }}>
          Fri, 20 Nov
        </p>
        {/* Ticket count (50:13684 icon + 50:13687 text), right-anchored so longer counts fit. */}
        <div className="absolute right-[16.35px] top-[14.98px] flex gap-[5px] items-center cursor-pointer" onClick={() => go("seatCount")}>
          <div className="overflow-clip relative shrink-0 size-[9.989px]" data-node-id="50:13684" data-name="Edit ticket count">
            <div className="absolute inset-[12.5%]" data-node-id="50:13685" data-name="Group">
              <div className="absolute inset-[-6.39%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="50:13687" style={{ fontVariationSettings: '"wdth" 100' }}>
            {`${count} Ticket${count === 1 ? "" : "s"}`}
          </p>
        </div>
        {/* Added: switch this booking to a group plan. */}
        <div className="absolute right-[16.35px] top-[44.94px] h-[30px] border border-[var(--brand\/red,#f5405c)] border-solid rounded-[6.672px] bg-[var(--surface\/white,white)] flex gap-[6px] items-center px-[10px] cursor-pointer" data-name="Make this a group booking" onClick={onGroup}>
          <div className="relative shrink-0 size-[16px]" data-name="user-plus-01">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="assets/SoloSeats/user-plus.svg" />
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Make this a group booking
          </p>
        </div>
        <div className="absolute bg-[var(--status\/green,#1d9a4c)] h-[36.628px] left-[16.65px] rounded-[1.665px] top-[41.62px] w-[98.229px] cursor-pointer" data-node-id="50:13688" data-name="09:00 AM showtime" onClick={notInPrototype("Changing the showtime")}/>
        <p className="[word-break:break-word] absolute font-['Roboto'] font-bold leading-[1.18] left-[39.96px] text-[13.319px] text-[color:var(--surface\/white,white)] top-[46.62px] whitespace-nowrap pointer-events-none" data-node-id="50:13689" style={{ fontVariationSettings: '"wdth" 100' }}>
          09:00 AM
        </p>
        <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[39.96px] text-[7.492px] text-[color:var(--surface\/white,white)] top-[64.93px] whitespace-nowrap pointer-events-none" data-node-id="50:13690" style={{ fontVariationSettings: '"wdth" 100' }}>
          KOTAK INSIGNIA
        </p>
      </div>
    </div>
  );
}

function SoloLegend() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[8px] pt-[24px] px-[16px] relative shrink-0 w-full" data-node-id="50:13454" data-name="Seat legend">
      <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="50:13455" data-name="Available legend">
        <div className="border-[0.468px] border-[var(--status\/green,#1d9a4c)] border-solid content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="50:13456" data-name="Seat/Cell" />
        <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="50:13457" style={{ fontVariationSettings: '"wdth" 100' }}>
          Available
        </p>
      </div>
      <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="50:13461" data-name="Selected legend">
        <div className="bg-[var(--status\/green,#1d9a4c)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="50:13462" data-name="Seat/Cell" />
        <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="50:13463" style={{ fontVariationSettings: '"wdth" 100' }}>
          Selected by you
        </p>
      </div>
      <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="50:13464" data-name="Sold legend">
        <div className="bg-[var(--seat\/sold,#e3e3e3)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="50:13465" data-name="Seat/Cell" />
        <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="50:13466" style={{ fontVariationSettings: '"wdth" 100' }}>
          Sold
        </p>
      </div>
    </div>
  );
}

// Same seat layout as the group frames, but D06–D10 are all green ("Selected by you").
const SOLO_SEATS = { ...GROUP_SEATS, D: "aaassfffff" };

function SoloSeats({ go, back }) {
  const [seats, setSeats] = React.useState(SOLO_SEATS);
  const count = countSeats(seats, "f");
  const onSeat = (id, state) => {
    if (state === "a") {
      // Check against the latest state so rapid taps can't exceed the cap.
      setSeats((s) => {
        if (countSeats(s, "f") >= MAX_SEATS) {
          setTimeout(() => toast(`You can select up to ${MAX_SEATS} seats`));
          return s;
        }
        return setSeat(s, id, "f");
      });
    } else if (state === "f") setSeats((s) => setSeat(s, id, "a"));
    else seatFeedback(state);
  };
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="50:13407" data-name="Select seats (individual)">
      <SheetBackdropSeats
        showtime={<SoloShowtime go={go} count={count} onGroup={() => { window.joinedAs = null; go("groupInvite"); }} />}
        legend={<SoloLegend />}
        seats={seats}
        owners={Object.fromEntries(seatIdsOf(seats, "f").map((id) => [id, myInitial()]))}
        onSeat={onSeat}
        proceedLabel={`Proceed booking ${count} seat${count === 1 ? "" : "s"}`}
        onBack={back}
        onSecure={() => { window.prebookContext = { mode: "solo", seats, owners: Object.fromEntries(seatIdsOf(seats, "f").map((id) => [id, myInitial()])) }; go("prebookIntro"); }}
        onProceed={() => { setPaySelection(seatIdsOf(seats, "f"), false); go("contact"); }}
      />
    </div>
  );
}

window.Screens.SoloSeats = SoloSeats;
})();
