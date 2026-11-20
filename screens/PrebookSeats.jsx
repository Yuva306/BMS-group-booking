(() => {
// Figma node 37:10409 "Confirm booking" (Prebook Seats payment screen)
const imgCellularWiFiBattery = "assets/PrebookSeats/0ac67.png";
const imgChevronLeft = "assets/PrebookSeats/0becb.svg";
const imgFrame7 = "assets/PrebookSeats/d8121.svg";
const imgCurrencyRupee = "assets/PrebookSeats/a531f.svg";
const imgTicket01 = "assets/PrebookSeats/1b7dc.svg";
const imgSwitchHorizontal02 = "assets/PrebookSeats/583eb.svg";
const imgGroup = "assets/PrebookSeats/1e0e0.svg";

// Seat price by tier (Figma seat map: ₹480 ROYAL ROWS A–C, ₹430 EXECUTIVE ROWS D–E).
const seatPrice = (id) => ("ABC".includes(id[0]) ? 480 : 430);
const priceOf = (list) => list.reduce((sum, id) => sum + seatPrice(id), 0);
const fmt = (n) => `₹${n.toFixed(2)}`;
const seatIds = (seats, codes) =>
  Object.entries(seats).flatMap(([row, st]) =>
    st.split("").map((c, i) => (codes.includes(c) ? row + String(i + 1).padStart(2, "0") : null)).filter(Boolean)
  );

// What is being prebooked: set by the seat screen's "Secure seats by prebooking".
// Opened directly, it falls back to the Figma group state (you: D06, D07; friends: D08–D10).
function prebookContext() {
  const c = window.prebookContext || { mode: "group", seats: GROUP_SEATS };
  const owners = c.owners || seatOwnersFor(c.seats);
  return c.mode === "solo"
    ? { mode: "solo", mine: seatIds(c.seats, "f"), friends: [], owners }
    : { mode: "group", mine: seatIds(c.seats, "y"), friends: seatIds(c.seats, "f"), owners };
}

function PrebookSeats({ go, back }) {
  const ctx = React.useMemo(prebookContext, []);
  const [scope, setScope] = React.useState("mine");
  const seats = scope === "all" ? ctx.mine.concat(ctx.friends) : ctx.mine;
  const ticketTotal = priceOf(seats);
  const fee = ticketTotal * 0.1;
  const priceBreakdown = seats.map((id) => `${id} ${fmt(seatPrice(id))}`).join(" + ") + ` = ${fmt(ticketTotal)}`;
  return (
    <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start relative size-full" data-node-id="37:10409" data-name="Confirm booking">
      <div className="content-stretch flex gap-[168.092px] items-start pl-[31.692px] pr-[32.707px] relative shrink-0 w-full" data-node-id="37:10410" data-name="Status bar">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[7.185px] pt-[8.34px] relative" data-node-id="37:10411" data-name="StatusBar/iOS alignment">
          <div className="content-stretch flex h-[39.519px] items-center justify-between px-[21.556px] relative shrink-0 w-[82.112px]" data-node-id="37:10412" data-name="StatusBar/iOS">
            <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.514px] text-black whitespace-nowrap" data-node-id="I37:10412;1:38">
              6:22
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[15.012px] pt-[20.016px] relative shrink-0 w-[78.397px]" data-node-id="37:10413" data-name="Cellular Wi-Fi battery alignment">
          <div className="h-[20.016px] relative shrink-0 w-[78.397px]" data-node-id="37:10414" data-name="Cellular Wi-Fi battery">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiBattery} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[6.66px] relative shrink-0 w-full" data-node-id="37:10516" data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-node-id="37:10517" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-node-id="37:10518" data-name="Row · Cinema header 1">
            <div className="relative shrink-0 size-[20px] cursor-pointer" data-node-id="37:10519" data-name="chevron-left" onClick={back}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:10520" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:10521" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10522" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10523" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Prebook Seats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="37:10420" data-name="Booking details">
        <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] relative shrink-0 w-full" data-node-id="37:10421" data-name="Movie and show details flow">
          <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[8.34px] shrink-0 w-full" data-node-id="37:10422" data-name="Movie and show details">
            <div className="content-stretch flex flex-col items-start pb-[11.71px] pl-[16.68px] pr-[15.012px] pt-[10.008px] relative shrink-0 w-full" data-node-id="37:10423" data-name="Movie and session">
              <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.25] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10424" data-name="Movie title and ticket count">
                <p className="flex-[1_0_0] font-['Roboto'] font-medium min-w-px relative" data-node-id="37:10425" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Wildwood
                </p>
                <p className="font-['Roboto'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="37:10426" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {seats.length}
                </p>
              </div>
              <div className="content-stretch flex items-start pt-[0.684px] relative shrink-0 w-full" data-node-id="37:10427" data-name="Session and mobile ticket">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.25] min-w-px relative text-[13.344px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10428" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Fri, 20 Nov, 2026 | 09:00 AM
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[0.01px] relative shrink-0 w-full" data-node-id="37:10434" data-name="Movie metadata">
                <div className="[word-break:break-word] font-['Roboto'] font-normal leading-[0] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="37:10435" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.25] mb-0">English (2D)</p>
                  <p className="leading-[1.25] mb-0">{seats.join(", ")}</p>
                  <p className="leading-[1.25]">INOX: R-City, Ghatkopar (INSIGNIA 8)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="37:10542">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:10533">
            <div className="relative shrink-0 size-[36px]" data-node-id="37:10553">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10536" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your seats will be secured for 2 hours after you pay.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:10537">
            <div className="border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[36px]" data-node-id="37:10560">
              <div className="relative shrink-0 size-[20px]" data-node-id="37:10561" data-name="currency-rupee">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCurrencyRupee} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10540" style={{ fontVariationSettings: '"wdth" 100' }}>
              The prebooking fee is 10% of the ticket price and is non-refundable if the booking isn’t completed in time.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:10548">
            <div className="border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[36px]" data-node-id="37:10556">
              <div className="relative shrink-0 size-[20px]" data-node-id="37:10557" data-name="ticket-01">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicket01} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10551" style={{ fontVariationSettings: '"wdth" 100' }}>
              Pay the remaining 90% within 2 hours, or the secured seats will be released.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="37:10565">
            <div className="border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[999px] shrink-0 size-[36px]" data-node-id="37:10566">
              <div className="relative shrink-0 size-[20px]" data-node-id="37:10567" data-name="switch-horizontal-02">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSwitchHorizontal02} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[1.18] min-w-px relative text-[11.654px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10568" style={{ fontVariationSettings: '"wdth" 100' }}>
              Swap your secured seats for other available ones of equal value.
            </p>
          </div>
        </div>
        {ctx.mode === "group" && (
          <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[11.676px] relative shrink-0 w-full" data-name="Prebook for flow">
            <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[6.68px] pt-[13.344px] relative rounded-[8.34px] shrink-0 w-full" data-name="Prebook for">
              <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.25] pl-[16.68px] pr-[15.012px] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Prebook for
              </p>
              {[
                ["mine", "Prebook seats selected by me", ctx.mine],
                ["all", "Prebook all selected seats", ctx.mine.concat(ctx.friends)],
              ].map(([key, label, list], i) => (
                <div key={key} className={`content-stretch flex gap-[10px] items-center pl-[16.68px] pr-[15.012px] py-[10px] relative shrink-0 w-full cursor-pointer ${i ? "border-t border-[var(--border\\/default,#dcdcdc)] border-solid" : ""}`} onClick={() => setScope(key)}>
                  <div className={`rounded-[999px] shrink-0 size-[16px] border-solid ${scope === key ? "border-[5px] border-[var(--brand\\/red,#f5405c)]" : "border border-[var(--border\\/default,#dcdcdc)]"}`} />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      {label}
                    </p>
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[10.842px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      {list.length ? `${list.join(", ")} · ${list.length} seat${list.length === 1 ? "" : "s"}` : "No seats picked yet"}
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-right" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {fmt(priceOf(list) * 0.1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[11.676px] relative shrink-0 w-full" data-node-id="37:10443" data-name="Price breakdown flow">
          <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[6.68px] pt-[13.344px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="37:10444" data-name="Price breakdown">
            <div className="content-stretch flex items-start justify-between pl-[16.68px] pr-[15.012px] relative shrink-0 w-full" data-node-id="37:10445" data-name="Ticket price">
              <div className="content-stretch flex gap-[6.74px] items-center relative shrink-0 cursor-pointer" data-node-id="37:10446" data-name="Ticket price label" onClick={() => toast(priceBreakdown)}>
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10447" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Total Ticket(s) price
                </p>
                <div className="content-stretch flex flex-col items-start overflow-clip px-[1.39px] py-[2.78px] relative shrink-0 w-[8.34px]" data-node-id="37:10448" data-name="Expand ticket price">
                  <div className="h-[2.78px] relative shrink-0 w-[5.56px]" data-node-id="37:10449" data-name="Group">
                    <div className="absolute inset-[-19.89%_-9.95%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-right w-[60.049px]" data-node-id="37:10451" style={{ fontVariationSettings: '"wdth" 100' }}>
                {fmt(ticketTotal)}
              </p>
            </div>
            <div className="content-stretch flex items-start justify-between pl-[16.68px] pr-[15.012px] pt-[21.696px] relative shrink-0 w-full" data-node-id="37:10452" data-name="Convenience fee">
              <div className="content-stretch flex gap-[6.74px] items-center relative shrink-0 cursor-pointer" data-node-id="37:10453" data-name="Convenience fee label" onClick={() => toast(`Prebooking fee: 10% of ${fmt(ticketTotal)} = ${fmt(fee)}`)}>
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="37:10454" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Prebooking fee
                </p>
                <div className="content-stretch flex flex-col items-start overflow-clip px-[1.39px] py-[2.78px] relative shrink-0 w-[8.34px]" data-node-id="37:10455" data-name="Expand convenience fees">
                  <div className="h-[2.78px] relative shrink-0 w-[5.56px]" data-node-id="37:10456" data-name="Group">
                    <div className="absolute inset-[-19.89%_-9.95%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-right w-[60.049px]" data-node-id="37:10458" style={{ fontVariationSettings: '"wdth" 100' }}>
                {fmt(fee)}
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[15.02px] relative shrink-0 w-full" data-node-id="37:10467" data-name="Price divider">
              <div className="bg-[var(--border\/default,#dcdcdc)] h-[0.834px] relative shrink-0 w-full" data-node-id="37:10468" data-name="Price divider" />
            </div>
            <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.25] pl-[16.68px] pr-[15.012px] pt-[10.85px] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10469" data-name="Order total">
              <p className="flex-[1_0_0] font-['Roboto'] font-medium min-w-px relative" data-node-id="37:10470" style={{ fontVariationSettings: '"wdth" 100' }}>
                Order total
              </p>
              <p className="font-['Roboto'] font-normal relative shrink-0 text-right w-[60.049px]" data-node-id="37:10471" style={{ fontVariationSettings: '"wdth" 100' }}>
                {fmt(fee)}
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[11.676px] relative shrink-0 w-full" data-node-id="37:10495" data-name="Transaction consent flow">
          <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[6.697px] pt-[10.008px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="37:10496" data-name="Transaction consent">
            <div className="content-stretch flex flex-col items-start pl-[15.012px] pr-[69.281px] relative shrink-0 w-full" data-node-id="37:10497">
              <div className="[word-break:break-word] font-['Roboto'] font-normal leading-[0] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10498" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.25] mb-0">By proceeding, I express my consent to complete this</p>
                <p className="leading-[1.25]">transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="37:10499" data-name="Booking space" />
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start pb-[37.381px] relative shrink-0 w-full" data-node-id="37:10500" data-name="Payment footer">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10501" data-name="Footer divider flow">
          <div className="bg-[var(--border\/default,#dcdcdc)] h-[0.834px] relative shrink-0 w-full" data-node-id="37:10502" data-name="Footer divider" />
        </div>
        <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.026px] pt-[7.506px] relative shrink-0 w-full" data-node-id="37:10503" data-name="Row · Payment footer 2 flow">
          <div className="content-stretch flex gap-[124.151px] items-start relative shrink-0 w-full" data-node-id="37:10504" data-name="Row · Payment footer 2">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[5.004px] relative" data-node-id="37:10505" data-name="Column · Row · Payment footer 2 1 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[61px]" data-node-id="37:10506" data-name="Column · Row · Payment footer 2 1">
                <div className="content-stretch flex flex-col items-start pr-[36px] relative shrink-0 w-full" data-node-id="37:10507" data-name="Total flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal h-[14px] leading-[1.25] relative shrink-0 text-[10.842px] text-[color:var(--text\/secondary,#6b6b6b)] w-[25px]" data-node-id="37:10508" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Total
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[2.68px] relative shrink-0 w-full" data-node-id="37:10509" data-name="₹536.64 flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.25] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] w-full whitespace-nowrap" data-node-id="37:10510" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {fmt(fee)}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pb-[2.652px] relative shrink-0 w-[175.143px]" data-node-id="37:10511" data-name="Continue alignment">
              <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-[175.143px] cursor-pointer" data-node-id="37:10512" data-name="Continue" onClick={() => {
                  if (!seats.length) return toast("Pick seats to prebook first");
                  // Hand the secured seats and who picked each one to View Prebooking.
                  window.prebookSelection = seats;
                  window.prebookOwners = Object.fromEntries(seats.map((id) => [id, ctx.owners[id] || myInitial()]));
                  go("secured");
                }}>
                <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[13.344px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I37:10512;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Continue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Screens.PrebookSeats = PrebookSeats;
})();
