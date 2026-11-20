(() => {
// Figma node 45:12365 — member sheet after paying (45:12584) over the group seat page.
// The 1:24:18 hold timer counts down live.
const imgImage4 = "assets/PaidMemberSheet/b5289.png";
const imgImage2 = "assets/PaidMemberSheet/d704f.png";
const imgShare07 = "assets/PaidMemberSheet/2d122.svg";
const imgClock = "assets/PaidMemberSheet/5fbd0.svg";

function MemberRow({ id, letter, name, last }) {
  return (
    <div className={`${last ? "" : "border-[var(--border\\/default,#dcdcdc)] border-b border-solid "}content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative shrink-0 w-full`} data-node-id={id}>
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]">
          <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap">
            {letter}
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}

function PaidMemberSheet({ back, bare }) {
  const left = useCountdown("1:24:18");
  const { paid, remaining } = sessionBooking();
  return (
    <div className="relative size-full" data-node-id="45:12365" style={bare ? { background: "transparent" } : undefined}>
      {!bare && <GroupSeatsBody />}
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0 cursor-pointer" data-node-id="45:12583" onClick={back} />
      <div className="absolute left-0 bottom-0 w-full max-h-[calc(100%-24px)] overflow-y-auto scroll-body rounded-tl-[16.68px] rounded-tr-[16.68px]">
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[48px] pt-[6.672px] px-[16px] relative rounded-tl-[16.68px] rounded-tr-[16.68px] w-full" data-node-id="45:12584" data-name="Seat count sheet">
          <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="45:12585" data-name="Sheet grab handle flow" onClick={back}>
            <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="45:12586" data-name="Sheet grab handle" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="45:12587" data-name="Red car illustration flow">
            <div className="h-[127px] relative shrink-0 w-[235px]" data-node-id="45:12588" data-name="image 4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[123.62%] left-[-0.11%] max-w-none top-[-0.65%] w-[100.21%]" src={imgImage4} />
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="45:12589" data-name="Select seats">
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:12590" style={{ fontVariationSettings: '"wdth" 100' }}>
                Yuva’s movie plan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] min-w-full relative shrink-0 text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-[min-content]" data-node-id="45:12591" style={{ fontVariationSettings: '"wdth" 100' }}>
              5 Members
            </p>
          </div>
          <div className="bg-[#d5f0ff] content-stretch flex flex-col gap-[16px] items-center overflow-clip pl-[16px] pr-[8px] py-[16px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="45:12592" data-name="Row · Seat count sheet 4 flow">
            <div className="-translate-x-1/2 absolute contents left-[calc(50%-1.32px)] top-[-19.01px]" data-node-id="45:12593">
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%-91.82px)] mix-blend-hard-light top-[-19.01px] w-[180px]" data-node-id="45:12594" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%+88.68px)] mix-blend-hard-light top-[-19.01px] w-[181px]" data-node-id="45:12595" data-name="image 3">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="45:12596">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] text-center" data-node-id="45:12597" style={{ fontVariationSettings: '"wdth" 100' }}>{`Share this code or link & start the group`}</p>
            </div>
            <p className="[word-break:break-word] font-['Inter'] font-extrabold leading-[1.1] not-italic relative shrink-0 text-[28px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap cursor-pointer" data-node-id="45:12598" onClick={shareInvite}>
              C1X34B
            </p>
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex gap-[8px] items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="45:12599" data-name="Select seats" onClick={shareInvite}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--text\/primary,#1a1a1a)] text-center whitespace-nowrap" data-node-id="45:12600" style={{ fontVariationSettings: '"wdth" 100' }}>
                Share Invite Link
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="45:12601" data-name="share-07">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare07} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:12602">
            <div className="border-[var(--border\/default,#dcdcdc)] border-b border-solid content-stretch flex flex-col items-end justify-center px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="45:12603">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="45:13057">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="45:12604">
                  <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="45:12605">
                    <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="45:12606">
                      Y
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="45:12607" data-name="Column · Row · Cinema header 1 2 alignment">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="45:12608" data-name="Column · Row · Cinema header 1 2">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:12609" data-name="Wildwood - English flow">
                      <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:12610">
                        Yuva
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start pr-[18px] pt-[1.644px] relative shrink-0 w-full" data-node-id="45:12611" data-name="INOX: R-City, Ghatkopar flow">
                      <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:12612" style={{ fontVariationSettings: '"wdth" 100' }}>
                        You (Host)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--status\/green-bg,#e6f7ec)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-node-id="45:13017" data-name="status pill">
                  <p className="[word-break:break-word] font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--status\/green,#1d9a4c)] whitespace-nowrap" data-node-id="45:13018">
                    {`Paid for ${paid.join(", ")}`}
                  </p>
                </div>
              </div>
            </div>
            <MemberRow id="45:12613" letter="S" name="Shwas" />
            <MemberRow id="45:12618" letter="A" name="Aadi" />
            <MemberRow id="45:12623" letter="R" name="Rishi" />
            <MemberRow id="45:12628" letter="P" name="Pranjal" last />
          </div>
          <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="45:13026" data-name="timer chip">
            <div className="relative shrink-0 size-[16px]" data-node-id="45:13027" data-name="clock">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
            </div>
            <div className="[word-break:break-word] font-['Roboto'] font-medium leading-[0] relative shrink-0 text-[0px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:13028" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal] mb-0 text-[12px]">{left} left on your secured seats</p>
              <p className="font-['Inter'] font-normal leading-[1.4] not-italic text-[12px]">{seatsWord(remaining.length)} still to be booked.</p>
            </div>
          </div>
          <div className="border border-[var(--brand\/red,#f5405c)] border-solid content-stretch flex h-[40.033px] items-center justify-center px-[12px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="50:13810" data-name="Select seats" onClick={() => toast("Reminder to book sent to Shwas, Aadi, Rishi and Pranjal")}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="I50:13810;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              Send reminder to book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.PaidMemberSheet = PaidMemberSheet;
})();
