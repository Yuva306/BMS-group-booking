(() => {
// Figma node 45:13088 "Confirm booking" — "2 seats are booked". Hold timer counts down live.
const imgVector = "assets/SeatsBooked/bb36f.svg";
const imgClock = "assets/SeatsBooked/5fbd0.svg";

function SeatsBooked({ go, back }) {
  const left = useCountdown("1:24:18");
  const { paid, remaining } = sessionBooking();
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="45:13088" data-name="Confirm booking">
      <Header622 title="Booked" onBack={back} ids={["45:13089", "45:13094"]} />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-center justify-center min-h-px px-[16px] relative w-full" data-node-id="45:13102" data-name="Booking details">
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-node-id="45:13103">
          <div className="h-[150px] relative shrink-0 w-[208.011px]" data-node-id="45:13104" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[normal] relative shrink-0 text-[#747474] text-[20px] text-center whitespace-nowrap" data-node-id="45:13112" style={{ fontVariationSettings: '"wdth" 100' }}>
            {`${seatsWord(paid.length)} ${paid.length === 1 ? "is" : "are"} booked`}
          </p>
        </div>
        <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-[175.143px] cursor-pointer" data-node-id="45:13113" data-name="Continue" onClick={() => go("viewPrebookingPaid")}>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[13.344px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I45:13113;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
            Continue booking
          </p>
        </div>
        <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-full" data-node-id="45:13122">
          <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="45:13123" data-name="timer chip">
            <div className="relative shrink-0 size-[16px]" data-node-id="45:13124" data-name="clock">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
            </div>
            <div className="[word-break:break-word] font-['Roboto'] font-medium leading-[0] relative shrink-0 text-[0px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:13125" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal] mb-0 text-[12px]">{left} left on your secured seats</p>
              <p className="font-['Inter'] font-normal leading-[1.4] not-italic text-[12px]">{seatsWord(remaining.length)} still to be booked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.SeatsBooked = SeatsBooked;
})();
