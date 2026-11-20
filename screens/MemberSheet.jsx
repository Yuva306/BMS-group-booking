(() => {
// Figma node 37:8547 — member-list sheet (37:8822) over the group seat page (same as 29:102).
const imgImage4 = "assets/MemberSheet/b5289.png";
const imgImage2 = "assets/MemberSheet/d704f.png";
const imgShare07 = "assets/MemberSheet/2d122.svg";

function MemberSheet({ back, bare }) {
  const sim = useGroupSim();
  const has = (name) => GROUP_FRIENDS.slice(0, sim.joined).includes(name);
  const joined = window.joinedAs === "Rishi"; // joined with a code: you are Rishi, Yuva is the host
  return (
    <div className="relative size-full" data-node-id="37:8547" style={bare ? { background: "transparent" } : undefined}>
      {!bare && <GroupSeatsBody seats={getGroupSeats()} owners={getGroupOwners()} proceedLabel={countSeats(getGroupSeats(), "y") ? `Proceed booking ${countSeats(getGroupSeats(), "y")} seat${countSeats(getGroupSeats(), "y") === 1 ? "" : "s"}` : "Proceed booking"} proceedDisabled={!countSeats(getGroupSeats(), "y")} />}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.6)] h-[851px] left-[calc(50%-0.5px)] top-[calc(50%-0.68px)] w-[392px] cursor-pointer" data-node-id="37:8854" onClick={back} />
      <div className="absolute left-0 top-[100.408px] w-[393px] h-[751.352px]">
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[48px] pt-[6.672px] px-[16px] relative rounded-tl-[16.68px] rounded-tr-[16.68px] size-full" data-node-id="37:8822" data-name="Seat count sheet">
          <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="37:8823" data-name="Sheet grab handle flow" onClick={back}>
            <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="37:8824" data-name="Sheet grab handle" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="37:8825" data-name="Red car illustration flow">
            <div className="h-[127px] relative shrink-0 w-[235px]" data-node-id="37:8826" data-name="image 4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[123.62%] left-[-0.11%] max-w-none top-[-0.65%] w-[100.21%]" src={imgImage4} />
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="37:8827" data-name="Select seats">
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:8828" style={{ fontVariationSettings: '"wdth" 100' }}>
                Yuva’s movie plan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] min-w-full relative shrink-0 text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-[min-content]" data-node-id="37:8830" style={{ fontVariationSettings: '"wdth" 100' }}>
              You can add upto 10 friends
            </p>
          </div>
          <div className="bg-[#d5f0ff] content-stretch flex flex-col gap-[16px] items-center overflow-clip pl-[16px] pr-[8px] py-[16px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="37:8831" data-name="Row · Seat count sheet 4 flow">
            <div className="-translate-x-1/2 absolute contents left-[calc(50%-1.32px)] top-[-19.01px]" data-node-id="37:8832">
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%-91.82px)] mix-blend-hard-light top-[-19.01px] w-[180px]" data-node-id="37:8833" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%+88.68px)] mix-blend-hard-light top-[-19.01px] w-[181px]" data-node-id="37:8834" data-name="image 3">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:8835">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] text-center" data-node-id="37:8836" style={{ fontVariationSettings: '"wdth" 100' }}>{`Share this code or link & start the group`}</p>
            </div>
            <p className="[word-break:break-word] font-['Inter'] font-extrabold leading-[1.1] not-italic relative shrink-0 text-[28px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap cursor-pointer" data-node-id="37:8837" onClick={shareInvite}>
              C1X34B
            </p>
            <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex gap-[8px] items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="37:8838" data-name="Select seats" onClick={shareInvite}>
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--text\/primary,#1a1a1a)] text-center whitespace-nowrap" data-node-id="37:8839" style={{ fontVariationSettings: '"wdth" 100' }}>
                Share Invite Link
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="37:8840" data-name="share-07">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare07} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10280">
            <div className="border-[var(--border\/default,#dcdcdc)] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="37:10217">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="37:10218">
                <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:10227">
                  <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10228">
                    Y
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:10253" data-name="Column · Row · Cinema header 1 2 alignment">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:10254" data-name="Column · Row · Cinema header 1 2">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10255" data-name="Wildwood - English flow">
                    <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10260">
                      Yuva
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pr-[18px] pt-[1.644px] relative shrink-0 w-full" data-node-id="37:10257" data-name="INOX: R-City, Ghatkopar flow">
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="37:10258" style={{ fontVariationSettings: '"wdth" 100' }}>
                      {joined ? "Host" : "You (Host)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {has("Shwas") && (
              <div className="border-[var(--border\/default,#dcdcdc)] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="37:10247">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="37:10248">
                  <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:10249">
                    <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10250">
                      S
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10251">
                  Shwas
                </p>
              </div>
            )}
            {has("Aadi") && (
              <div className="border-[var(--border\/default,#dcdcdc)] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="37:10262">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="37:10263">
                  <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:10264">
                    <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10265">
                      A
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10266">
                  Aadi
                </p>
              </div>
            )}
            {has("Rishi") && (
              <div className="border-[var(--border\/default,#dcdcdc)] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="37:10268">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="37:10269">
                  <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:10270">
                    <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10271">
                      R
                    </p>
                  </div>
                </div>
                {joined ? (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]">
                    <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10272">Rishi</p>
                    <div className="content-stretch flex flex-col items-start pr-[18px] pt-[1.644px] relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>You</p>
                    </div>
                  </div>
                ) : (
                  <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10272">Rishi</p>
                )}
              </div>
            )}
            {has("Pranjal") && (
              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="37:10274">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="37:10275">
                  <div className="bg-[var(--status\/blue-bg,#e8f0fe)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="37:10276">
                    <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10277">
                      P
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10278">
                  Pranjal
                </p>
              </div>
            )}
          </div>
          <div className="border border-[var(--brand\/red,#f5405c)] border-solid content-stretch flex h-[40.033px] items-center justify-center px-[12px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="50:13813" data-name="Select seats" onClick={() => toast("Reminder to choose seats sent to Shwas, Aadi, Rishi and Pranjal")}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="I50:13813;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              Send reminder to choose
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.MemberSheet = MemberSheet;
})();
