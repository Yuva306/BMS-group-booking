(() => {
// Figma node 37:9134 "How many seats?" — "Introducing Book with Friends" sheet (37:9419)
// over the shared seat-page backdrop (37:9135, identical to 37:9787).
const imgImage4 = "assets/BwfIntro/b5289.png";
const imgLine2 = "assets/BwfIntro/8ff5d.svg";
const imgLine1 = "assets/BwfIntro/1924e.svg";
const imgFrame6 = "assets/BwfIntro/ca0cc.svg";
const imgFrame7 = "assets/BwfIntro/d8121.svg";

function BwfIntro({ go, back, bare }) {
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="37:9134" data-name="How many seats?" style={bare ? { background: "transparent" } : undefined}>
      {!bare && <SheetBackdropSeats />}
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0 cursor-pointer" data-node-id="37:9333" onClick={back} />
      <div className="absolute left-0 bottom-0 w-full max-h-[calc(100%-24px)] overflow-y-auto scroll-body rounded-tl-[16.68px] rounded-tr-[16.68px]">
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pt-[6.672px] px-[16px] relative rounded-tl-[16.68px] rounded-tr-[16.68px] w-full" data-node-id="37:9419" data-name="Seat count sheet">
          <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="37:9420" data-name="Sheet grab handle flow" onClick={back}>
            <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="37:9421" data-name="Sheet grab handle" />
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="37:9422" data-name="Red car illustration flow">
            <div className="h-[127px] relative shrink-0 w-[235px]" data-node-id="37:9423" data-name="image 4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[123.62%] left-[-0.11%] max-w-none top-[-0.65%] w-[100.21%]" src={imgImage4} />
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-node-id="37:9424">
              <div className="flex h-[0.28px] items-center justify-center relative shrink-0 w-[44.505px]" data-node-id="37:9425">
                <div className="-scale-y-100 flex-none rotate-[179.64deg]">
                  <div className="h-0 relative w-[44.506px]">
                    <div className="absolute inset-[-1.33px_0_-1.33px_-3%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[#4abdff] text-[12px] whitespace-nowrap" data-node-id="37:9426" style={{ fontVariationSettings: '"wdth" 100' }}>
                INTRODUCING
              </p>
              <div className="flex h-[0.28px] items-center justify-center relative shrink-0 w-[44.505px]" data-node-id="37:9427">
                <div className="flex-none rotate-[0.36deg]">
                  <div className="h-0 relative w-[44.506px]">
                    <div className="absolute inset-[-1.33px_0_-1.33px_-3%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9428" style={{ fontVariationSettings: '"wdth" 100' }}>
              Book with Friends
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:9429">
            <div className="relative shrink-0 size-[36px]" data-node-id="37:9430">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:9432" style={{ fontVariationSettings: '"wdth" 100' }}>{`Share code or link & start a group of upto 10 friends.`}</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:9433">
            <div className="relative shrink-0 size-[36px]" data-node-id="37:9434">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:9436" style={{ fontVariationSettings: '"wdth" 100' }}>
              Everybody can choose and pay for their own seats.
            </p>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start pb-[42px] pt-[9.007px] relative shrink-0 w-full" data-node-id="37:9441" data-name="Select seats flow">
            <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="37:9442" data-name="Select seats" onClick={() => go("groupInvite")}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I37:9442;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
                Sounds good, let’s go!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.BwfIntro = BwfIntro;
})();
