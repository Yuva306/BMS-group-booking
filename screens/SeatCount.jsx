(() => {
// Figma node 37:9786 "How many seats?" — seat-count sheet over the seat page.
// The backdrop ("Select seats", 37:9787) is identical in 37:9134 and 28:7313, so it is exported.
const imgCellularWiFiBattery = "assets/SeatCount/efaa2.png";
const imgRedCarIllustration = "assets/SeatCount/5ae16.png";
const imgImage2 = "assets/SeatCount/d704f.png";
const imgChevronLeft = "assets/SeatCount/0becb.svg";
const imgChevronRight = "assets/SeatCount/ff204.svg";

function SheetBackdropSeats({ header = null, onBack, onSecure, onProceed, showtime, legend, seats = GROUP_SEATS, colors, footer, onSeat, proceedLabel = "Proceed booking 5 seats", proceedDisabled = false } = {}) {
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col h-[850.764px] items-start overflow-clip relative shrink-0 w-[393px]" data-node-id="37:9787" data-name="Select seats">
      <div className="content-stretch flex items-start pl-[31.633px] pr-[33.382px] relative shrink-0 w-full" data-node-id="37:9788" data-name="Status bar">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[2.177px] pt-[8.325px] relative" data-node-id="37:9789" data-name="StatusBar/iOS alignment">
          <div className="content-stretch flex h-[39.445px] items-center justify-between px-[21.516px] relative shrink-0 w-[83.031px]" data-node-id="37:9790" data-name="StatusBar/iOS">
            <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.481px] text-black whitespace-nowrap" data-node-id="I37:9790;1:38">
              6:08
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[9.989px] pt-[19.979px] relative shrink-0 w-[78.25px]" data-node-id="37:9791" data-name="Cellular Wi-Fi battery alignment">
          <div className="h-[19.979px] relative shrink-0 w-[78.25px]" data-node-id="37:9792" data-name="Cellular Wi-Fi battery">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiBattery} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[6.66px] relative shrink-0 w-full" data-node-id="37:9793" data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-node-id="37:9794" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-node-id="37:9795" data-name="Row · Cinema header 1">
            <div className={`relative shrink-0 size-[20px] ${onBack ? "cursor-pointer" : ""}`} data-node-id="37:9796" data-name="chevron-left" onClick={onBack}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:9797" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:9798" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:9799" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:9800" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Wildwood - English
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pr-[18px] pt-[1.644px] relative shrink-0 w-full" data-node-id="37:9801" data-name="INOX: R-City, Ghatkopar flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="37:9802" style={{ fontVariationSettings: '"wdth" 100' }}>
                    INOX: R-City, Ghatkopar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pr-[0.084px] pt-[3.481px] relative shrink-0 w-full" data-node-id="37:9803" data-name="Header divider flow">
          <div className="bg-[var(--border\/default,#dcdcdc)] h-[0.832px] relative shrink-0 w-full" data-node-id="37:9804" data-name="Header divider" />
        </div>
      </div>
      {header}
      {showtime || (<>
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start pb-[12px] px-[16px] relative shrink-0 w-full" data-node-id="37:9805" data-name="Showtime">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="37:9806" data-name="Date and ticket count">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[13.319px] text-[color:var(--text\/secondary,#6b6b6b)]" data-node-id="37:9807" style={{ fontVariationSettings: '"wdth" 100' }}>
            Fri, 20 Nov
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[12.303px] relative shrink-0 w-full" data-node-id="37:9808" data-name="Selected showtime">
          <div className="bg-[var(--status\/green,#1d9a4c)] content-stretch flex flex-col items-start pb-[4.319px] pt-[4.995px] relative rounded-[1.665px] shrink-0 w-[98.229px] cursor-pointer" data-node-id="37:9809" data-name="09:00 AM showtime" onClick={notInPrototype("Changing the showtime")}>
            <div className="content-stretch flex flex-col items-start pl-[23.309px] pr-[15.921px] relative shrink-0 w-full" data-node-id="37:9810" data-name="09:00 AM flow">
              <p className="[word-break:break-word] font-['Roboto'] font-bold leading-[1.18] relative shrink-0 text-[13.319px] text-[color:var(--surface\/white,white)] w-full" data-node-id="37:9811" style={{ fontVariationSettings: '"wdth" 100' }}>
                09:00 AM
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pl-[23.309px] pr-[17.921px] pt-[2.314px] relative shrink-0 w-full" data-node-id="37:9812" data-name="KOTAK INSIGNIA flow">
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[7.492px] text-[color:var(--surface\/white,white)] w-full" data-node-id="37:9813" style={{ fontVariationSettings: '"wdth" 100' }}>
                KOTAK INSIGNIA
              </p>
            </div>
          </div>
        </div>
      </div>
      </>)}
      {legend || (<>
      <div className="content-stretch flex items-start justify-between pb-[8px] pt-[24px] px-[16px] relative shrink-0 w-full" data-node-id="37:9814" data-name="Seat legend">
        <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="37:9815" data-name="Available legend">
          <div className="border-[0.468px] border-[var(--status\/green,#1d9a4c)] border-solid content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="37:9816" data-name="Seat/Cell" />
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9817" style={{ fontVariationSettings: '"wdth" 100' }}>
            Available
          </p>
        </div>
        <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="37:9818" data-name="Selected legend">
          <div className="bg-[var(--status\/blue,#2458d6)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="37:9819" data-name="Seat/Cell" />
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9820" style={{ fontVariationSettings: '"wdth" 100' }}>
            Selected by you
          </p>
        </div>
        <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="37:9821" data-name="Selected legend">
          <div className="bg-[var(--status\/green,#1d9a4c)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="37:9822" data-name="Seat/Cell" />
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9823" style={{ fontVariationSettings: '"wdth" 100' }}>
            Selected by friends
          </p>
        </div>
        <div className="content-stretch flex gap-[4.995px] items-center relative shrink-0" data-node-id="37:9824" data-name="Sold legend">
          <div className="bg-[var(--seat\/sold,#e3e3e3)] content-stretch flex items-center justify-center relative rounded-[1.873px] shrink-0 size-[14.984px]" data-node-id="37:9825" data-name="Seat/Cell" />
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.822px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9826" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sold
          </p>
        </div>
      </div>
      </>)}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px py-[24px] relative w-full" data-node-id="37:9827" data-name="Seat map">
        <SeatRows seats={seats} colors={colors} onSeat={onSeat} />
        <CinemaScreen />
      </div>
      {footer || (<>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[42px] px-[16px] relative shrink-0 w-full" data-node-id="37:9980" data-name="Select seats flow">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="37:9981">
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9982" style={{ fontVariationSettings: '"wdth" 100' }}>
            Still unsure about the plans?
          </p>
          <div className={`border border-[var(--brand\\/red,#f5405c)] border-solid content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full ${onSecure ? "cursor-pointer" : ""}`} data-node-id="37:9983" data-name="Select seats" onClick={onSecure}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="I37:9983;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              Secure seats by prebooking
            </p>
          </div>
        </div>
        <div className={`${proceedDisabled ? "bg-[var(--border\\/default,#dcdcdc)]" : "bg-[var(--brand\\/red,#f5405c)]"} content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full ${onProceed ? "cursor-pointer" : ""}`} data-node-id="37:9984" data-name="Select seats" onClick={onProceed}>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I37:9984;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
            {proceedLabel}
          </p>
        </div>
      </div>
      </>)}
    </div>
  );
}

