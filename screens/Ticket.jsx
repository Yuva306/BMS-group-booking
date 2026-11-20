(() => {
// "Your ticket" — two Figma frames share this layout:
//   29:116   collapsed ("Tap to view details")
//   45:11754 expanded ("Tap to hide details") with the payment receipt
// Markup below is from 45:11754; the collapsed state drops the receipt and swaps the toggle text.
const imgTheOdysseyPoster = "assets/Ticket/bc0ce.png";
const imgTicketQrImage = "assets/Ticket/4b47e.png";
const imgGroup = "assets/Ticket/1aa02.svg";
const imgGroup1 = "assets/Ticket/bc8a2.svg";
const imgGroup2 = "assets/Ticket/1dbe6.svg";
const imgCutoutEdge = "assets/Ticket/a9279.svg";
const imgCutoutEdge1 = "assets/Ticket/3064a.svg";

function ReceiptRow({ id, label, value, pt, valueW, primary }) {
  const color = primary ? "text-[color:var(--text\\/primary,#1a1a1a)]" : "text-[color:var(--text\\/secondary,#6b6b6b)]";
  return (
    <div className={`content-stretch flex flex-col items-start ${pt} px-[11.676px] relative shrink-0 w-full`} data-node-id={id}>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
          <p className={`[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] ${color} w-full`} style={{ fontVariationSettings: '"wdth" 100' }}>
            {label}
          </p>
        </div>
        {valueW ? (
          <div className={`content-stretch flex flex-col items-start relative shrink-0 ${valueW}`}>
            <p className={`[word-break:break-word] font-['Roboto'] font-normal h-[14px] leading-[1.18] relative shrink-0 text-[11.676px] ${color} text-right ${valueW}`} style={{ fontVariationSettings: '"wdth" 100' }}>
              {value}
            </p>
          </div>
        ) : (
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
            <p className={`[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] ${color} text-right w-full`} style={{ fontVariationSettings: '"wdth" 100' }}>
              {value}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function TicketBase({ expanded, go, back }) {
  const { paid } = sessionBooking();
  // Per-seat breakdown under Net Ticket(s) Price (Figma 64:16769). Opened directly, use Figma's example.
  const [showSeats, setShowSeats] = React.useState(true);
  const NAMES = { Y: "Yuva", S: "Shwas", A: "Aadi", R: "Rishi", P: "Pranjal" };
  const payer = NAMES[myInitial()];
  const seatRows = window.paySelection
    ? paid.map((id) => ({ id, by: payer, price: "ABC".includes(id[0]) ? 480 : 430 }))
    : [{ id: "D06", by: "Yuva", price: 430 }, { id: "D07", by: "Rishi", price: 430 }];
  return (
    <div className="bg-[var(--text\/primary,#1a1a1a)] content-stretch flex flex-col items-start relative size-full" data-node-id={expanded ? "45:11754" : "29:116"} data-name="Your ticket">
      <div className="bg-[var(--text\/primary,#1a1a1a)] content-stretch flex h-[58.381px] items-start pl-[31.692px] pr-[32.706px] relative shrink-0 w-full" data-node-id="45:11755" data-name="Status bar">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[10.521px] pt-[8.34px] relative" data-node-id="45:11756" data-name="StatusBar/iOS alignment">
          <div className="content-stretch flex h-[39.519px] items-center justify-between px-[21.556px] relative shrink-0 w-[79.112px]" data-node-id="45:11757" data-name="StatusBar/iOS">
            <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.514px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I45:11757;1:38">
              6:12
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[18.348px] pt-[20.016px] relative shrink-0 w-[78.397px]" data-node-id="45:11758" data-name="Column · Status bar 2 alignment">
          <div className="content-stretch flex flex-col h-[20.016px] items-start relative shrink-0 w-[78.397px]" data-node-id="45:11759" data-name="Column · Status bar 2">
            <div className="content-stretch flex flex-col h-[20.016px] items-start mb-[-20.016px] relative shrink-0 w-full" data-node-id="45:11760" data-name="Light status indicators flow">
              <div className="content-stretch flex flex-col h-[20.016px] items-start overflow-clip pb-[3.336px] pr-[0.001px] pt-[1.668px] relative shrink-0 w-full" data-node-id="45:11761" data-name="Light status indicators">
                <div className="h-[15.012px] relative shrink-0 w-[78.397px]" data-node-id="45:11762" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[20.016px] items-start pl-[56.712px] pr-[7.685px] pt-[3.336px] relative shrink-0 w-full" data-node-id="45:11770" data-name="Battery 79 percent flow">
              <p className="[word-break:break-word] font-['Inter'] font-semibold h-[13px] leading-[normal] not-italic relative shrink-0 text-[10.842px] text-black w-[14px]" data-node-id="45:11771">
                79
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start justify-between pl-[121.766px] pr-[11.022px] relative shrink-0 w-full" data-node-id="45:11772" data-name="Ticket sharing">
        <div className="content-stretch flex flex-col items-start pb-[20.016px] pt-[21.684px] relative shrink-0 w-[15.012px] cursor-pointer" data-node-id="45:11773" data-name="Share ticket alignment" onClick={shareTicket}>
          <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.626px] pt-[0.625px] px-[1.251px] relative shrink-0 size-[15.012px]" data-node-id="45:11774" data-name="Share ticket">
            <div className="h-[13.761px] relative shrink-0 w-[12.51px]" data-node-id="45:11775" data-name="Group">
              <div className="absolute inset-[-3.48%_-3.83%_-3.49%_-3.83%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[19.028px] pt-[21.684px] relative shrink-0 w-[127px] cursor-pointer" data-node-id="45:11780" data-name="SHARE YOUR TICKET alignment" onClick={shareTicket}>
          <p className="[word-break:break-word] font-['Roboto'] font-normal h-[16px] leading-[1.18] relative shrink-0 text-[13.344px] text-[color:var(--surface\/white,white)] w-[127px]" data-node-id="45:11781" style={{ fontVariationSettings: '"wdth" 100' }}>
            SHARE YOUR TICKET
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[11.676px] pl-[79.835px] pt-[13.344px] relative shrink-0 w-[111.527px]" data-node-id="45:11782" data-name="Close ticket alignment">
          <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.32px] pl-[1.32px] pr-[1.321px] pt-[1.321px] relative shrink-0 size-[31.692px] cursor-pointer" data-node-id="45:11783" data-name="Close ticket" onClick={back}>
            <div className="relative shrink-0 size-[29.051px]" data-node-id="45:11784" data-name="Group">
              <div className="absolute inset-[-1.65%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[737.267px] items-start relative shrink-0 w-full" data-node-id="45:12273" data-name="Ticket area">
        <div className="content-stretch flex flex-col items-start pl-[30.024px] pr-[29.371px] relative shrink-0 w-full" data-node-id="45:12274" data-name="Ticket content">
          <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[13.344px] shrink-0 w-full" data-node-id="45:12275" data-name="Ticket">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:12276" data-name="Row · Ticket 1 flow">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:12277" data-name="Row · Ticket 1">
                <div className="content-stretch flex flex-col items-start mb-[-150.122px] relative shrink-0 w-full" data-node-id="45:12278" data-name="Movie details flow">
                  <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pt-[13.344px] relative shrink-0 w-full" data-node-id="45:12279" data-name="Movie details">
                    <div className="content-stretch flex gap-[16.68px] items-start pl-[16.68px] pr-[6.005px] relative shrink-0 w-full" data-node-id="45:12280" data-name="Film information">
                      <div className="content-stretch flex flex-col h-[93.409px] items-start pt-[80.065px] relative rounded-[6.672px] shrink-0 w-[61.717px]" data-node-id="45:12281" data-name="The Odyssey poster">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6.672px]">
                          <img alt="" className="absolute h-[140.49%] left-[1.06%] max-w-none top-[-6.66%] w-[98.21%]" src={imgTheOdysseyPoster} />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer" data-node-id="45:12282" data-name="Watch trailer badge flow" onClick={notInPrototype("The trailer")}>
                          <div className="bg-[var(--brand\/red,#f5405c)] content-stretch flex flex-col items-start pb-[1.676px] pt-[1.668px] relative rounded-[1.668px] shrink-0 w-full" data-node-id="45:12283" data-name="Watch trailer badge">
                            <div className="content-stretch flex flex-col items-start pl-[5.004px] pr-[7.712px] relative shrink-0 w-full" data-node-id="45:12284" data-name="Watch Trailer flow">
                              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[8.34px] text-[color:var(--surface\/white,white)] w-full" data-node-id="45:12285" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Watch Trailer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[1.668px] relative" data-node-id="45:12286" data-name="Film title and session">
                        <p className="[word-break:break-word] font-['Roboto'] font-bold leading-[1.18] relative shrink-0 text-[16.68px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:12287" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Wildwood
                        </p>
                        <div className="content-stretch flex flex-col items-start pt-[6.688px] relative shrink-0 w-full" data-node-id="45:12288" data-name="Language">
                          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:12289" style={{ fontVariationSettings: '"wdth" 100' }}>
                            English, 2D
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start pt-[7.684px] relative shrink-0 w-full" data-node-id="45:12290" data-name="Screening date">
                          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:12291" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Fri, 20 Nov, 2026 | 09:00 AM
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start pt-[7.684px] relative shrink-0 w-full" data-node-id="45:12292" data-name="Cinema venue">
                          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:12293" style={{ fontVariationSettings: '"wdth" 100' }}>
                            INOX: R-City, Ghatkopar
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pt-[20.726px] relative shrink-0" data-node-id="45:12294" data-name="Ticket format">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="45:12295" data-name="M-Ticket rotated label">
                          <div className="col-1 flex h-[46px] items-center justify-center ml-0 mt-0 relative row-1 w-[14px]" data-node-id="45:12296">
                            <div className="-rotate-90 flex-none">
                              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                M-Ticket
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[13.344px] px-[16.68px] relative shrink-0 w-full" data-node-id="45:12297" data-name="Toggle ticket details">
                      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col h-[30.024px] items-start pb-[8.684px] pt-[8.34px] relative rounded-[15.012px] shrink-0 w-full cursor-pointer" data-node-id="45:12298" data-name="Hide details" onClick={expanded ? back : () => go("ticketExpanded")}>
                        <div className="content-stretch flex flex-col items-start pl-[25.021px] pr-[25.02px] relative shrink-0 w-full" data-node-id="45:12299" data-name="Tap to hide details flow">
                          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[10.842px] text-[color:var(--text\/secondary,#6b6b6b)] text-center w-full" data-node-id="45:12300" style={{ fontVariationSettings: '"wdth" 100' }}>
                            {expanded ? "Tap to hide details" : "Tap to view details"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[150.122px] items-start pt-[124.268px] relative shrink-0 w-full pointer-events-none" data-node-id="45:12301" data-name="Ticket perforation flow">
                  <div className="content-stretch flex h-[18.348px] items-start justify-between relative shrink-0 w-full" data-node-id="45:12302" data-name="Ticket perforation">
                    <div className="h-[18.348px] relative shrink-0 w-[0.01px]" data-node-id="45:12303" data-name="Cutout edge">
                      <div className="absolute inset-[0_-9.17px]">
                        <img alt="" className="block max-w-none size-full" src={imgCutoutEdge} />
                      </div>
                    </div>
                    <div className="h-[18.348px] relative shrink-0 w-[0.01px]" data-node-id="45:12305" data-name="Cutout edge">
                      <div className="absolute inset-[0_-9.17px]">
                        <img alt="" className="block max-w-none size-full" src={imgCutoutEdge1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:12307" data-name="Admission details flow">
              <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip pb-[14.356px] pt-[26.688px] relative shrink-0 w-full" data-node-id="45:12308" data-name="Admission details">
                <div className="content-stretch flex flex-col items-start pl-[25.021px] pr-[25.02px] relative shrink-0 w-full" data-node-id="45:12309" data-name="2 Ticket(s) flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-center w-full" data-node-id="45:12310" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {`${paid.length} Ticket(s)`}
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pl-[25.021px] pr-[25.02px] pt-[11.02px] relative shrink-0 w-full" data-node-id="45:12311" data-name="SCREEN 6 flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[15.012px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-full" data-node-id="45:12312" style={{ fontVariationSettings: '"wdth" 100' }}>
                    SCREEN 6
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pl-[25.021px] pr-[25.02px] pt-[3.684px] relative shrink-0 w-full" data-node-id="45:12313" data-name="QR-E11,E10 flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.25] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-center w-full" data-node-id="45:12314" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {paid.join(", ")}
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-center pl-[0.001px] pt-[23.697px] relative shrink-0 w-full" data-node-id="45:12315" data-name="Ticket QR image flow">
                  <div className="relative shrink-0 size-[120.098px]" data-node-id="45:12316" data-name="Ticket QR image">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[709.72%] left-[-113.89%] max-w-none top-[-312.5%] w-[327.78%]" src={imgTicketQrImage} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[11.676px] px-[16.68px] relative shrink-0 w-full" data-node-id="45:12317" data-name="BOOKING ID: TUAECKP flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] text-center w-full" data-node-id="45:12318" style={{ fontVariationSettings: '"wdth" 100' }}>
                    BOOKING ID: TUAECKP
                  </p>
                </div>
              </div>
            </div>
          </div>
          {expanded && (
            <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col items-start overflow-clip pb-[12.688px] relative rounded-[13.34px] shrink-0 w-full" data-node-id="45:12323" data-name="Payment receipt">
              <div className="content-stretch flex flex-col items-start px-[8.34px] relative shrink-0 w-full" data-node-id="45:12324" data-name="Receipt divider flow">
                <div className="bg-[var(--border\/default,#dcdcdc)] h-[1.001px] relative shrink-0 w-full" data-node-id="45:12325" data-name="Receipt divider" />
              </div>
              <div className="content-stretch flex flex-col items-start pl-[11.676px] pr-[11.675px] pt-[24.02px] relative shrink-0 w-full" data-node-id="45:12326" data-name="Row · Payment receipt 2 flow">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="45:12327" data-name="Row · Payment receipt 2">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="45:12328" data-name="Total Amount alignment">
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="45:12329" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Total Amount
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80.065px]" data-node-id="45:12330" data-name="₹ 283.84 alignment">
                    <p className="[word-break:break-word] font-['Roboto'] font-normal h-[14px] leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/primary,#1a1a1a)] text-right w-[80.065px]" data-node-id="45:12331" style={{ fontVariationSettings: '"wdth" 100' }}>
                      ₹ 283.84
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[17.693px] px-[11.676px] relative shrink-0 w-full" data-node-id="64:16857" data-name="Row · Payment receipt 3 flow">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="64:16858">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative cursor-pointer" data-node-id="64:16859" onClick={() => setShowSeats((v) => !v)}>
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap" data-node-id="64:16860" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Net Ticket(s) Price
                    </p>
                    <div className="flex items-center justify-center relative shrink-0 size-[12px]" data-node-id="64:16896">
                      <div className={`flex-none ${showSeats ? "rotate-90" : "-rotate-90"}`}>
                        <div className="relative size-[12px]" data-name="chevron-left">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="assets/Ticket/chevron-left-12.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="64:16861">
                    <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-right w-full" data-node-id="64:16862" style={{ fontVariationSettings: '"wdth" 100' }}>
                      ₹ 576.28
                    </p>
                  </div>
                </div>
              </div>
              {showSeats && seatRows.map((r) => (
                <div key={r.id} className="content-stretch flex flex-col items-start pl-[24px] pr-[11.676px] pt-[12px] relative shrink-0 w-full" data-node-id="64:16889" data-name="Seat price row">
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Roboto'] font-normal items-start leading-[1.18] min-w-px relative text-[color:var(--text\/secondary,#6b6b6b)]">
                      <p className="relative shrink-0 text-[11.676px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                        {`Seat ${r.id}`}
                      </p>
                      <p className="relative shrink-0 text-[9px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                        {`Paid by ${r.by}`}
                      </p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[11.676px] text-[color:var(--text\/secondary,#6b6b6b)] text-right w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                        {`₹ ${r.price}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <ReceiptRow id="45:12338" label="GST" value="₹ 103.72" pt="pt-[11.02px]" valueW="w-[88.405px]" />
              <ReceiptRow id="45:12344" label="Convenience fee" value="₹ 80.24" pt="pt-[9.352px]" />
              <ReceiptRow id="45:12350" label="Discount" value="- ₹ 500.00" pt="pt-[9.352px]" valueW="w-[88.405px]" />
              <ReceiptRow id="45:12356" label="Offer Processing Fee" value="+ ₹ 23.60" pt="pt-[9.352px]" valueW="w-[88.405px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.Screens.Ticket = (p) => <TicketBase expanded={false} {...p} />;
window.Screens.TicketExpanded = (p) => <TicketBase expanded {...p} />;
})();
