(() => {
// Autopay sheets shown over View Prebooking:
//   Set Autopay  — Figma 61:16464 (in frame 61:15893)
//   Almost Done! — Figma 61:15487 (in frame 61:15190)
// The UPI ID in Figma is a real email; the prototype uses a placeholder in an editable field.
const imgImage8 = "assets/Autopay/84fb5.png";

function Overlay({ onClick }) {
  return <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0 cursor-pointer" data-name="Rectangle 3" onClick={onClick} />;
}

function GrabHandle({ onClick }) {
  return (
    <div className="content-stretch flex flex-col items-center pl-[2.321px] relative shrink-0 w-full cursor-pointer" data-name="Sheet grab handle flow" onClick={onClick}>
      <div className="bg-[var(--border\/default,#dcdcdc)] h-[5.004px] relative rounded-[3.336px] shrink-0 w-[31.692px]" data-name="Sheet grab handle" />
    </div>
  );
}

function AutopayArt({ id }) {
  return (
    <div className="h-[109px] relative shrink-0 w-[175px]" data-node-id={id} data-name="image 8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[179.57%] left-[-33.6%] max-w-none top-[-35.61%] w-[167.2%]" src={imgImage8} />
      </div>
    </div>
  );
}

function Title({ id, text }) {
  return (
    <div className="content-stretch flex flex-col items-center pl-[3.99px] relative shrink-0 w-full">
      <div className="content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex items-center justify-center px-[8px] relative rounded-[6.672px] shrink-0 w-full">
        <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.18] relative shrink-0 text-[20.016px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id={id} style={{ fontVariationSettings: '"wdth" 100' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function PrimaryButton({ id, label, onClick }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[42px] relative shrink-0 w-full">
      <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex h-[40.033px] items-center justify-center relative rounded-[6.672px] shrink-0 w-full cursor-pointer" data-node-id={id} onClick={onClick}>
        <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          {label}
        </p>
      </div>
    </div>
  );
}

function SetAutopay({ go, back }) {
  const [upi, setUpi] = React.useState("yuva@upi");
  const submit = () => {
    if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upi.trim())) return toast("Enter a valid UPI ID, e.g. name@bank");
    go("autopayDone");
  };
  return (
    <div className="relative size-full" data-node-id="61:15893">
      <Overlay onClick={back} />
      <div className="absolute bottom-0 left-0 w-full bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pt-[6.672px] px-[16px] rounded-tl-[16.68px] rounded-tr-[16.68px]" data-node-id="61:16464" data-name="Set Autopay sheet">
        <GrabHandle onClick={back} />
        <AutopayArt id="61:16481" />
        <Title id="61:16469" text="Set Autopay" />
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="61:16470" data-name="form">
          <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="61:16471" data-name="field">
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="61:16472" style={{ fontVariationSettings: '"wdth" 100' }}>
              UPI ID
            </p>
            <div className="bg-[var(--surface\/white,white)] border border-[#dbdbdb] border-solid content-stretch flex h-[48px] items-center overflow-clip px-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="61:16473" data-name="input">
              <input className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] w-full bg-transparent outline-none border-0 p-0" data-node-id="61:16474" style={{ fontVariationSettings: '"wdth" 100' }} aria-label="UPI ID" value={upi} onChange={(e) => setUpi(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submit()} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap cursor-pointer" data-node-id="61:16475" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Terms & Conditions")}>{`*Terms & Conditions`}</p>
        </div>
        <PrimaryButton id="61:16477" label="Set Autopay" onClick={submit} />
      </div>
    </div>
  );
}

function AutopayDone({ back }) {
  // "Got it!" turns autopay on and closes both sheets, returning to View Prebooking.
  const done = () => {
    window.autopayOn = true;
    back();
    back();
    toast("Autopay set: all seats will be booked if time runs out");
  };
  return (
    <div className="relative size-full" data-node-id="61:15190">
      <Overlay onClick={done} />
      <div className="absolute bottom-0 left-0 w-full bg-[var(--surface\/white,white)] content-stretch flex flex-col gap-[16px] items-center overflow-clip pt-[6.672px] px-[16px] rounded-tl-[16.68px] rounded-tr-[16.68px]" data-node-id="61:15487" data-name="Almost Done sheet">
        <GrabHandle onClick={done} />
        <AutopayArt id="61:16483" />
        <Title id="61:15492" text="Almost Done!" />
        <p className="[word-break:break-word] font-['Inter'] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a1a1a)] w-[min-content]" data-node-id="61:15493">
          Open your UPI app and accept the mandate request.
        </p>
        <PrimaryButton id="61:15495" label="Got it!" onClick={done} />
      </div>
    </div>
  );
}

window.Screens.SetAutopay = SetAutopay;
window.Screens.AutopayDone = AutopayDone;
})();
