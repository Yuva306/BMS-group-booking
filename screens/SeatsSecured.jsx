(() => {
// Figma node 45:11026 "Confirm booking" — "Your seats are secured". Hold timer counts down live.
const imgCellularWiFiBattery = "assets/SeatsSecured/0ac67.png";
const imgChevronLeft = "assets/SeatsSecured/0becb.svg";
const imgVector = "assets/SeatsSecured/bb36f.svg";
const imgClock = "assets/SeatsSecured/5fbd0.svg";

// Status bar + titled header shared by the 6:22 screens (37:10409, 45:11026, 45:13088, 45:11508).
function Header622({ title, onBack, ids }) {
  return (
    <>
      <div className="content-stretch flex gap-[168.092px] items-start pl-[31.692px] pr-[32.707px] relative shrink-0 w-full" data-node-id={ids && ids[0]} data-name="Status bar">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[7.185px] pt-[8.34px] relative" data-name="StatusBar/iOS alignment">
          <div className="content-stretch flex h-[39.519px] items-center justify-between px-[21.556px] relative shrink-0 w-[82.112px]" data-name="StatusBar/iOS">
            <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.514px] text-black whitespace-nowrap">
              6:22
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[15.012px] pt-[20.016px] relative shrink-0 w-[78.397px]" data-name="Cellular Wi-Fi battery alignment">
          <div className="h-[20.016px] relative shrink-0 w-[78.397px]" data-name="Cellular Wi-Fi battery">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiBattery} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[6.66px] relative shrink-0 w-full" data-node-id={ids && ids[1]} data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-name="Row · Cinema header 1">
            <div className="relative shrink-0 size-[20px] cursor-pointer" data-name="chevron-left" onClick={onBack}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SeatsSecured({ go, back }) {
  const left = useCountdown("1:59:58");
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="45:11026" data-name="Confirm booking">
      <Header622 title="Prebook Seats" onBack={back} ids={["45:11027", "45:11032"]} />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-center justify-center min-h-px px-[16px] relative w-full" data-node-id="45:11040" data-name="Booking details">
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-node-id="45:11142">
          <div className="h-[150px] relative shrink-0 w-[208.011px]" data-node-id="45:11126" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[normal] relative shrink-0 text-[#747474] text-[20px] text-center whitespace-nowrap" data-node-id="45:11135" style={{ fontVariationSettings: '"wdth" 100' }}>
            Your seats are secured
          </p>
        </div>
        <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-[175.143px] cursor-pointer" data-node-id="45:11144" data-name="Continue" onClick={() => go("viewPrebooking")}>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[13.344px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I45:11144;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
            Continue booking
          </p>
        </div>
        <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="45:11137" data-name="timer chip">
          <div className="relative shrink-0 size-[16px]" data-node-id="45:11138" data-name="clock">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:11139" style={{ fontVariationSettings: '"wdth" 100' }}>
            {left} left before your hold expires
          </p>
        </div>
      </div>
    </div>
  );
}

window.Header622 = Header622;
window.Screens.SeatsSecured = SeatsSecured;
})();
