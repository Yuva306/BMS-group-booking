(() => {
// "View Prebooking" (390×852) — three Figma variants share this layout:
//   48:513   prebooked, nothing picked yet (footer disabled)   [45:11216 is an identical duplicate]
//   45:10683 D06, D07 picked to pay for (blue), footer "Proceed booking 2 seats"
//   45:11903 D06, D07 paid (red), "3 seats still to be booked", extra "View Tickets" button
// Sections: status bar 48:514, header 48:519, group header 45:10970, timer 45:10634,
// booking card 48:551, "Select seats to pay for." 45:10669, legend 48:560, seat map 48:573, footer.
const imgCellularWiFiBattery = "assets/ViewPrebooking/efaa2.png";
const imgChevronLeft = "assets/ViewPrebooking/0becb.svg";
const imgClock = "assets/ViewPrebooking/5fbd0.svg";
const imgEdit01 = "assets/ViewPrebooking/dfa52.svg";

const VP_SEATS = {
  base: { ...GROUP_SEATS, D: "aaassfffff" },
  selected: { ...GROUP_SEATS, D: "aaassyyfff" },
  paid: { ...GROUP_SEATS, D: "aaassrrfff" },
};

// Held-seat state per variant, kept across visits.
const vpSaved = { ...VP_SEATS };

function ViewPrebookingBase({ variant, nodeId, go, back }) {
  const left = useCountdown("1:24:18");
  // Paid view: rebuild from this session — paid seats red, the rest of your held seats green.
  const paidStart = () => {
    if (vpSaved.paidKey === window.paySelection && vpSaved.paidHeld === window.lastHeld) return vpSaved.paid;
    let st = window.lastHeld || VP_SEATS.base;
    for (const id of sessionBooking().paid) st = setSeat(st, id, "r");
    vpSaved.paidKey = window.paySelection;
    vpSaved.paidHeld = window.lastHeld;
    return (vpSaved.paid = st);
  };
  const [seats, setSeatsState] = React.useState(() => (variant === "paid" ? paidStart() : vpSaved[variant]));
  const stillToBook = `${seatsWord(countSeats(seats, "fy"))} still to be booked.`;
  React.useEffect(() => {
    if (variant !== "paid") window.lastHeld = Object.fromEntries(Object.entries(seats).map(([r, st]) => [r, st.replace(/y/g, "f")]));
  }, [seats]);
  const setSeats = (fn) => setSeatsState((x) => (vpSaved[variant] = fn(x)));
  const picked = countSeats(seats, "y");
  // Repick mode: tap a held (green) seat to release it, then an available seat of the same
  // price tier to take its place. Other tiers are greyed out like sold seats.
  const [repick, setRepick] = React.useState(null); // { start: seats, released: number } while repicking
  const tierOf = (row) => ("ABC".includes(row) ? "royal" : "exec");
  const heldTiers = new Set(
    Object.entries(repick ? repick.start : seats).filter(([, st]) => /[fyr]/.test(st)).map(([row]) => tierOf(row))
  );
  const displaySeats = repick
    ? Object.fromEntries(Object.entries(seats).map(([row, st]) => [row, heldTiers.has(tierOf(row)) ? st : st.replace(/a/g, "s")]))
    : seats;
  const startRepick = () => {
    const reset = Object.fromEntries(Object.entries(seats).map(([row, st]) => [row, st.replace(/y/g, "f")]));
    setSeats(() => reset);
    setRepick({ start: reset, released: 0 });
    toast("Tap a green seat to release it, then pick another seat in the same row category");
  };
  const confirmRepick = () => {
    if (repick.released > 0) return toast(`Pick ${repick.released} more seat${repick.released === 1 ? "" : "s"} to replace the ones you released`);
    setRepick(null);
    toast("Seats updated");
  };
  const onSeat = (id, state) => {
    if (repick) {
      if (state === "f") {
        setSeats((x) => setSeat(x, id, "a"));
        setRepick((r) => ({ ...r, released: r.released + 1 }));
      } else if (state === "a" && heldTiers.has(tierOf(id[0]))) {
        if (!repick.released) return toast("Release one of your green seats first");
        setSeats((x) => setSeat(x, id, "f"));
        setRepick((r) => ({ ...r, released: r.released - 1 }));
      } else if (state === "r") toast("You’ve already booked this seat");
      else toast("You can only swap for a seat in the same row category");
      return;
    }
    if (state === "f") setSeats((x) => setSeat(x, id, "y"));
    else if (state === "y") setSeats((x) => setSeat(x, id, "f"));
    else if (state === "r") toast("You’ve already booked this seat");
    else if (state === "s") toast("This seat is unavailable");
    else toast("Only your held seats can be paid for here. Use Repick Seats to change them");
  };
  const heldList = Object.entries(seats).flatMap(([row, st]) =>
    st.split("").map((c, i) => (/[fyr]/.test(c) ? row + String(i + 1).padStart(2, "0") : null)).filter(Boolean)
  );
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id={nodeId} data-name="View Prebooking">
      <div className="content-stretch flex items-start pl-[31.633px] pr-[33.382px] relative shrink-0 w-full" data-node-id="48:514" data-name="Status bar">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[2.177px] pt-[8.325px] relative" data-node-id="48:515" data-name="StatusBar/iOS alignment">
          <div className="content-stretch flex h-[39.445px] items-center justify-between px-[21.516px] relative shrink-0 w-[83.031px]" data-node-id="48:516" data-name="StatusBar/iOS">
            <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.481px] text-black whitespace-nowrap" data-node-id="I48:516;1:38">
              6:08
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[9.989px] pt-[19.979px] relative shrink-0 w-[78.25px]" data-node-id="48:517" data-name="Cellular Wi-Fi battery alignment">
          <div className="h-[19.979px] relative shrink-0 w-[78.25px]" data-node-id="48:518" data-name="Cellular Wi-Fi battery">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiBattery} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[6.66px] relative shrink-0 w-full" data-node-id="48:519" data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-node-id="48:520" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-node-id="48:521" data-name="Row · Cinema header 1">
            <div className="relative shrink-0 size-[20px] cursor-pointer" data-node-id="48:522" data-name="chevron-left" onClick={back}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="48:523" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="48:524" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="48:525" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="48:526" style={{ fontVariationSettings: '"wdth" 100' }}>
                    My Booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupHeader w="w-full" onMembers={() => go(variant === "paid" ? "paidSheet" : "memberSheet")} />
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-full h-[57px]" data-node-id="45:10634">
        <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="45:13073" data-name="timer chip">
          <div className="relative shrink-0 size-[16px]" data-node-id="45:13074" data-name="clock">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
          </div>
          <div className="[word-break:break-word] font-['Roboto'] font-medium leading-[0] relative shrink-0 text-[0px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:13075" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[normal] mb-0 text-[12px]">{left} left before your hold expires</p>
            <p className="font-['Inter'] font-normal leading-[1.4] not-italic text-[12px]">{stillToBook}</p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="48:551" data-name="Showtime">
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[8.34px] shrink-0 w-full" data-node-id="45:10645" data-name="Movie and show details">
          <div className="content-stretch flex flex-col items-start pb-[11.71px] pl-[16.68px] pr-[15.012px] pt-[10.008px] relative shrink-0 w-full" data-node-id="45:10646" data-name="Movie and session">
            <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.25] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:10647" data-name="Movie title and ticket count">
              <p className="flex-[1_0_0] font-['Roboto'] font-medium min-w-px relative" data-node-id="45:10648" style={{ fontVariationSettings: '"wdth" 100' }}>
                Wildwood
              </p>
              <p className="font-['Roboto'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="45:10649" style={{ fontVariationSettings: '"wdth" 100' }}>
                5
              </p>
            </div>
            <div className="content-stretch flex items-start pt-[0.684px] relative shrink-0 w-full" data-node-id="45:10650" data-name="Session and mobile ticket">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.25] min-w-px relative text-[13.344px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="45:10651" style={{ fontVariationSettings: '"wdth" 100' }}>
                Fri, 20 Nov, 2026 | 09:00 AM
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[0.01px] relative shrink-0 w-full" data-node-id="45:10652" data-name="Movie metadata">
              <div className="[word-break:break-word] font-['Roboto'] font-normal leading-[0] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:10653" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.25] mb-0">English (2D)</p>
                <p className="leading-[1.25] mb-0">{heldList.join(", ")}</p>
                <p className="leading-[1.25]">INOX: R-City, Ghatkopar (INSIGNIA 8)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between pt-[12px] px-[16px] relative shrink-0 w-full h-[32px]" data-node-id="45:10669">
        <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:10668">
          Select seats to pay for.
        </p>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer" data-node-id="45:10670" onClick={repick ? confirmRepick : startRepick}>
          <p className={`[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] ${repick ? "text-[color:var(--status\\/green,#1d9a4c)]" : "text-[color:var(--text\\/secondary,#6b6b6b)]"} whitespace-nowrap`} data-node-id="45:10671">
            {repick ? "Confirm these seats" : "Repick Seats"}
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="45:10672" data-name={repick ? "check" : "edit-01"}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={repick ? "assets/ViewPrebooking/check.svg" : imgEdit01} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between pb-[8px] pt-[24px] px-[16px] relative shrink-0 w-full" data-node-id="48:560" data-name="Seat legend">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="45:10664">
          {repick && (
            <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="48:561" data-name="Available legend">
              <div className="border-[0.468px] border-[var(--status\/green,#1d9a4c)] border-solid content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="48:562" data-name="Seat/Cell" />
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="48:563" style={{ fontVariationSettings: '"wdth" 100' }}>
                Available
              </p>
            </div>
          )}
          <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="48:567" data-name="Selected legend">
            <div className="bg-[var(--status\/green,#1d9a4c)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="48:568" data-name="Seat/Cell" />
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:10655" style={{ fontVariationSettings: '"wdth" 100' }}>
              Held for the group
            </p>
          </div>
          {repick && (
            <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="48:570" data-name="Sold legend">
              <div className="bg-[var(--seat\/sold,#e3e3e3)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="48:571" data-name="Seat/Cell" />
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="48:572" style={{ fontVariationSettings: '"wdth" 100' }}>
                Unavailable
              </p>
            </div>
          )}
          <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="45:10675" data-name="Selected legend">
            <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="45:10676" data-name="Seat/Cell" />
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:10677" style={{ fontVariationSettings: '"wdth" 100' }}>
              Booked by you
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px py-[24px] relative w-full" data-node-id="48:573" data-name="Seat map">
        <SeatRows seats={displaySeats} onSeat={onSeat} />
        <CinemaScreen />
      </div>
      <div className={`content-stretch flex flex-col ${variant === "paid" ? "gap-[12px] " : "h-[88px] "}items-start pb-[42px] px-[16px] relative shrink-0 w-full`} data-node-id={variant === "paid" ? "45:12123" : picked ? "45:10907" : "48:726"} data-name="Select seats flow">
        {picked ? (
          <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="45:10908" data-name="Select seats" onClick={() => { if (repick) return toast("Confirm your seats first"); setPaySelection(seatIdsOf(seats, "y"), true); go("contact"); }}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I45:10908;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              {`Proceed booking ${picked} seat${picked === 1 ? "" : "s"}`}
            </p>
          </div>
        ) : (
          <div className="bg-[var(--border\/default,#dcdcdc)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="48:730" data-name="Select seats" onClick={() => toast(repick ? "Confirm your seats first" : "Select the seats you want to pay for")}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I48:730;1:28" style={{ fontVariationSettings: '"wdth" 100' }}>
              Proceed booking
            </p>
          </div>
        )}
        {variant === "paid" && (
          <div className="border border-[var(--brand\/red,#f5405c)] border-solid content-stretch flex h-[40.033px] items-center justify-center px-[12px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="45:13054" data-name="Select seats" onClick={() => go("ticket")}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="I45:13054;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              View Tickets
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

window.Screens.ViewPrebooking = (p) => <ViewPrebookingBase variant="base" nodeId="48:513" {...p} />;
window.Screens.ViewPrebookingSelected = (p) => <ViewPrebookingBase variant="selected" nodeId="45:10683" {...p} />;
window.Screens.ViewPrebookingPaid = (p) => <ViewPrebookingBase variant="paid" nodeId="45:11903" {...p} />;
})();
