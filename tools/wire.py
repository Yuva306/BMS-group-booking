"""Attach onClick handlers to Figma-exported elements by their data-node-id.

Usage: python3 -I tools/wire.py
Edit WIRING below. Each entry: (file, node_id, handler_expression). Running it twice is safe:
an element that already has an onClick is left alone.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

INVITE = "joinWithCode"
NIP = "notInPrototype"

WIRING = [
    # Now Showing (28:6524) — NowShowingBody receives `go`
    ("NowShowing.jsx", "28:6531", f'{NIP}("Search")'),
    ("NowShowing.jsx", "37:10297", f'{NIP}("Streaming this title")'),
    ("NowShowing.jsx", "37:10304", "() => joinWithCode(go)"),
    ("NowShowing.jsx", "37:10315", f'{NIP}("Filters")'),
    ("NowShowing.jsx", "37:10316", f'{NIP}("Filters")'),
    ("NowShowing.jsx", "37:10307", f'{NIP}("The New Releases filter")'),
    ("NowShowing.jsx", "37:10308", f'{NIP}("The New Releases filter")'),
    ("NowShowing.jsx", "37:10309", f'{NIP}("The Re-releases filter")'),
    ("NowShowing.jsx", "37:10310", f'{NIP}("The Re-releases filter")'),
    ("NowShowing.jsx", "37:10311", f'{NIP}("The Hindi filter")'),
    ("NowShowing.jsx", "37:10312", f'{NIP}("The Hindi filter")'),
    ("NowShowing.jsx", "37:10313", f'{NIP}("The Punjabi filter")'),
    ("NowShowing.jsx", "37:10314", f'{NIP}("The Punjabi filter")'),
    ("NowShowing.jsx", "37:10322", f'{NIP}("Avengers: Doomsday")'),
    ("NowShowing.jsx", "37:10324", f'{NIP}("Avengers: Doomsday")'),
    ("NowShowing.jsx", "37:10323", '() => go("movie")'),
    ("NowShowing.jsx", "37:10326", f'{NIP}("Browse by Cinemas")'),
    ("NowShowing.jsx", "37:10327", f'{NIP}("Browse by Cinemas")'),
    ("NowShowing.jsx", "37:10331", f'{NIP}("Browse by Cinemas")'),
    ("NowShowing.jsx", "28:6571", f'{NIP}("Home")'),
    ("NowShowing.jsx", "28:6577", f'{NIP}("Home")'),
    ("NowShowing.jsx", "28:6573", f'{NIP}("Live Events")'),
    ("NowShowing.jsx", "28:6581", f'{NIP}("Live Events")'),
    ("NowShowing.jsx", "28:6574", f'{NIP}("Profile")'),
    ("NowShowing.jsx", "28:6576", f'{NIP}("Profile")'),
    # Prebooking explainer (50:13694)
    ("PrebookIntro.jsx", "50:13784", "back"),
    ("PrebookIntro.jsx", "50:13763", "back"),
    # Movie details (37:10100)
    ("MovieDetails.jsx", "37:10117", f'{NIP}("The trailer")'),
    ("MovieDetails.jsx", "37:10124", f'{NIP}("Rating details")'),
    ("MovieDetails.jsx", "37:10140", f'{NIP}("The full synopsis")'),
    ("MovieDetails.jsx", "37:10144", f'{NIP}("Offer details")'),
    ("MovieDetails.jsx", "37:10149", f'{NIP}("Offer details")'),
    ("MovieDetails.jsx", "37:10157", f'{NIP}("Reviews")'),
    ("MovieDetails.jsx", "37:10164", f'{NIP}("Reviews")'),
    ("MovieDetails.jsx", "37:10168", f'{NIP}("Reviews")'),
    ("MovieDetails.jsx", "37:10172", f'{NIP}("Reviews")'),
    # Seat-count sheet (37:9786)
    ("SeatCount.jsx", "37:9987", "back"),
    ("SeatCount.jsx", "37:9809", f'{NIP}("Changing the showtime")'),
    # Book with Friends explainer (37:9134)
    ("BwfIntro.jsx", "37:9420", "back"),
    # Invite sheet (28:7313)
    ("GroupInvite.jsx", "28:7494", "back"),
    ("GroupInvite.jsx", "37:8012", f'{NIP}("Renaming the plan")'),
    ("GroupInvite.jsx", "37:7945", "shareInvite"),
    ("GroupInvite.jsx", "28:7614", "shareInvite"),
    # Group header (shared)
    ("GroupSeats.jsx", "37:8546", "shareInvite"),
    # Solo seats (50:13407)
    ("SoloSeats.jsx", "50:13684", '() => go("seatCount")'),
    ("SoloSeats.jsx", "50:13687", '() => go("seatCount")'),
    ("SoloSeats.jsx", "50:13688", f'{NIP}("Changing the showtime")'),
    # Member sheets
    ("MemberSheet.jsx", "37:8838", "shareInvite"),
    ("MemberSheet.jsx", "37:8837", "shareInvite"),
    ("MemberSheet.jsx", "50:13813", '() => toast("Reminder to choose seats sent to Shwas, Aadi, Rishi and Pranjal")'),
    ("PaidMemberSheet.jsx", "45:12599", "shareInvite"),
    ("PaidMemberSheet.jsx", "45:12598", "shareInvite"),
    ("PaidMemberSheet.jsx", "50:13810", '() => toast("Reminder to book sent to Shwas, Aadi, Rishi and Pranjal")'),
    # Prebook Seats (37:10409)
    ("PrebookSeats.jsx", "37:10446", '() => toast("Total ticket(s) price: 5 × ₹480.00 = ₹2400.00")'),
    ("PrebookSeats.jsx", "37:10453", '() => toast("Prebooking fee: 10% of ₹2400.00 = ₹240.00")'),
    # View Prebooking
    ("ViewPrebooking.jsx", "45:10670", '() => go("groupSeats")'),
    # Contact details (45:11714)
    ("ContactDetails.jsx", "45:11727", f'{NIP}("Terms & Conditions")'),
    # Confirm booking (45:11508)
    ("ConfirmBooking.jsx", "45:11528", '() => toast("M-Ticket: show the QR code on your phone at the cinema")'),
    ("ConfirmBooking.jsx", "45:11539", f'{NIP}("The cancellation policy")'),
    ("ConfirmBooking.jsx", "45:11541", f'{NIP}("The cancellation policy")'),
    ("ConfirmBooking.jsx", "45:11564", f'{NIP}("Contribution T&C")'),
    ("ConfirmBooking.jsx", "45:11575", "back"),
    ("ConfirmBooking.jsx", "45:11585", f'{NIP}("Offers")'),
    ("ConfirmBooking.jsx", "45:11565", f'{NIP}("Adding a contribution")'),
    # Ticket (29:116 / 45:11754)
    ("Ticket.jsx", "45:11773", "shareTicket"),
    ("Ticket.jsx", "45:11780", "shareTicket"),
    ("Ticket.jsx", "45:12282", f'{NIP}("The trailer")'),
]


def wire(src, node_id, handler):
    marker = f'data-node-id="{node_id}"'
    idx = src.find(marker)
    if idx < 0:
        raise SystemExit(f"node {node_id} not found")
    start = src.rfind("<", 0, idx)
    # end of the opening tag: first '>' after the marker that is not part of '=>'
    end = idx
    while True:
        end = src.index(">", end + 1)
        if src[end - 1] != "=":
            break
    tag = src[start:end]
    if "onClick=" in tag:
        return src
    if tag.endswith("/"):
        end -= 1
        tag = src[start:end]
    m = re.search(r'className="([^"]*)"', tag)
    if m and "cursor-pointer" not in m.group(1):
        tag = tag[: m.end(1)] + " cursor-pointer" + tag[m.end(1):]
    tag = tag.rstrip() + f" onClick={{{handler}}}"
    return src[:start] + tag + src[end:]


if __name__ == "__main__":
    files = {}
    for fname, node, handler in WIRING:
        path = os.path.join(ROOT, "screens", fname)
        files.setdefault(path, open(path, encoding="utf-8").read())
        files[path] = wire(files[path], node, handler)
    for path, src in files.items():
        open(path, "w", encoding="utf-8").write(src)
        print("wired", os.path.basename(path))
