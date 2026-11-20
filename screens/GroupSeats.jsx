(() => {
// Figma node 29:102 "Select seats" (group). Same sections as the seat-page backdrop (37:9787)
// plus the group header 37:8490 ("Yuva's movie plan", C1X34B, member chips).
const imgShare07 = "assets/GroupSeats/2d122.svg";
const imgChevronLeft = "assets/GroupSeats/e324a.svg";

function GroupHeader({ onMembers, w = "w-[393px]", compact = false }) {
  const { joined } = useGroupSim();
  // Figma avatar stack is P R A S Y (Y = you, last). Show only friends who have joined.
  const shown = ["P", "R", "A", "S"].filter((l) => FRIENDS.slice(0, joined).some((f) => f[0] === l));
  return (
    <div className={`relative shrink-0 ${w} ${compact ? "h-[88px]" : "h-[96px]"}`}>
      <div className={`bg-[var(--surface\\/subtle,#f4f4f4)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] items-center ${compact ? "px-[16px] py-[12px]" : "p-[16px]"} relative rounded-[6.672px] size-full`} data-node-id="37:8490" data-name="Select seats">
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
            {shown.concat("Y").map((l, i, arr) => (
              <div key={l} className={`bg-[#d5f0ff] border border-[#dcdcdc] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]${i < arr.length - 1 ? " mr-[-16px]" : ""}`}>
                <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)]" data-node-id="37:8524" style={{ fontVariationSettings: '"wdth" 100' }}>
            {friendsLabel(joined)}
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

// Live group state, shared by every screen (group seats, member sheet, headers).
// Starting a group resets it to "just you" and plays a scripted timeline:
// friend joins → 1 s later picks a seat → 3 s later the next friend joins (first join after 2 s).
const FRIENDS = ["Shwas", "Aadi", "Rishi", "Pranjal"];
const FRIEND_SEAT_PREF = ["D08", "D09", "D10", "E08", "E09", "E10", "D03", "D02", "D01", "C08", "C07"];
const GROUP_EMPTY = { ...GROUP_SEATS, D: "aaassaaaaa" }; // no friend picks yet
const GROUP_FULL = { ...GROUP_SEATS, D: "aaassaafff", E: "xxssaasfaa" }; // all 4 friends joined & picked (D08–D10, E08)

const FULL_OWNERS = { D08: "S", D09: "A", D10: "R", E08: "P" };
const groupSim = { joined: FRIENDS.length, seats: GROUP_FULL, owners: { ...FULL_OWNERS }, timers: [], listeners: new Set() };
function simUpdate(patch) {
  Object.assign(groupSim, patch);
  groupSim.listeners.forEach((f) => f());
}
function useGroupSim() {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    groupSim.listeners.add(force);
    return () => groupSim.listeners.delete(force);
  }, []);
  return groupSim;
}
function stopGroupSim() {
  groupSim.timers.forEach(clearTimeout);
  groupSim.timers = [];
}
function friendPicksSeat(i) {
  const st = groupSim.seats;
  if (countSeats(st, "yf") >= MAX_SEATS) return; // plan is full
  const id = FRIEND_SEAT_PREF.find((sid) => st[sid[0]][Number(sid.slice(1)) - 1] === "a");
  if (id) simUpdate({ seats: setSeat(st, id, "f"), owners: { ...groupSim.owners, [id]: FRIENDS[i][0] } });
}
function startGroupSim() {
  stopGroupSim();
  simUpdate({ joined: 0, seats: GROUP_EMPTY, owners: {} });
  let t = 2000;
  FRIENDS.forEach((_, i) => {
    groupSim.timers.push(setTimeout(() => simUpdate({ joined: i + 1 }), t));
    groupSim.timers.push(setTimeout(() => friendPicksSeat(i), t + 1000));
    t += 1000 + 3000;
  });
}
// Joining with a code: the group is already complete.
function fullGroupSim() {
  stopGroupSim();
  // You are Rishi here, so the 4 "friends" are Shwas, Aadi, Yuva (host) and Pranjal.
  simUpdate({ joined: FRIENDS.length, seats: GROUP_FULL, owners: { D08: "S", D09: "A", D10: "Y", E08: "P" } });
}
const friendsLabel = (n) => (n === 0 ? "Just you yet" : `You and ${n} friend${n === 1 ? "" : "s"}`);

function GroupSeats({ go, back }) {
  const sim = useGroupSim();
  const seats = sim.seats;
  const setSeats = (fn) => simUpdate({ seats: fn(groupSim.seats) });
  const count = countSeats(seats, "y");
  const onSeat = (id, state) => {
    if (state === "a") {
      if (countSeats(groupSim.seats, "yf") >= MAX_SEATS) return toast(`A group booking can have up to ${MAX_SEATS} seats`);
      simUpdate({ owners: { ...groupSim.owners, [id]: myInitial() } });
      setSeats((s) => setSeat(s, id, "y"));
    } else if (state === "y") {
      const { [id]: _, ...rest } = groupSim.owners;
      simUpdate({ owners: rest });
      setSeats((s) => setSeat(s, id, "a"));
    } else seatFeedback(state);
  };
  const needSeats = () => toast("Pick your seats first");
  return (
    <GroupSeatsBody
      seats={seats}
      owners={sim.owners}
      onSeat={onSeat}
      proceedLabel={count ? `Proceed booking ${count} seat${count === 1 ? "" : "s"}` : "Proceed booking"}
      proceedDisabled={!count}
      onBack={back}
      onMembers={() => go("memberSheet")}
      onSecure={count ? () => { window.prebookContext = { mode: "group", seats, owners: { ...groupSim.owners } }; go("prebookIntro"); } : needSeats}
      onProceed={count ? () => { setPaySelection(seatIdsOf(seats, "y"), false); go("contact"); } : needSeats}
    />
  );
}

window.GroupHeader = GroupHeader;
window.GroupSeatsBody = GroupSeatsBody;
window.getGroupSeats = () => groupSim.seats;
window.getGroupOwners = () => groupSim.owners;
window.useGroupSim = useGroupSim;
window.startGroupSim = startGroupSim;
window.fullGroupSim = fullGroupSim;
window.GROUP_FRIENDS = FRIENDS;
window.friendsLabel = friendsLabel;
window.seatFeedback = seatFeedback;
window.Screens.GroupSeats = GroupSeats;
})();
