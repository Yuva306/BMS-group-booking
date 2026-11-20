(() => {
// Figma node 45:11508 "Confirm booking" (Confirm Booking, ₹536.64)
const imgCellularWiFiBattery = "assets/ConfirmBooking/0ac67.png";
const imgChevronLeft = "assets/ConfirmBooking/0becb.svg";
const imgGroup = "assets/ConfirmBooking/87eb2.svg";
const imgGroup1 = "assets/ConfirmBooking/1e0e0.svg";
const imgGroup2 = "assets/ConfirmBooking/e9be8.svg";
const imgGroup3 = "assets/ConfirmBooking/b7df2.svg";
const imgGroup4 = "assets/ConfirmBooking/ac2f9.svg";

function FeeRow({ id, label, value, first, info }) {
  return (
    <div className={`content-stretch flex items-start justify-between pl-[16.68px] pr-[15.012px] ${first ? "" : "pt-[21.696px] "}relative shrink-0 w-full cursor-pointer`} data-node-id={id} onClick={() => toast(info)}>
      <div className="content-stretch flex gap-[6.74px] items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          {label}
        </p>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[1.39px] py-[2.78px] relative shrink-0 w-[8.34px]">
          <div className="h-[2.78px] relative shrink-0 w-[5.56px]">
            <div className="absolute inset-[-19.89%_-9.95%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-right w-[60.049px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        {value}
      </p>
    </div>
  );
}

const fmt = (n) => `₹${n.toFixed(2)}`;
const seatPrice = (id) => ("ABC".includes(id[0]) ? 480 : 430); // ₹480 ROYAL ROWS A–C, ₹430 EXECUTIVE ROWS D–E
const CONVENIENCE_PER_TICKET = 28.32; // Figma: ₹56.64 for 2 tickets

function ConfirmBooking({ go, back }) {
  // Opened directly, fall back to the Figma state: D06, D07 prebooked.
  const sel = window.paySelection || { seats: ["D06", "D07"], prebooked: true };
  const n = sel.seats.length;
  const ticketTotal = sel.seats.reduce((sum, id) => sum + seatPrice(id), 0);
  const credit = sel.prebooked ? ticketTotal * 0.1 : 0;
  const convenience = CONVENIENCE_PER_TICKET * n;
  const orderTotal = ticketTotal - credit + convenience;
  const priceInfo = sel.seats.map((id) => `${id} ${fmt(seatPrice(id))}`).join(" + ") + ` = ${fmt(ticketTotal)}`;
  return (
    <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start relative size-full" data-node-id="45:11508" data-name="Confirm booking">
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col h-[55.045px] items-start relative shrink-0 w-full" data-node-id="45:11615" data-name="Status bar">
        <div className="absolute content-stretch flex h-[39.519px] items-center justify-between left-[31.69px] px-[21.556px] top-[8.34px] right-[33.38px]" data-node-id="45:11616" data-name="StatusBar/iOS">
          <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.514px] text-black whitespace-nowrap" data-node-id="I45:11616;1:38">
            6:22
          </p>
        </div>
        <div className="absolute h-[20.016px] right-[32.7px] top-[20.02px] w-[78.397px]" data-node-id="45:11617" data-name="Cellular Wi-Fi battery">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiBattery} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start pb-[12px] pt-[6.66px] relative shrink-0 w-full" data-node-id="45:11618" data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-node-id="45:11619" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-node-id="45:11620" data-name="Row · Cinema header 1">
            <div className="relative shrink-0 size-[20px] cursor-pointer" data-node-id="45:11621" data-name="chevron-left" onClick={back}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="45:11622" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="45:11623" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:11624" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:11625" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Confirm Booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col flex-[1_0_0] items-start min-h-0 overflow-y-auto overflow-x-hidden relative w-full scroll-body" data-name="Scrollable body">
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-node-id="45:11519" data-name="Booking details">
          <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] relative shrink-0 w-full" data-node-id="45:11520" data-name="Movie and show details flow">
            <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[8.34px] shrink-0 w-full" data-node-id="45:11521" data-name="Movie and show details">
              <div className="content-stretch flex flex-col items-start pb-[11.71px] pl-[16.68px] pr-[15.012px] pt-[10.008px] relative shrink-0 w-full" data-node-id="45:11522" data-name="Movie and session">
                <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.25] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:11523" data-name="Movie title and ticket count">
                  <p className="flex-[1_0_0] font-['Roboto'] font-medium min-w-px relative" data-node-id="45:11524" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Wildwood
                  </p>
                  <p className="font-['Roboto'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="45:11525" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {n}
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-start pt-[0.684px] relative shrink-0 w-full" data-node-id="45:11526" data-name="Session and mobile ticket">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.25] min-w-px relative text-[13.344px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="45:11527" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Fri, 20 Nov, 2026 | 09:00 AM
                  </p>
                  <div className="content-stretch flex gap-[5.004px] items-start pt-[1.34px] relative shrink-0 cursor-pointer" data-node-id="45:11528" data-name="Mobile ticket" onClick={() => toast("M-Ticket: show the QR code on your phone at the cinema")}>
                    <div className="content-stretch flex flex-col items-start overflow-clip pl-[1.459px] pr-[1.46px] py-[1.668px] relative shrink-0 w-[11.676px]" data-node-id="45:11529" data-name="Mobile ticket">
                      <div className="h-[10.008px] relative shrink-0 w-[8.757px]" data-node-id="45:11530" data-name="Group">
                        <div className="absolute inset-[-5.53%_-6.31%]">
                          <img alt="" className="block max-w-none size-full" src={imgGroup} />
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[13.344px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="45:11532" style={{ fontVariationSettings: '"wdth" 100' }}>
                      M-Ticket
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[45.01px] items-start pt-[0.01px] relative shrink-0 w-full" data-node-id="45:11533" data-name="Movie metadata">
                  <div className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[0] left-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] top-[0.01px] w-[326.308px]" data-node-id="45:11685" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[1.25] mb-0">English (2D)</p>
                    <p className="leading-[1.25] mb-0">{sel.seats.join(", ")}</p>
                    <p className="leading-[1.25]">INOX: R-City, Ghatkopar (INSIGNIA 8)</p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--status\/green-bg,#e6f7ec)] content-stretch flex flex-col items-start overflow-clip pb-[6.688px] pl-[16.68px] pr-[18.015px] pt-[8.34px] relative rounded-bl-[8.34px] rounded-br-[8.34px] shrink-0 w-full" data-node-id="45:11535" data-name="Cancellation policy">
                <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:11536" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Cancellation Available
                </p>
                <div className="[word-break:break-word] content-stretch flex font-['Roboto'] font-normal gap-[8.91px] items-start leading-[1.25] pt-[1.68px] relative shrink-0 text-[11.676px] w-full" data-node-id="45:11537" data-name="Cancellation explanation">
                  <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="45:11538" style={{ fontVariationSettings: '"wdth" 100' }}>
                    This venue supports booking cancellation.To know more
                  </p>
                  <p className="relative shrink-0 text-[color:var(--status\/blue,#2458d6)] whitespace-nowrap cursor-pointer" data-node-id="45:11539" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The cancellation policy")}>
                    view
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[1.68px] relative shrink-0 w-full" data-node-id="45:11540" data-name="Cancellation policy link">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--status\/blue,#2458d6)] w-full cursor-pointer" data-node-id="45:11541" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The cancellation policy")}>
                    cancellation policy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[11.676px] relative shrink-0 w-full" data-node-id="45:11542" data-name="Price breakdown flow">
            <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[6.68px] pt-[13.344px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="45:11543" data-name="Price breakdown">
              <FeeRow id="45:11544" label="Ticket(s) price" value={fmt(ticketTotal)} first info={`Ticket(s) price: ${priceInfo}`} />
              {credit > 0 && <FeeRow id="45:11551" label="Prebooking fee" value={`- ${fmt(credit)}`} info={`Prebooking fee already paid (10% of ${fmt(ticketTotal)}): ${fmt(credit)}`} />}
              <FeeRow id="45:11695" label="Convenience fees" value={fmt(convenience)} info={`Convenience fees: ${n} × ${fmt(CONVENIENCE_PER_TICKET)} = ${fmt(convenience)} (incl. GST)`} />
              <div className="[word-break:break-word] content-stretch flex font-['Roboto'] font-normal items-start justify-between leading-[1.25] pl-[16.68px] pr-[15.012px] pt-[18.36px] relative shrink-0 text-[11.676px] w-full" data-node-id="45:11558" data-name="Musician contribution">
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="45:11559" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Give to Underprivileged Musicians
                </p>
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#6b6b6b)] text-right w-[60.049px]" data-node-id="45:11560" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ₹0.00
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Roboto'] font-normal items-start justify-between leading-[1.25] pl-[16.68px] pr-[15.012px] pt-[5.016px] relative shrink-0 w-full" data-node-id="45:11561" data-name="Contribution terms and action">
                <div className="content-stretch flex gap-[6.4px] items-start relative shrink-0 text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="45:11562" data-name="Contribution terms">
                  <p className="relative shrink-0 text-[11.676px]" data-node-id="45:11563" style={{ fontVariationSettings: '"wdth" 100' }}>
                    (₹1 per ticket)
                  </p>
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 text-[10.842px] underline cursor-pointer" data-node-id="45:11564" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Contribution T&C")}>{`VIEW T&C`}</p>
                </div>
                <p className="relative shrink-0 text-[11.676px] text-[color:var(--brand\/red,#f5405c)] text-right w-[70.057px] cursor-pointer" data-node-id="45:11565" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Adding a contribution")}>
                  Add ₹1.00
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[15.02px] relative shrink-0 w-full" data-node-id="45:11566" data-name="Price divider">
                <div className="bg-[var(--border\/default,#dcdcdc)] h-[0.834px] relative shrink-0 w-full" data-node-id="45:11567" data-name="Price divider" />
              </div>
              <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.25] pl-[16.68px] pr-[15.012px] pt-[10.85px] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:11568" data-name="Order total">
                <p className="flex-[1_0_0] font-['Roboto'] font-medium min-w-px relative" data-node-id="45:11569" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Order total
                </p>
                <p className="font-['Roboto'] font-normal relative shrink-0 text-right w-[60.049px]" data-node-id="45:11570" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {fmt(orderTotal)}
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[11.676px] relative shrink-0 w-full" data-node-id="45:11571" data-name="Booking contact details flow">
            <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[15px] pt-[13.344px] px-[16.68px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="45:11572" data-name="Booking contact details">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="45:11573" data-name="Booking contact heading">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.25] min-w-px relative text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="45:11574" style={{ fontVariationSettings: '"wdth" 100' }}>
                  For Sending Booking Details
                </p>
                <div className="content-stretch flex gap-[6.672px] items-center relative shrink-0 cursor-pointer" data-node-id="45:11575" data-name="Edit booking contact" onClick={back}>
                  <div className="content-stretch flex flex-col items-start overflow-clip p-[1.251px] relative shrink-0 w-[10.008px]" data-node-id="45:11576" data-name="Edit contact">
                    <div className="relative shrink-0 size-[7.506px]" data-node-id="45:11577" data-name="Group">
                      <div className="absolute inset-[-7.37%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="45:11579" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Edit
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[10.02px] relative shrink-0 w-full" data-node-id="45:11580" data-name="Booking email and phone">
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:11581" style={{ fontVariationSettings: '"wdth" 100' }}>
                  +91-98XXXXXX10 | yuva@example.com
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[5.016px] relative shrink-0 w-full" data-node-id="45:11582" data-name="Tax region">
                <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:11583" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Maharashtra (for GST purposes)
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[13.344px] relative shrink-0 w-full" data-node-id="45:11584" data-name="Apply offers flow">
            <div className="bg-[var(--surface\/white,white)] content-stretch flex gap-[8.34px] items-center overflow-clip pb-[10.008px] pl-[13.344px] pr-[18.348px] pt-[8.34px] relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="45:11585" data-name="Apply offers" onClick={notInPrototype("Offers")}>
              <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.903px] pl-[0.904px] pr-[0.903px] pt-[0.904px] relative shrink-0 w-[21.684px]" data-node-id="45:11586" data-name="Offer badge">
                <div className="relative shrink-0 size-[19.877px]" data-node-id="45:11587" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[1.25] min-w-px relative text-[15.012px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="45:11590" style={{ fontVariationSettings: '"wdth" 100' }}>
                Apply Offers
              </p>
              <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.876px] pl-[3.892px] pr-[3.406px] pt-[1.877px] relative shrink-0 w-[11.676px]" data-node-id="45:11591" data-name="View offers">
                <div className="h-[11.259px] relative shrink-0 w-[4.379px]" data-node-id="45:11592" data-name="Group">
                  <div className="absolute inset-[-4.91%_-12.63%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.027px] pt-[11.676px] relative shrink-0 w-full" data-node-id="45:11594" data-name="Transaction consent flow">
            <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[6.697px] pt-[10.008px] relative rounded-[6.672px] shrink-0 w-full" data-node-id="45:11595" data-name="Transaction consent">
              <div className="content-stretch flex flex-col items-start pl-[15.012px] pr-[69.281px] relative shrink-0 w-full" data-node-id="45:11596">
                <div className="[word-break:break-word] font-['Roboto'] font-normal leading-[0] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:11597" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.25] mb-0">By proceeding, I express my consent to complete this</p>
                  <p className="leading-[1.25]">transaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="45:11598" data-name="Booking space" />
      </div>
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start pb-[37.381px] relative shrink-0 w-full" data-node-id="45:11599" data-name="Payment footer">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:11600" data-name="Footer divider flow">
          <div className="bg-[var(--border\/default,#dcdcdc)] h-[0.834px] relative shrink-0 w-full" data-node-id="45:11601" data-name="Footer divider" />
        </div>
        <div className="content-stretch flex flex-col items-start pl-[16.68px] pr-[16.026px] pt-[7.506px] relative shrink-0 w-full" data-node-id="45:11602" data-name="Row · Payment footer 2 flow">
          <div className="content-stretch flex gap-[124.151px] items-start relative shrink-0 w-full" data-node-id="45:11603" data-name="Row · Payment footer 2">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[5.004px] relative" data-node-id="45:11604" data-name="Column · Row · Payment footer 2 1 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[61px]" data-node-id="45:11605" data-name="Column · Row · Payment footer 2 1">
                <div className="content-stretch flex flex-col items-start pr-[36px] relative shrink-0 w-full" data-node-id="45:11606" data-name="Total flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal h-[14px] leading-[1.25] relative shrink-0 text-[10.842px] text-[color:var(--text\/secondary,#6b6b6b)] w-[25px]" data-node-id="45:11607" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Total
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[2.68px] relative shrink-0 w-full" data-node-id="45:11608" data-name="₹536.64 flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.25] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] w-full whitespace-nowrap" data-node-id="45:11609" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {fmt(orderTotal)}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pb-[2.652px] relative shrink-0 w-[175.143px]" data-node-id="45:11610" data-name="Continue alignment">
              <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-[175.143px] cursor-pointer" data-node-id="45:11611" data-name="Continue" onClick={() => go("booked")}>
                <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[13.344px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I45:11611;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
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

window.Screens.ConfirmBooking = ConfirmBooking;
})();
