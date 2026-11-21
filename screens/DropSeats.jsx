(() => {
// "Cancel Prebooking?" sheet — Figma 76:18595 (frame 76:18317, section 77:18819).
// Opened from "Drop Seats" (76:18311) on View Prebooking. Tap your secured (green) seats to
// pick them for cancelling; "Yes, cancel" releases them, "No, continue booking" closes the sheet.
const imgCancelArt = "assets/DropSeats/cancel-art.png";
const imgInfoCircle = "assets/DropSeats/info-circle.svg";

function DropSeats({ back }) {
  const vp = window.vpCurrent || { seats: GROUP_SEATS, owners: DEFAULT_OWNERS, drop: () => {} };
  // Start from the held seats with nothing picked; pay-selection blue goes back to green.
  const [seats, setSeats] = React.useState(() =>
    Object.fromEntries(Object.entries(vp.seats).map(([r, st]) => [r, st.replace(/y/g, "f")]))
  );
  const picked = seatIdsOf(seats, "y");
  const onSeat = (id, state) => {
    if (state === "f") setSeats((x) => setSeat(x, id, "y"));
    else if (state === "y") setSeats((x) => setSeat(x, id, "f"));
    else if (state === "r") toast("Booked seats cannot be cancelled");
    else toast("Only your secured seats can be dropped");
  };
  const cancel = () => {
    if (!picked.length) return toast("Select the seats you want to cancel");
    back();
    vp.drop(picked);
  };
  return (
    <div className="relative size-full" data-node-id="76:18317">
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0 cursor-pointer" data-node-id="76:18594" data-name="Rectangle 3" onClick={back} />
      <div className="absolute left-0 bottom-0 w-full max-h-[calc(100%-24px)] overflow-y-auto scroll-body rounded-tl-[16.68px] rounded-tr-[16.68px]">
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pt-[6.672px] px-[16px] relative rounded-tl-[16.68px] rounded-tr-[16.68px] w-full" data-node-id="76:18595" data-name="Seat count sheet">
          <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="76:18596" data-name="Sheet grab handle flow" onClick={back}>
            <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="76:18597" data-name="Sheet grab handle" />
          </div>
          <div className="h-[109px] relative shrink-0 w-[175px]" data-node-id="76:18598" data-name="image 8">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[154.55%] left-[-21.95%] max-w-none top-[-23.1%] w-[143.9%]" src={imgCancelArt} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="76:18599" data-name="Red car illustration flow">
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="76:18600">
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="76:18601" style={{ fontVariationSettings: '"wdth" 100' }}>
                Cancel Prebooking?
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-full" data-node-id="76:18602">
            {picked.length ? `${seatsWord(picked.length)} selected to cancel` : "Select seats to cancel"}
          </p>
          <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="77:18619" data-name="Seat map">
            <SeatRows seats={seats} onSeat={onSeat} owners={vp.owners} />
            <CinemaScreen caption={false} />
          </div>
          <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[12px] items-center overflow-clip pl-[12px] pr-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="77:18614" data-name="timer chip">
            <div className="relative shrink-0 size-[20px]" data-node-id="77:18615" data-name="info-circle">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfoCircle} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal leading-[1.4] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="77:18616">
              Please note that the pre-booking fee is non-refundable if you cancel your reservation.
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[12px] items-start pb-[42px] relative shrink-0 w-full" data-node-id="76:18603" data-name="Select seats flow">
            <div className={`${picked.length ? "bg-[var(--brand\\/red,#f5405c)]" : "bg-[var(--border\\/default,#dcdcdc)]"} content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex flex-[1_0_0] h-[40.033px] items-center justify-center min-w-px relative rounded-[6.672px] cursor-pointer`} data-node-id="76:18604" data-name="Select seats" onClick={cancel}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I76:18604;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
                Yes, cancel
              </p>
            </div>
            <div className="border border-[var(--brand\/red,#f5405c)] border-solid content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex flex-[1_0_0] h-[40.033px] items-center justify-center min-w-px relative rounded-[6.672px] cursor-pointer" data-node-id="76:18607" data-name="Select seats" onClick={back}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="I76:18607;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
                No, continue booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.DropSeats = DropSeats;
})();