// Seat-count picker (37:9993). Markup follows Figma: the selected number sits in a red pill;
// the first number and the one right after the pill have no left padding.
function SeatCountRow({ count, setCount }) {
  const num = "[word-break:break-word] font-['Roboto'] font-normal h-[16px] leading-[1.18] relative shrink-0 text-[13.344px] text-[color:var(--text\\/primary,#1a1a1a)] text-center w-[20.016px]";
  return (
    <div className="content-stretch flex flex-col items-start pl-[25.021px] pr-[24.45px] relative shrink-0 w-full" data-node-id="37:9993" data-name="Row · Seat count sheet 4 flow">
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="37:9994" data-name="Row · Seat count sheet 4">
        {Array.from({ length: 10 }, (_, k) => k + 1).map((n) =>
          n === count ? (
            <div key={n} className="content-stretch flex flex-col items-start pl-[1.668px] relative shrink-0 w-[36.697px] cursor-pointer" data-name={`Selected count ${n} alignment`}>
              <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex flex-col items-start pb-[9.02px] pt-[10.008px] relative rounded-[18.348px] shrink-0 w-[35.029px]">
                <div className="content-stretch flex flex-col items-start pl-[6.672px] pr-[8.34px] relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[13.344px] text-[color:var(--surface\/white,white)] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {n}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div key={n} className={`content-stretch flex flex-col items-start pb-[9.02px] ${n === 1 || n === count + 1 ? "w-[20.016px]" : "pl-[8.34px] w-[28.357px]"} pt-[10.008px] relative shrink-0 cursor-pointer`} data-name={`${n} alignment`} onClick={() => setCount(n)}>
              <p className={num} style={{ fontVariationSettings: '"wdth" 100' }}>
                {n}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function HowManySeats({ go, back }) {
  const [count, setCount] = React.useState(6);
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="37:9786" data-name="How many seats?">
      <SheetBackdropSeats />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.6)] h-[851px] left-[calc(50%-0.5px)] top-[calc(50%-0.68px)] w-[392px] cursor-pointer" data-node-id="37:9985" onClick={back} />
      <div className="absolute bg-[var(--surface\/white,white)] bottom-[0.6px] content-stretch flex flex-col gap-[16px] items-start left-0 overflow-clip pt-[6.672px] rounded-tl-[16.68px] rounded-tr-[16.68px] w-[393px]" data-node-id="37:9986" data-name="Seat count sheet">
        <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-node-id="37:9987" data-name="Sheet grab handle flow" onClick={back}>
          <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-node-id="37:9988" data-name="Sheet grab handle" />
        </div>
        <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[218.32px] pt-[25.02px] relative shrink-0 w-full" data-node-id="37:9989" data-name="How many seats? flow">
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:9990" style={{ fontVariationSettings: '"wdth" 100' }}>
            How many seats?
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center pl-[3.99px] relative shrink-0 w-full" data-node-id="37:9991" data-name="Red car illustration flow">
          <div className="h-[88.405px] relative shrink-0 w-[196.827px]" data-node-id="37:9992" data-name="Red car illustration">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[964.15%] left-[-50.85%] max-w-none top-[-611.32%] w-[200%]" src={imgRedCarIllustration} />
            </div>
          </div>
        </div>
        <SeatCountRow count={count} setCount={setCount} />
        <div className="content-stretch flex flex-col items-center pr-[7.748px] pt-[15.679px] relative shrink-0 w-full" data-node-id="37:10017" data-name="Seat category pricing">
          <div className="content-stretch flex gap-[40.747px] items-start relative shrink-0" data-node-id="37:10018" data-name="Seat categories">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-node-id="37:10019" data-name="Royal rows pricing">
              <div className="content-stretch flex flex-col items-start pb-[5.68px] relative shrink-0 w-full" data-node-id="37:10020" data-name="Category name">
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[9.174px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10021" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ROYAL ROWS
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[1.684px] relative shrink-0 w-full" data-node-id="37:10022" data-name="Ticket price">
                <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10023" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ₹480
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10024" data-name="Availability">
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.008px] text-[color:var(--status\/green,#1d9a4c)] whitespace-nowrap" data-node-id="37:10025" style={{ fontVariationSettings: '"wdth" 100' }}>
                  AVAILABLE
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[75px]" data-node-id="37:10026" data-name="Executive rows pricing">
              <div className="content-stretch flex flex-col items-start pb-[5.68px] relative shrink-0 w-full" data-node-id="37:10027" data-name="Category name">
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[9.174px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10028" style={{ fontVariationSettings: '"wdth" 100' }}>
                  EXECUTIVE ROWS
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[1.684px] relative shrink-0 w-full" data-node-id="37:10029" data-name="Ticket price">
                <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10030" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ₹430
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10031" data-name="Availability">
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.008px] text-[color:var(--status\/green,#1d9a4c)] whitespace-nowrap" data-node-id="37:10032" style={{ fontVariationSettings: '"wdth" 100' }}>
                  AVAILABLE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[42px] pl-[16.68px] pr-[16.027px] pt-[12px] relative shrink-0 w-full" data-node-id="37:10033" data-name="Select seats flow">
          <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="37:10034" data-name="Select seats" onClick={() => go("soloSeats")}>
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I37:10034;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              Select seats
            </p>
          </div>
          <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip py-[8px] relative rounded-[8.34px] shrink-0 w-full cursor-pointer" data-node-id="37:10035" data-name="Price breakdown" onClick={() => go("bwfIntro")}>
            <div className="bg-[#d5f0ff] content-stretch flex gap-[16px] items-center overflow-clip pl-[16px] pr-[8px] py-[16px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="37:10036">
              <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.65px)] top-[-18.99px]" data-node-id="37:10037">
                <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%-91.15px)] mix-blend-hard-light top-[-18.99px] w-[180px]" data-node-id="37:10038" data-name="image 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
                </div>
                <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%+89.35px)] mix-blend-hard-light top-[-18.99px] w-[181px]" data-node-id="37:10039" data-name="image 3">
                  <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage2} />
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-semibold leading-[1.18] min-w-px relative text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10040" style={{ fontVariationSettings: '"wdth" 100' }}>
                Book with Friends
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="37:10041" data-name="chevron-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SheetBackdropSeats = SheetBackdropSeats;
window.Screens.SeatCount = HowManySeats;
})();
