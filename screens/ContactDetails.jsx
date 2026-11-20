(() => {
// Figma node 45:11714 "Screen/07 Contact Details"
const imgCellularWiFiBattery = "assets/ContactDetails/0ac67.png";
const imgChevronLeft = "assets/ContactDetails/0becb.svg";

function ContactDetails({ go, back }) {
  const [email, setEmail] = React.useState("yuva@example.com");
  const [mobile, setMobile] = React.useState("");
  const onContinue = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast("Enter a valid email address");
    if (mobile.length !== 10) return toast("Enter a 10-digit mobile number");
    go("confirm");
  };
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="45:11714" data-name="Screen/07 Contact Details">
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col h-[55.045px] items-start relative shrink-0 w-full" data-node-id="45:11735" data-name="Status bar">
        <div className="absolute content-stretch flex h-[39.519px] items-center justify-between left-[31.69px] px-[21.556px] top-[8.34px] right-[33.38px]" data-node-id="45:11736" data-name="StatusBar/iOS">
          <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.514px] text-black whitespace-nowrap" data-node-id="I45:11736;1:38">
            6:22
          </p>
        </div>
        <div className="absolute h-[20.016px] right-[32.7px] top-[20.02px] w-[78.397px]" data-node-id="45:11737" data-name="Cellular Wi-Fi battery">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiBattery} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start pb-[12px] pt-[6.66px] relative shrink-0 w-full" data-node-id="45:11738" data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-node-id="45:11739" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-node-id="45:11740" data-name="Row · Cinema header 1">
            <div className="relative shrink-0 size-[20px] cursor-pointer" data-node-id="45:11741" data-name="chevron-left" onClick={back}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="45:11742" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="45:11743" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="45:11744" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:11745" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Contact Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip px-[16px] py-[12px] relative w-full" data-node-id="45:11715" data-name="content">
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="45:11716" data-name="form">
          <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="45:11717" data-name="field">
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:11718" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your email
            </p>
            <div className="bg-[var(--surface\/white,white)] border border-[#dbdbdb] border-solid content-stretch flex h-[48px] items-center overflow-clip px-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="45:11719" data-name="input">
              <input type="email" className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] w-full bg-transparent outline-none border-0 p-0 placeholder:text-[color:var(--text\/secondary,#6b6b6b)]" data-node-id="45:11720" style={{ fontVariationSettings: '"wdth" 100' }} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:11721" style={{ fontVariationSettings: '"wdth" 100' }}>
              To access the ticket(s) on other devices, Login with this E-mail
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="45:11722" data-name="field">
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="45:11723" style={{ fontVariationSettings: '"wdth" 100' }}>
              Mobile number
            </p>
            <div className="bg-[var(--surface\/white,white)] border border-[#dbdbdb] border-solid content-stretch flex h-[48px] items-center overflow-clip px-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="45:11724" data-name="input">
              <input type="tel" inputMode="numeric" maxLength={10} placeholder="eg: 91480XXXXX" className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] w-full bg-transparent outline-none border-0 p-0 placeholder:text-[color:var(--text\/secondary,#6b6b6b)]" data-node-id="45:11725" style={{ fontVariationSettings: '"wdth" 100' }} value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))} />
            </div>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="45:11726" style={{ fontVariationSettings: '"wdth" 100' }}>
              This Number will only be used for sending ticket(s)
            </p>
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap cursor-pointer" data-node-id="45:11727" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Terms & Conditions")}>{`*Terms & Conditions`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[88px] items-start pb-[42px] px-[16px] relative shrink-0 w-full" data-node-id="45:11750" data-name="Select seats flow">
        <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id="45:11751" data-name="Select seats" onClick={onContinue}>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I45:11751;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
            Continue
          </p>
        </div>
      </div>
    </div>
  );
}

window.Screens.ContactDetails = ContactDetails;
})();
