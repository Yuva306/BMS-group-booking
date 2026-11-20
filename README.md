# BookMyShow Group Booking — clickable prototype

Built from Figma file `GAh4GJTkQiksaSgeKMTn28`, section `50:13809` (20 frames).

## Run

```
./run.sh
```

Then open http://localhost:5173. (Google Fonts loads Roboto/Inter, so an internet connection is needed for exact type.)

- `http://localhost:5173/#<route>` jumps straight to a screen (the dropdown top-left does the same).
- `http://localhost:5173/?all` shows every screen side by side for review against Figma.

## Flow

Now Showing → Movie details → How many seats? → Book with Friends intro → Yuva's movie plan →
Group seat map (group chip opens member sheet) → Secure seats by prebooking → Prebooking intro →
Prebook Seats → Your seats are secured → View Prebooking → tap D06/D07 → Proceed booking 2 seats →
Contact Details → Confirm Booking → 2 seats are booked → View Prebooking (paid; chip opens paid
member sheet) → View Tickets → Ticket (tap to view / hide details).

Back chevrons, the dimmed backdrop behind sheets and the ticket close button go back one step.
Hold timers count down live.

## Interactions beyond the main path

- Seat maps: tap an available seat to select it, tap again to deselect; the "Proceed booking N seats"
  label updates. On View Prebooking, tap your held (green) seats to choose which to pay for.
- How many seats?: tap any number 1–10.
- Enter invite code: type any 6-character code (letters/digits), then tap the red Join button (or press Enter) to open the group seat map.
- Share Invite Link / C1X34B / Share your ticket: native share sheet, or copies to the clipboard.
- Contact Details: email and mobile are editable; Continue needs a valid email and a 10-digit number.
- Repick Seats → group seat map; "5 Tickets" → seat-count sheet; Edit (Confirm Booking) → Contact Details.
- Send reminder, price-row chevrons, M-Ticket: show a short message.
- Anything with no screen in Figma (search, filters, other tabs, trailer, offers, reviews, …) shows
  "… isn’t part of this prototype" instead of doing nothing.

## Structure

- `index.html` – loads React, Babel and Tailwind (vendored in `vendor/`), then each screen file.
- `app.jsx` – route table (screen ↔ Figma node id ↔ frame size) and back-stack navigation.
- `screens/*.jsx` – one file per screen; markup comes from Figma `get_design_context`.
  `seatmap.jsx` is the shared seat grid, `shared.jsx` holds tap targets and the countdown hook.
- `assets/` – images and icons exported from Figma.
- `tools/localize.py` – downloads Figma asset URLs in a screen file and rewrites them to `assets/`.
