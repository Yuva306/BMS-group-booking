// Screen registry: key -> [component name, Figma node id, frame width, frame height]
const ROUTES = {
  nowShowing: ["NowShowing", "28:6524", 393, 851],
  prebookIntro: ["PrebookIntro", "50:13694", 393, 851],
  movie: ["MovieDetails", "37:10100", 393, 851],
  seatCount: ["SeatCount", "37:9786", 393, 852],
  bwfIntro: ["BwfIntro", "37:9134", 393, 852],
  groupInvite: ["GroupInvite", "28:7313", 393, 852],
  groupSeats: ["GroupSeats", "29:102", 393, 851],
  memberSheet: ["MemberSheet", "37:8547", 393, 851],
  soloSeats: ["SoloSeats", "50:13407", 393, 851],
  prebookSeats: ["PrebookSeats", "37:10409", 393, 852],
  secured: ["SeatsSecured", "45:11026", 393, 852],
  viewPrebooking: ["ViewPrebooking", "48:513", 390, 852],
  viewPrebookingSelected: ["ViewPrebookingSelected", "45:10683", 390, 852],
  contact: ["ContactDetails", "45:11714", 390, 852],
  confirm: ["ConfirmBooking", "45:11508", 393, 852],
  booked: ["SeatsBooked", "45:13088", 393, 852],
  viewPrebookingPaid: ["ViewPrebookingPaid", "45:11903", 390, 852],
  paidSheet: ["PaidMemberSheet", "45:12365", 393, 851],
  setAutopay: ["SetAutopay", "61:16464", 390, 852],
  autopayDone: ["AutopayDone", "61:15487", 390, 852],
  dropSeats: ["DropSeats", "76:18595", 393, 851],
  ticket: ["Ticket", "29:116", 393, 852],
  ticketExpanded: ["TicketExpanded", "45:11754", 393, 852],
};

// Previous screen in the flow, used by Back when there is no history (e.g. opened via #route).
const PARENT = {
  movie: "nowShowing",
  seatCount: "movie",
  bwfIntro: "seatCount",
  groupInvite: "bwfIntro",
  groupSeats: "groupInvite",
  memberSheet: "groupSeats",
  soloSeats: "seatCount",
  prebookIntro: "groupSeats",
  prebookSeats: "prebookIntro",
  secured: "prebookSeats",
  viewPrebooking: "secured",
  viewPrebookingSelected: "viewPrebooking",
  contact: "viewPrebookingSelected",
  confirm: "contact",
  booked: "confirm",
  viewPrebookingPaid: "booked",
  paidSheet: "viewPrebookingPaid",
  ticket: "viewPrebookingPaid",
  ticketExpanded: "ticket",
  setAutopay: "viewPrebooking",
  autopayDone: "setAutopay",
  dropSeats: "viewPrebooking",
};

// Bottom sheets: shown over the screen they were opened from, dimmed by a 60% black overlay.
const MODALS = new Set(["prebookIntro", "seatCount", "bwfIntro", "groupInvite", "memberSheet", "paidSheet", "setAutopay", "autopayDone", "dropSeats"]);
function baseScreenOf(stack) {
  for (let i = stack.length - 1; i >= 0; i--) if (!MODALS.has(stack[i])) return stack[i];
  let k = stack[0];
  while (k && MODALS.has(k)) k = PARENT[k]; // opened directly: use its parent in the flow
  return k || "nowShowing";
}

function App() {
  const initial = (location.hash || "").slice(1);
  const [stack, setStack] = React.useState([ROUTES[initial] ? initial : "nowShowing"]);
  const current = stack[stack.length - 1];

  React.useEffect(() => {
    history.replaceState(null, "", "#" + current);
  }, [current]);

  const go = (key) => setStack((s) => [...s, key]);
  // Back pops the history; if the screen was opened directly, fall back to its parent in the flow.
  const back = () =>
    setStack((s) => (s.length > 1 ? s.slice(0, -1) : PARENT[s[0]] ? [PARENT[s[0]]] : s));
  const jump = (key) => setStack([key]);

  // Typing a #route in the address bar jumps straight to that screen.
  React.useEffect(() => {
    const onHash = () => {
      const key = location.hash.slice(1);
      if (ROUTES[key]) setStack((s) => (s[s.length - 1] === key ? s : [key]));
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isModal = MODALS.has(current);
  const base = isModal ? baseScreenOf(stack) : current;
  const [baseName, , w, h] = ROUTES[base];
  const BaseScreen = window.Screens[baseName];
  const [name] = ROUTES[current];
  const Screen = window.Screens[name];
  // Each new screen starts at the top; opening a sheet scrolls back up so it covers what you see.
  const deviceRef = React.useRef(null);
  React.useEffect(() => {
    if (deviceRef.current) deviceRef.current.scrollTop = 0;
  }, [base, isModal]);

  return (
    <>
      <select className="screen-picker" value={current} onChange={(e) => jump(e.target.value)}>
        {Object.entries(ROUTES).map(([k, [n, id]]) => (
          <option key={k} value={k}>{n} ({id})</option>
        ))}
      </select>
      <div className={`device${isModal ? " modal-open" : ""}`} ref={deviceRef}>
        {/* The base screen keeps the same key while a sheet is open, so its state survives. */}
        {BaseScreen ? <BaseScreen key={base} go={go} back={back} /> : <div className="p-6">Missing screen: {baseName}</div>}
        {isModal && Screen && (
          <div className="absolute inset-0" style={{ zIndex: 40 }}>
            <Screen key={current} go={go} back={back} bare />
          </div>
        )}
        <Toast />
      </div>
    </>
  );
}

// Overview mode (index.html?all): every screen side by side, for reviewing against Figma.
function Overview() {
  const noop = () => {};
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24, alignItems: "flex-start" }}>
      {Object.entries(ROUTES).map(([k, [name, id, w, h]]) => {
        const Screen = window.Screens[name];
        return (
          <div key={k} style={{ width: w * 0.5 }}>
            <div style={{ font: "11px Roboto, sans-serif", marginBottom: 4 }}>{name} · {id}</div>
            <div style={{ width: w * 0.5, height: h * 0.5, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,.2)" }}>
              <div className="device" style={{ width: w, height: h, transform: "scale(0.5)", transformOrigin: "0 0", boxShadow: "none" }}>
                {Screen && <Screen go={noop} back={noop} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  new URLSearchParams(location.search).has("all") ? <Overview /> : <App />
);
