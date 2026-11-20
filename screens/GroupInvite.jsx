(() => {
// Figma node 28:7313 "How many seats?" — "Yuva's movie plan" invite sheet (28:7493)
// over the shared seat-page backdrop (37:8858, identical to 37:9787).
const imgImage4 = "assets/GroupInvite/b5289.png";
const imgImage2 = "assets/GroupInvite/d704f.png";
const imgEdit01 = "assets/GroupInvite/dfa52.svg";
const imgShare07 = "assets/GroupInvite/2d122.svg";

function GroupInvite({ go, back, bare }) {
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="28:7313" data-name="How many seats?" style={bare ? { background: "transparent" } : undefined}>
      {!bare && <SheetBackdropSeats />}
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0 cursor-pointer" data-node-id="37:8856" onClick={back} />
      <div className="absolute left-0 bottom-0 w-full max-h-[calc(100%-24px)] overflow-y-auto scroll-body rounded-tl-[16.68px] rounded-tr-[16.68px]">
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pt-[6.672px] px-[16px] relative rounded-tl-[16.68px] rounded-tr-[16.68px] w-full" data-node-id="28:7493" data-name="Seat count sheet">
          <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="28:7494" data-name="Sheet grab handle flow" onClick={back}>
            <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="28:7495" data-name="Sheet grab handle" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="28:7498" data-name="Red car illustration flow">
            <div className="h-[127px] relative shrink-0 w-[235px]" data-node-id="28:7609" data-name="image 4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[123.62%] left-[-0.11%] max-w-none top-[-0.65%] w-[100.21%]" src={imgImage4} />
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex gap-[8px] items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="37:8010" data-name="Select seats">
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:8015" style={{ fontVariationSettings: '"wdth" 100' }}>
                Yuva’s movie plan
              </p>
              <div className="relative shrink-0 size-[16px] cursor-pointer" data-node-id="37:8012" data-name="edit-01" onClick={notInPrototype("Renaming the plan")}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit01} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] min-w-full relative shrink-0 text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-[min-content]" data-node-id="37:8018" style={{ fontVariationSettings: '"wdth" 100' }}>
              You can add upto 10 friends
            </p>
          </div>
          <div className="bg-[#d5f0ff] content-stretch flex flex-col gap-[16px] items-center overflow-clip pl-[16px] pr-[8px] py-[16px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="28:7500" data-name="Row · Seat count sheet 4 flow">
            <div className="-translate-x-1/2 absolute contents left-[calc(50%-1.32px)] top-[-19.01px]" data-node-id="37:8027">
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%-91.82px)] mix-blend-hard-light top-[-19.01px] w-[180px]" data-node-id="37:8028" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%+88.68px)] mix-blend-hard-light top-[-19.01px] w-[181px]" data-node-id="37:8029" data-name="image 3">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:7935">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] text-center" data-node-id="37:7938" style={{ fontVariationSettings: '"wdth" 100' }}>{`Share this code or link & start the group`}</p>
            </div>
            <p className="[word-break:break-word] font-['Inter'] font-extrabold leading-[1.1] not-italic relative shrink-0 text-[28px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap cursor-pointer" data-node-id="28:7614" onClick={shareInvite}>
              C1X34B
            </p>
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex gap-[8px] items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="37:7945" data-name="Select seats" onClick={shareInvite}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--text\/primary,#1a1a1a)] text-center whitespace-nowrap" data-node-id="37:7946" style={{ fontVariationSettings: '"wdth" 100' }}>
                Share Invite Link
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="37:7947" data-name="share-07">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare07} />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start pb-[42px] relative shrink-0 w-full" data-node-id="28:7540" data-name="Select seats flow">
            <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="37:7950" data-name="Select seats" onClick={() => { window.joinedAs = null; startGroupSim(); go("groupSeats"); }}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I37:7950;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
                Start group booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.GroupInvite = GroupInvite;
})();
