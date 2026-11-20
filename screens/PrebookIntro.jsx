(() => {
// Figma node 50:13694 "Now showing" with the "Introducing Prebooking" sheet.
// The backdrop is identical to 28:6524, so it reuses NowShowingBody.
const imgImage4 = "assets/PrebookIntro/f9b45.png";
const imgLine2 = "assets/PrebookIntro/8ff5d.svg";
const imgLine1 = "assets/PrebookIntro/1924e.svg";
const imgFrame7 = "assets/PrebookIntro/d8121.svg";
const imgCurrencyRupee = "assets/PrebookIntro/a531f.svg";
const imgTicket01 = "assets/PrebookIntro/1b7dc.svg";
const imgSwitchHorizontal02 = "assets/PrebookIntro/583eb.svg";

function PrebookIntro({ go, back }) {
  return (
    <div className="relative size-full">
      <NowShowingBody />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.6)] h-[851px] left-[calc(50%-0.5px)] top-1/2 w-[392px] cursor-pointer" data-node-id="50:13784" onClick={back}/>
      <div className="absolute bg-[var(--surface\/white,white)] bottom-[-0.76px] content-stretch flex flex-col gap-[24px] items-center left-0 overflow-clip pt-[6.672px] px-[16px] rounded-tl-[16.68px] rounded-tr-[16.68px] w-[393px]" data-node-id="50:13762" data-name="Seat count sheet">
        <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="50:13763" data-name="Sheet grab handle flow" onClick={back}>
          <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="50:13764" data-name="Sheet grab handle" />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="50:13765" data-name="Red car illustration flow">
          <div className="h-[127px] relative shrink-0 w-[235px]" data-node-id="50:13766" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[123.62%] left-[-0.11%] max-w-none top-[-0.65%] w-[100.21%]" src={imgImage4} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-node-id="50:13767">
            <div className="flex h-[0.28px] items-center justify-center relative shrink-0 w-[44.505px]" data-node-id="50:13768">
              <div className="-scale-y-100 flex-none rotate-[179.64deg]">
                <div className="h-0 relative w-[44.506px]">
                  <div className="absolute inset-[-1.33px_0_-1.33px_-3%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine2} />
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[#4abdff] text-[12px] whitespace-nowrap" data-node-id="50:13769" style={{ fontVariationSettings: '"wdth" 100' }}>
              INTRODUCING
            </p>
            <div className="flex h-[0.28px] items-center justify-center relative shrink-0 w-[44.505px]" data-node-id="50:13770">
              <div className="flex-none rotate-[0.36deg]">
                <div className="h-0 relative w-[44.506px]">
                  <div className="absolute inset-[-1.33px_0_-1.33px_-3%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="50:13771" style={{ fontVariationSettings: '"wdth" 100' }}>
            Prebooking
          </p>
          <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] text-center w-[min-content]" data-node-id="50:13807">
            Lock in your seats first, decide and pay at your own pace.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="50:13808">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="50:13787">
            <div className="relative shrink-0 size-[36px]" data-node-id="50:13788">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="50:13790" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your seats are held for 2 hours, safe from anyone else booking them.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="50:13791">
            <div className="border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[36px]" data-node-id="50:13792">
              <div className="relative shrink-0 size-[20px]" data-node-id="50:13793" data-name="currency-rupee">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCurrencyRupee} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="50:13794" style={{ fontVariationSettings: '"wdth" 100' }}>
              Just 10% of the ticket price secures them instantly
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="50:13795">
            <div className="border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[36px]" data-node-id="50:13796">
              <div className="relative shrink-0 size-[20px]" data-node-id="50:13797" data-name="ticket-01">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicket01} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="50:13798" style={{ fontVariationSettings: '"wdth" 100' }}>
              Pay the remaining 90% whenever you’re ready, no need to rush.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="50:13799">
            <div className="border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[36px]" data-node-id="50:13800">
              <div className="relative shrink-0 size-[20px]" data-node-id="50:13801" data-name="switch-horizontal-02">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSwitchHorizontal02} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="50:13802" style={{ fontVariationSettings: '"wdth" 100' }}>
              Changed your mind? Swap for another seat of equal value without starting afresh.
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start pb-[42px] pt-[9.007px] relative shrink-0 w-full" data-node-id="50:13780" data-name="Select seats flow">
          <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="50:13781" data-name="Select seats" onClick={() => go("prebookSeats")}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I50:13781;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sounds good, let’s go!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.PrebookIntro = PrebookIntro;
})();
