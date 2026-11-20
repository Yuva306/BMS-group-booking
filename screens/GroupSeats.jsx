(() => {
// Figma node 29:102 "Select seats" (group). Same sections as the seat-page backdrop (37:9787)
// plus the group header 37:8490 ("Yuva's movie plan", C1X34B, member chips).
const imgShare07 = "assets/GroupSeats/2d122.svg";
const imgChevronLeft = "assets/GroupSeats/e324a.svg";

function GroupHeader({ onMembers, w = "w-[393px]" }) {
  return (
    <div className={`relative shrink-0 ${w} h-[96px]`}>
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] items-center p-[16px] relative rounded-[6.672px] size-full" data-node-id="37:8490" data-name="Select seats">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-node-id="37:8540">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.18] min-w-px relative text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:8491" style={{ fontVariationSettings: '"wdth" 100' }}>
            Yuva’s movie plan
          </p>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer" data-node-id="37:8546" onClick={shareInvite}>
            <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:8541">
              C1X34B
            </p>
            <div className="relative shrink-0 size-[16px]" data-node-id="37:8543" data-name="share-07">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare07} />
            </div>
          </div>
        </div>
        <div className={`content-stretch flex gap-[4px] items-center relative shrink-0 w-full ${onMembers ? "cursor-pointer" : ""}`} data-node-id="37:8526" onClick={onMembers}>
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="37:8505">
            <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center mr-[-16px] p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:8506">
              <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:8507">
                P
              </p>
            </div>
            <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center mr-[-16px] p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:8511">
              <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:8512">
                R
              </p>
            </div>
            <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center mr-[-16px] p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:8514">
              <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:8515">
                A
              </p>
            </div>
            <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center mr-[-16px] p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:8517">
              <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:8518">
                S
              </p>
            </div>
            <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:8508">
              <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:8509">
                Y
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)]" data-node-id="37:8524" style={{ fontVariationSettings: '"wdth" 100' }}>
            You and 4 friends
          </p>
          <div className="flex items-center justify-center relative shrink-0" data-node-id="37:8520">
            <div className="flex-none rotate-180">
              <div className="relative size-[20px]" data-name="chevron-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupSeatsBody(props) {
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="29:102" data-name="Select seats">
      <SheetBackdropSeats header={<GroupHeader onMembers={props.onMembers} />} {...props} />
    </div>
  );
}

function seatFeedback(state) {
  if (state === "s") toast("This seat is sold");
  else if (state === "f") toast("A friend has picked this seat");
}

// Group seat map state. You start with no seats; friends' picks (green) are already there.
// Kept at module level so the selection survives opening/closing the member sheet.
const GROUP_START = { ...GROUP_SEATS, D: "aaassaafff" };
let groupSeatsSaved = GROUP_START;

function GroupSeats({ go, back }) {
  const [seats, setSeatsState] = React.useState(groupSeatsSaved);
  const setSeats = (fn) => setSeatsState((s) => (groupSeatsSaved = fn(s)));
  const count = countSeats(seats, "y");
  const onSeat = (id, state) => {
    if (state === "a") setSeats((s) => setSeat(s, id, "y"));
    else if (state === "y") setSeats((s) => setSeat(s, id, "a"));
    else seatFeedback(state);
  };
  const needSeats = () => toast("Pick your seats first");
  return (
    <GroupSeatsBody
      seats={seats}
      onSeat={onSeat}
      proceedLabel={count ? `Proceed booking ${count} seat${count === 1 ? "" : "s"}` : "Proceed booking"}
      proceedDisabled={!count}
      onBack={back}
      onMembers={() => go("memberSheet")}
      onSecure={count ? () => { window.prebookContext = { mode: "group", seats }; go("prebookIntro"); } : needSeats}
      onProceed={count ? () => { setPaySelection(seatIdsOf(seats, "y"), false); go("contact"); } : needSeats}
    />
  );
}

window.GroupHeader = GroupHeader;
window.GroupSeatsBody = GroupSeatsBody;
window.getGroupSeats = () => groupSeatsSaved;
window.seatFeedback = seatFeedback;
window.Screens.GroupSeats = GroupSeats;
})();
