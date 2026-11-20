// Transparent tap target placed over a button drawn by the Figma markup.
// Coordinates are in Figma frame pixels (relative to the screen's top-left).
function Hot({ x, y, w, h, onClick, r = 8, label }) {
  return (
    <div
      className="hot"
      role="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      style={{ left: x, top: y, width: w, height: h, borderRadius: r }}
    />
  );
}

// Live countdown starting from "H:MM:SS". Returns the formatted remaining time.
function useCountdown(start) {
  const toSecs = (s) => s.split(":").reduce((acc, p) => acc * 60 + Number(p), 0);
  const [left, setLeft] = React.useState(() => toSecs(start));
  React.useEffect(() => {
    const id = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(left / 3600);
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// Short feedback message shown at the bottom of the phone frame (prototype-only, not in Figma).
function toast(message) {
  window.dispatchEvent(new CustomEvent("proto-toast", { detail: message }));
}

function Toast() {
  const [msg, setMsg] = React.useState(null);
  React.useEffect(() => {
    let t;
    const on = (e) => {
      setMsg(e.detail);
      clearTimeout(t);
      t = setTimeout(() => setMsg(null), 2200);
    };
    window.addEventListener("proto-toast", on);
    return () => window.removeEventListener("proto-toast", on);
  }, []);
  if (!msg) return null;
  return <div className="proto-toast">{msg}</div>;
}

const INVITE_LINK = "https://in.bookmyshow.com/plan/C1X34B";

// Share via the native share sheet when available, otherwise copy to the clipboard.
async function shareLink(title, text, url) {
  try {
    if (navigator.share) {
      await navigator.share(url ? { title, text, url } : { title, text });
      return;
    }
  } catch (e) {
    if (e && e.name === "AbortError") return;
  }
  try {
    await navigator.clipboard.writeText(url ? `${text} ${url}` : text);
    toast("Link copied to clipboard");
  } catch (e) {
    toast(url || text);
  }
}

const shareInvite = () => shareLink("Yuva’s movie plan", "Join my movie plan on BookMyShow with code C1X34B:", INVITE_LINK);

// Not part of the Figma flow: tell the viewer instead of doing nothing.
const notInPrototype = (what) => () => toast(`${what} isn’t part of this prototype`);

// "Enter invite code": joiners type the group code to land in the group seat map.
function joinWithCode(go) {
  const code = window.prompt("Enter invite code");
  if (code == null) return;
  if (code.trim().toUpperCase() === "C1X34B") go("groupSeats");
  else toast("No movie plan found for that code. Try C1X34B");
}

const shareTicket = () => shareLink("Wildwood tickets", "My tickets for Wildwood, Fri 20 Nov 2026, 09:00 AM at INOX: R-City, Ghatkopar. Booking ID: TUAECKP", "");

// Seats chosen for payment, read by Confirm Booking. `prebooked` = their 10% fee was paid already.
function setPaySelection(seats, prebooked) {
  window.paySelection = { seats, prebooked };
}
const seatIdsOf = (seats, codes) =>
  Object.entries(seats).flatMap(([row, st]) =>
    st.split("").map((c, i) => (codes.includes(c) ? row + String(i + 1).padStart(2, "0") : null)).filter(Boolean)
  );

// What this session has booked: `paid` = seats paid for at Confirm Booking,
// `remaining` = seats still held for the group (from View Prebooking, incl. any repick swaps).
// Falls back to the Figma state (paid D06, D07; held D06–D10) when a screen is opened directly.
function sessionBooking() {
  const paid = window.paySelection ? window.paySelection.seats : ["D06", "D07"];
  const held = window.lastHeld ? seatIdsOf(window.lastHeld, "fy") : ["D06", "D07", "D08", "D09", "D10"];
  const remaining = held.filter((id) => !paid.includes(id));
  return { paid, held, remaining };
}
const seatsWord = (n) => `${n} seat${n === 1 ? "" : "s"}`;

window.Hot = Hot;
window.sessionBooking = sessionBooking;
window.seatsWord = seatsWord;
window.setPaySelection = setPaySelection;
window.seatIdsOf = seatIdsOf;
window.joinWithCode = joinWithCode;
window.shareTicket = shareTicket;
window.useCountdown = useCountdown;
window.toast = toast;
window.Toast = Toast;
window.shareLink = shareLink;
window.shareInvite = shareInvite;
window.notInPrototype = notInPrototype;
