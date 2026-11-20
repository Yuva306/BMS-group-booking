(() => {
// Figma node 37:10100 "Wildwood · Movie details"
const imgCellularWiFiAnd80PercentBattery = "assets/MovieDetails/7b195.png";
const imgChevronLeft = "assets/MovieDetails/0becb.svg";
const imgPlay = "assets/MovieDetails/7b8fd.svg";
const imgFilledRatingStar = "assets/MovieDetails/9c370.svg";
const imgViewRatingDetails = "assets/MovieDetails/ab678.svg";
const imgOpenReviews = "assets/MovieDetails/37b35.svg";

function WildwoodMovieDetails({ go, back }) {
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="37:10100" data-name="Wildwood · Movie details">
      <div className="content-stretch flex h-[62px] items-center justify-between pb-[10px] pl-[28px] pr-[34px] pt-[8px] relative shrink-0 w-full" data-node-id="37:10101" data-name="Status bar">
        <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-[88px]" data-node-id="37:10102" data-name="iOS status bar">
          <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="I37:10102;1:38">
            6:06
          </p>
        </div>
        <div className="h-[20px] relative shrink-0 w-[78px]" data-node-id="37:10103" data-name="Cellular Wi-Fi and 80 percent battery">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[4255%] left-[-360.26%] max-w-none top-[-100%] w-[503.85%]" src={imgCellularWiFiAnd80PercentBattery} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[6.66px] relative shrink-0 w-full" data-node-id="37:10203" data-name="Cinema header">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full" data-node-id="37:10204" data-name="Row · Cinema header 1 flow">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179.958px]" data-node-id="37:10205" data-name="Row · Cinema header 1">
            <div className="relative shrink-0 size-[20px] cursor-pointer" data-node-id="37:10206" data-name="chevron-left" onClick={back}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:10207" data-name="Column · Row · Cinema header 1 2 alignment">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-node-id="37:10208" data-name="Column · Row · Cinema header 1 2">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10209" data-name="Wildwood - English flow">
                  <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[16.649px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10210" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Wildwood
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-full" data-node-id="37:10114" data-name="Movie trailer">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="37:10115" data-name="Wildwood trailer">
          <div className="aspect-[361/180] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="37:10116" data-name="Wildwood movie artwork">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[472.78%] left-[-4.43%] max-w-none top-[-66.11%] w-[108.86%]" src={imgCellularWiFiAnd80PercentBattery} />
            </div>
            <div className="bg-[#5c6157] content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[66px] cursor-pointer" data-node-id="37:10117" data-name="Play trailer" onClick={notInPrototype("The trailer")}>
              <div className="h-[10px] relative shrink-0 w-[8px]" data-node-id="37:10118" data-name="Play">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlay} />
              </div>
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="37:10120" style={{ fontVariationSettings: '"wdth" 100' }}>
                Trailer
              </p>
            </div>
          </div>
          <div className="bg-black content-stretch flex h-[23px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="37:10121" data-name="Cinema release label">
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="37:10122" style={{ fontVariationSettings: '"wdth" 100' }}>
              In cinemas
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[17.4px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="37:10123" data-name="Movie information">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full cursor-pointer" data-node-id="37:10124" data-name="Movie rating" onClick={notInPrototype("Rating details")}>
          <div className="content-stretch flex items-start overflow-clip pr-[2px] relative shrink-0" data-node-id="37:10125" data-name="Rating star spacing">
            <div className="relative shrink-0 size-[24px]" data-node-id="37:10126" data-name="Filled rating star">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilledRatingStar} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Roboto'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10128" style={{ fontVariationSettings: '"wdth" 100' }}>
            9.3/10
          </p>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[12px] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10129" style={{ fontVariationSettings: '"wdth" 100' }}>
            (1.5K+ Votes)
          </p>
          <div className="h-[9px] relative shrink-0 w-[5px]" data-node-id="37:10130" data-name="View rating details">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgViewRatingDetails} />
          </div>
        </div>
        <div className="content-stretch flex items-start pt-[14px] relative shrink-0 w-full" data-node-id="37:10132" data-name="Genres certification and release">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[14.4px] min-w-px relative text-[12px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-pre-wrap" data-node-id="37:10133" style={{ fontVariationSettings: '"wdth" 100' }}>{`Adventure, Animation, Fantasy  •  UA13+  •  13 Nov, 2026`}</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-start pt-[8.6px] relative shrink-0 w-full" data-node-id="37:10134" data-name="Screen formats and language">
          <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex items-start px-[4px] py-[2px] relative shrink-0" data-node-id="37:10135" data-name="2D, 4DX tag">
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[14px] relative shrink-0 text-[11px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10136" style={{ fontVariationSettings: '"wdth" 100' }}>
              2D, 4DX
            </p>
          </div>
          <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex items-start px-[4px] py-[2px] relative shrink-0" data-node-id="37:10137" data-name="English tag">
            <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[14px] relative shrink-0 text-[11px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10138" style={{ fontVariationSettings: '"wdth" 100' }}>
              English
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="37:10139" data-name="Synopsis">
          <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1a1a1a)] w-full cursor-pointer" data-node-id="37:10140" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The full synopsis")}>
            <span className="leading-[16px]">{`When her baby brother is abducted by a murder of crows, Prue and her classmate Curtis discover Wildw `}</span>
            <span className="leading-[16px] text-[color:var(--brand\/red,#f5405c)]">...Read more</span>
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[18.6px] pl-[16px] pt-[5.6px] relative shrink-0 w-full" data-node-id="37:10141" data-name="Top offers for you">
        <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[19.2px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10142" style={{ fontVariationSettings: '"wdth" 100' }}>
          Top offers for you
        </p>
        <div className="content-stretch flex gap-[12px] h-[61.8px] items-start pt-[8.8px] relative shrink-0 w-full" data-node-id="37:10143" data-name="Offer cards">
          <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[12px] h-[53px] items-center pl-[12px] pr-[5px] py-[5px] relative rounded-[12px] shrink-0 w-[292px] cursor-pointer" data-node-id="37:10144" data-name="SBI card offer" onClick={notInPrototype("Offer details")}>
            <div className="relative shrink-0 size-[32px]" data-node-id="37:10145" data-name="SBI card logo">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[2659.38%] left-[-90.62%] max-w-none top-[-1628.13%] w-[1228.12%]" src={imgCellularWiFiAnd80PercentBattery} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[var(--surface\/white,white)] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[14px] min-w-px pb-[4px] pt-[6px] px-[10px] relative rounded-[12px] text-[12px]" data-node-id="37:10146" data-name="Offer details">
              <p className="font-['Roboto'] font-medium overflow-hidden relative shrink-0 text-[color:var(--text\/primary,#1a1a1a)] text-ellipsis w-full whitespace-nowrap" data-node-id="37:10147" style={{ fontVariationSettings: '"wdth" 100' }}>
                Get 2 free movie tickets or INR 500 of...
              </p>
              <p className="font-['Roboto'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="37:10148" style={{ fontVariationSettings: '"wdth" 100' }}>
                Tap to view details
              </p>
            </div>
          </div>
          <div className="bg-[var(--status\/yellow-bg,#fff6dd)] content-stretch flex gap-[12px] h-[53px] items-center pl-[12px] pr-[5px] py-[5px] relative rounded-[12px] shrink-0 w-[292px] cursor-pointer" data-node-id="37:10149" data-name="More bank offers" onClick={notInPrototype("Offer details")}>
            <div className="relative shrink-0 size-[32px]" data-node-id="37:10150" data-name="Second offer logo">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[2659.38%] left-[-1040.62%] max-w-none top-[-1628.13%] w-[1228.12%]" src={imgCellularWiFiAnd80PercentBattery} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[var(--surface\/white,white)] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[14px] min-w-px pb-[4px] pt-[6px] px-[10px] relative rounded-[12px] text-[12px]" data-node-id="37:10151" data-name="Offer details">
              <p className="font-['Roboto'] font-medium overflow-hidden relative shrink-0 text-[color:var(--text\/primary,#1a1a1a)] text-ellipsis w-full whitespace-nowrap" data-node-id="37:10152" style={{ fontVariationSettings: '"wdth" 100' }}>
                Y
              </p>
              <p className="font-['Roboto'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="37:10153" style={{ fontVariationSettings: '"wdth" 100' }}>
                T
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[17.2px] pl-[16px] pt-[6px] relative shrink-0 w-full" data-node-id="37:10154" data-name="Reviews">
        <div className="content-stretch flex gap-[8px] items-center pr-[16px] relative shrink-0 w-full" data-node-id="37:10155" data-name="Reviews heading">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-medium leading-[19.2px] min-w-px relative text-[16px] text-[color:var(--text\/primary,#1a1a1a)]" data-node-id="37:10156" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reviews
          </p>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer" data-node-id="37:10157" data-name="All 624 reviews" onClick={notInPrototype("Reviews")}>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="37:10158" style={{ fontVariationSettings: '"wdth" 100' }}>
              624 reviews
            </p>
            <div className="h-[10px] relative shrink-0 w-[6px]" data-node-id="37:10159" data-name="Open reviews">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOpenReviews} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start pr-[16px] pt-[10.4px] relative shrink-0 w-full" data-node-id="37:10161" data-name="Review summary">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto'] font-normal leading-[14.4px] min-w-px opacity-85 relative text-[12px] text-[color:var(--text\/secondary,#6b6b6b)]" data-node-id="37:10162" style={{ fontVariationSettings: '"wdth" 100' }}>
            Summary of 624 reviews. Tap a hashtag to read more.
          </p>
        </div>
        <div className="content-stretch flex gap-[11px] items-start pt-[9.4px] relative shrink-0 w-full" data-node-id="37:10163" data-name="Review hashtags">
          <div className="bg-[var(--surface\/white,white)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex gap-[6px] h-[31px] items-center pl-[14px] pr-[10px] relative rounded-[16px] shrink-0 w-[127px] cursor-pointer" data-node-id="37:10164" data-name="#Wellmade reviews" onClick={notInPrototype("Reviews")}>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="37:10165" style={{ fontVariationSettings: '"wdth" 100' }}>
              #Wellmade
            </p>
            <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex items-start px-[3px] py-px relative shrink-0" data-node-id="37:10166" data-name="Review count">
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[12px] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10167" style={{ fontVariationSettings: '"wdth" 100' }}>
                493
              </p>
            </div>
          </div>
          <div className="bg-[var(--surface\/white,white)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex gap-[6px] h-[31px] items-center pl-[14px] pr-[10px] relative rounded-[16px] shrink-0 w-[157px] cursor-pointer" data-node-id="37:10168" data-name="#AwesomeStory reviews" onClick={notInPrototype("Reviews")}>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="37:10169" style={{ fontVariationSettings: '"wdth" 100' }}>
              #AwesomeStory
            </p>
            <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex items-start px-[3px] py-px relative shrink-0" data-node-id="37:10170" data-name="Review count">
              <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[12px] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="37:10171" style={{ fontVariationSettings: '"wdth" 100' }}>
                351
              </p>
            </div>
          </div>
          <div className="bg-[var(--surface\/white,white)] border border-[var(--border\/default,#dcdcdc)] border-solid content-stretch flex h-[31px] items-center pl-[14px] pr-[10px] relative rounded-[16px] shrink-0 w-[150px] cursor-pointer" data-node-id="37:10172" data-name="#SuperDir reviews" onClick={notInPrototype("Reviews")}>
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-[color:var(--brand\/red,#f5405c)] whitespace-nowrap" data-node-id="37:10173" style={{ fontVariationSettings: '"wdth" 100' }}>
              #SuperDir
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip pt-[7px] px-[16px] relative w-full" data-node-id="37:10174" data-name="Audience review summary">
        <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[19.2px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1a1a1a)] w-full" data-node-id="37:10175" style={{ fontVariationSettings: '"wdth" 100' }}>
          AI summary based on audience reviews
        </p>
        <div className="content-stretch flex flex-col items-start pt-[4.8px] relative shrink-0 w-full" data-node-id="37:10176" data-name="Audience summary excerpt">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="37:10177" data-name="Summary paragraph">
            <p className="[word-break:break-word] font-['Roboto'] font-normal leading-[16px] mb-[-12px] opacity-85 relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6b6b6b)] w-full" data-node-id="37:10178" style={{ fontVariationSettings: '"wdth" 100' }}>
              Right from the start, this feels like stepping into a richly illustrated storybook that has come alive, with Laika’s handcrafted stop
            </p>
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[12px] relative shrink-0 to-white w-full" data-node-id="37:10179" data-name="Summary fade" />
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col h-[91px] items-start pb-[42px] pt-[9px] px-[16px] relative shrink-0 w-full" data-node-id="37:10180" data-name="Booking action">
        <div className="bg-[#e52d4d] content-stretch flex h-[40px] items-center justify-center relative rounded-[8px] shrink-0 w-full cursor-pointer" data-node-id="37:10181" data-name="Book tickets" onClick={() => go("seatCount")}>
          <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[20px] relative shrink-0 text-[16px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I37:10181;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
            Book tickets
          </p>
        </div>
      </div>
    </div>
  );
}

window.Screens.MovieDetails = WildwoodMovieDetails;
})();
