(() => {
// Figma node 28:6524 "Now showing"
const NS = {
  imgCellularWiFiAndBattery: "assets/NowShowing/5e30c.png",
  imgImage2: "assets/NowShowing/d704f.png",
  imgRuffAndTuffKanvaMovieArtwork: "assets/NowShowing/916a4.png",
  imgGroup: "assets/NowShowing/3bd2c.svg",
  imgGroup1: "assets/NowShowing/9d154.svg",
  imgGroup2: "assets/NowShowing/3c166.svg",
  imgLikesThumbsUp: "assets/NowShowing/c043c.svg",
  imgLikesThumbsUp1: "assets/NowShowing/744c2.svg",
  imgProfileIcon: "assets/NowShowing/72117.svg",
  imgHomeIcon: "assets/NowShowing/0dfc6.svg",
  imgMoviesIcon: "assets/NowShowing/e99f7.svg",
  imgLiveEventsIcon: "assets/NowShowing/01271.svg",
};

function NowShowingBody({ go = () => {} } = {}) {
  // Invite code: any 6-character alphanumeric code is accepted; a Join button appears once valid.
  const [code, setCode] = React.useState("");
  const validCode = /^[A-Z0-9]{6}$/.test(code);
  const { imgCellularWiFiAndBattery, imgImage2, imgRuffAndTuffKanvaMovieArtwork, imgGroup, imgGroup1, imgGroup2, imgLikesThumbsUp, imgLikesThumbsUp1, imgProfileIcon, imgHomeIcon, imgMoviesIcon, imgLiveEventsIcon } = NS;
  return (
    <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="28:6524" data-name="Now showing">
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col h-[53.277px] items-start relative shrink-0 w-full" data-node-id="28:6525" data-name="Status bar">
        <div className="absolute content-stretch flex h-[39.445px] items-center justify-between left-[31.63px] px-[21.516px] top-[8.32px] right-[33.38px]" data-node-id="28:6526" data-name="StatusBar/iOS">
          <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17.481px] text-black whitespace-nowrap" data-node-id="I28:6526;1:38">
            6:06
          </p>
        </div>
        <div className="absolute h-[19.979px] right-[33.38px] top-[19.98px] w-[78.25px]" data-node-id="28:6527" data-name="Cellular Wi-Fi and battery">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[4258.33%] left-[-359.57%] max-w-none top-[-100%] w-[502.13%]" src={imgCellularWiFiAndBattery} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col h-[64.931px] items-start relative shrink-0 w-full" data-node-id="28:6528" data-name="Now showing header">
        <p className="[word-break:break-word] absolute font-['Roboto'] font-bold leading-[1.18] left-[16.65px] text-[19.979px] text-[color:var(--text\/primary,#1a1a1a)] top-[13.32px] whitespace-nowrap" data-node-id="28:6529" style={{ fontVariationSettings: '"wdth" 100' }}>
          Now Showing
        </p>
        <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[16.65px] text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] top-[38.29px] whitespace-pre" data-node-id="28:6530" style={{ fontVariationSettings: '"wdth" 100' }}>{`Powai, Mumbai  |  45 Movies`}</p>
        <div className="absolute right-[16.73px] overflow-clip size-[23.309px] top-[19.98px] cursor-pointer" data-node-id="28:6531" data-name="Search" onClick={notInPrototype("Search")}>
          <div className="absolute inset-[14.58%_12.5%_12.5%_14.58%]" data-node-id="28:6532" data-name="Group">
            <div className="absolute inset-[-3.46%_-3.46%_-3.47%_-3.46%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-0 overflow-y-auto overflow-x-hidden scroll-body relative w-full" data-node-id="37:10295">
        <div className="content-stretch flex flex-col h-[204.783px] items-start relative shrink-0 w-full" data-node-id="37:10296" data-name="Featured movie">
          <div className="absolute h-[179.809px] left-[16.65px] rounded-[11.654px] top-[14.98px] w-[calc(100%-33.3px)] cursor-pointer" data-node-id="37:10297" data-name="Resident Evil promotional artwork" onClick={notInPrototype("Streaming this title")}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11.654px]">
              <img alt="" className="absolute h-[473.15%] left-[-4.63%] max-w-none top-[-74.07%] w-[109.26%]" src={imgCellularWiFiAndBattery} />
            </div>
          </div>
        </div>
        {/* Invite banner — Figma 53:13846 (empty) / 53:13829 (valid code, with Join). */}
        <div className="bg-[var(--surface\/white,white)] content-stretch flex flex-col items-start overflow-clip px-[16px] py-[8px] relative rounded-[8.34px] shrink-0 w-full" data-node-id={validCode ? "53:13829" : "53:13846"} data-name="Price breakdown">
          <div className="bg-[#d5f0ff] content-stretch flex gap-[20px] items-center overflow-clip p-[16px] relative rounded-[8.34px] shrink-0 w-full" data-node-id="53:13847">
            <div className="-translate-x-1/2 absolute contents left-1/2 top-[-18.99px]" data-node-id="53:13848">
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%-90.5px)] mix-blend-hard-light top-[-18.99px] w-[180px]" data-node-id="53:13849" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src="assets/NowShowing/d704f.png" />
              </div>
              <div className="-translate-x-1/2 absolute h-[161px] left-[calc(50%+90px)] mix-blend-hard-light top-[-18.99px] w-[181px]" data-node-id="53:13850" data-name="image 3">
                <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src="assets/NowShowing/d704f.png" />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="53:13851">
              <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1a1a1a)] whitespace-nowrap" data-node-id="53:13852">
                Movie plans with the gang?
              </p>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="53:13842">
                <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8.34px] shrink-0" data-node-id="53:13854">
                  <input className="[word-break:break-word] font-['Roboto'] font-normal leading-[1.18] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1a1a1a)] placeholder:text-[color:var(--text\/secondary,#6b6b6b)] whitespace-nowrap bg-transparent outline-none border-0 p-0 w-[89px]" data-node-id="53:13855" style={{ fontVariationSettings: '"wdth" 100' }} placeholder="Enter invite code" aria-label="Enter invite code" maxLength={6} autoCapitalize="characters" spellCheck={false} value={code} onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6))} onKeyDown={(e) => { if (e.key === "Enter" && validCode) { window.joinedAs = "Rishi"; fullGroupSim(); go("groupSeats"); } }} />
                </div>
                {validCode && (
                  <div className="bg-[var(--brand\/red,#f5405c)] content-stretch drop-shadow-[0px_3.336px_3.336px_rgba(0,0,0,0.1)] flex flex-[1_0_0] items-center justify-center min-w-px relative rounded-[6.672px] self-stretch cursor-pointer" data-node-id="53:13843" data-name="Join" onClick={() => { window.joinedAs = "Rishi"; fullGroupSim(); go("groupSeats"); }}>
                    <p className="[word-break:break-word] font-['Roboto'] font-medium leading-[1.2] relative shrink-0 text-[15.012px] text-[color:var(--surface\/white,white)] whitespace-nowrap" data-node-id="I53:13843;1:26" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Join
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="h-[65px] relative shrink-0 w-[120px]" data-node-id="53:13857">
              <div className="absolute h-[86px] left-[-15px] top-[-10px] w-[158px]" data-node-id="53:13858" data-name="image 4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[123.62%] left-[-0.11%] max-w-none top-[-0.65%] w-[100.21%]" src="assets/NowShowing/b5289.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[53.277px] items-start relative shrink-0 w-full" data-node-id="37:10306" data-name="Movie filters">
          <div className="absolute bg-[var(--surface\/white,white)] border-[0.832px] border-[var(--border\/default,#dcdcdc)] border-solid h-[29.968px] left-[64.93px] rounded-[16.649px] top-[8.32px] w-[98.229px] cursor-pointer" data-node-id="37:10307" data-name="New Releases" onClick={notInPrototype("The New Releases filter")}/>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[76.59px] text-[11.654px] text-[color:var(--brand\/red,#f5405c)] top-[16.65px] whitespace-nowrap cursor-pointer" data-node-id="37:10308" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The New Releases filter")}>
            New Releases
          </p>
          <div className="absolute bg-[var(--surface\/white,white)] border-[0.832px] border-[var(--border\/default,#dcdcdc)] border-solid h-[29.968px] left-[171.48px] rounded-[16.649px] top-[8.32px] w-[86.575px] cursor-pointer" data-node-id="37:10309" data-name="Rereleases" onClick={notInPrototype("The Re-releases filter")}/>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[183.14px] text-[11.654px] text-[color:var(--brand\/red,#f5405c)] top-[16.65px] whitespace-nowrap cursor-pointer" data-node-id="37:10310" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The Re-releases filter")}>
            Re-releases
          </p>
          <div className="absolute bg-[var(--surface\/white,white)] border-[0.832px] border-[var(--border\/default,#dcdcdc)] border-solid h-[29.968px] left-[266.38px] rounded-[16.649px] top-[8.32px] w-[51.612px] cursor-pointer" data-node-id="37:10311" data-name="Hindi" onClick={notInPrototype("The Hindi filter")}/>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[278.04px] text-[11.654px] text-[color:var(--brand\/red,#f5405c)] top-[16.65px] whitespace-nowrap cursor-pointer" data-node-id="37:10312" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The Hindi filter")}>
            Hindi
          </p>
          <div className="absolute bg-[var(--surface\/white,white)] border-[0.832px] border-[var(--border\/default,#dcdcdc)] border-solid h-[29.968px] left-[326.32px] rounded-[16.649px] top-[8.32px] w-[63.266px] cursor-pointer" data-node-id="37:10313" data-name="Punjabi" onClick={notInPrototype("The Punjabi filter")}/>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[337.97px] text-[11.654px] text-[color:var(--brand\/red,#f5405c)] top-[16.65px] whitespace-nowrap cursor-pointer" data-node-id="37:10314" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("The Punjabi filter")}>
            Punjabi
          </p>
          <div className="absolute bg-[var(--surface\/white,white)] border-[0.999px] border-[var(--brand\/red,#f5405c)] border-solid left-[16.65px] rounded-[16.649px] size-[29.968px] top-[8.32px] cursor-pointer" data-node-id="37:10315" data-name="Filter control" onClick={notInPrototype("Filters")}/>
          <div className="absolute left-[23.31px] overflow-clip size-[16.649px] top-[14.98px] cursor-pointer" data-node-id="37:10316" data-name="Filter" onClick={notInPrototype("Filters")}>
            <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]" data-node-id="37:10317" data-name="Group">
              <div className="absolute inset-[-4.99%_-4.72%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--border\/default,#dcdcdc)] h-[28.303px] left-[54.94px] top-[9.99px] w-[0.832px]" data-node-id="37:10319" data-name="Filter divider" />
        </div>
        <div className="content-stretch flex flex-col h-[309.671px] items-start relative shrink-0 w-full" data-node-id="37:10320" data-name="Movie posters">
          <div className="absolute h-[258.06px] left-[16.65px] rounded-[9.989px] top-[8.32px] w-[calc(50%-24.97px)] cursor-pointer" data-node-id="37:10321" data-name="Ruff and Tuff Kanva movie artwork" onClick={() => go("movie")}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.989px]">
              <img alt="" className="absolute h-[143.79%] left-[0.45%] max-w-none top-[-8.83%] w-[99.94%]" src={imgRuffAndTuffKanvaMovieArtwork} />
            </div>
          </div>
          <div className="absolute h-[258.06px] left-[calc(50%+8.33px)] rounded-[9.989px] top-[8.32px] w-[calc(50%-24.97px)] cursor-pointer" data-node-id="37:10322" data-name="Avengers Doomsday movie artwork" onClick={notInPrototype("Avengers: Doomsday")}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.989px]">
              <img alt="" className="absolute h-[329.68%] left-[-119.42%] max-w-none top-[-180.65%] w-[229.13%]" src={imgCellularWiFiAndBattery} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-medium leading-[1.18] left-[16.65px] text-[14.984px] text-[color:var(--text\/primary,#1a1a1a)] top-[298.02px] whitespace-nowrap cursor-pointer" data-node-id="37:10323" style={{ fontVariationSettings: '"wdth" 100' }} onClick={() => go("movie")}>
            Wildwood
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-medium leading-[1.18] left-[calc(50%+8.33px)] text-[14.984px] text-[color:var(--text\/primary,#1a1a1a)] top-[298.02px] whitespace-nowrap cursor-pointer" data-node-id="37:10324" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Avengers: Doomsday")}>
            Avengers: Doomsday
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[calc(50%+31.64px)] text-[13.319px] text-[color:var(--text\/secondary,#6b6b6b)] top-[274.71px] whitespace-nowrap" data-node-id="37:10325" style={{ fontVariationSettings: '"wdth" 100' }}>
            869K+ likes
          </p>
          <div className="absolute bg-[var(--brand\/red,#f5405c)] h-[44.952px] left-[16.65px] rounded-[24.974px] shadow-[0px_3.33px_6.66px_0px_rgba(0,0,0,0.14)] top-[238.08px] w-[176.479px] cursor-pointer" data-node-id="37:10326" data-name="Browse by Cinemas" onClick={notInPrototype("Browse by Cinemas")}/>
          <div className="absolute h-[23.309px] left-[29.97px] overflow-clip top-[249.74px] w-[21.644px] cursor-pointer" data-node-id="37:10327" data-name="Location pin" onClick={notInPrototype("Browse by Cinemas")}>
            <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-node-id="37:10328" data-name="Group">
              <div className="absolute inset-[-2.89%_-4.08%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[59.94px] text-[13.319px] text-[color:var(--surface\/white,white)] top-[253.06px] whitespace-nowrap cursor-pointer" data-node-id="37:10331" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Browse by Cinemas")}>
            Browse by Cinemas
          </p>
          <div className="absolute h-[14.984px] left-[calc(50%+8.33px)] top-[274.71px] w-[16.649px]" data-node-id="37:10332" data-name="Likes thumbs up">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLikesThumbsUp} />
          </div>
          <div className="absolute h-[14.984px] left-[16.65px] top-[274.71px] w-[16.649px]" data-node-id="37:10334" data-name="Likes thumbs up">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLikesThumbsUp1} />
          </div>
          <p className="[word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.4] left-[38.29px] text-[13.319px] text-[color:var(--text\/secondary,#6b6b6b)] top-[274.71px] whitespace-nowrap" data-node-id="37:10336" style={{ fontVariationSettings: '"wdth" 100' }}>
            18.7K+ likes
          </p>
        </div>
      </div>
      <div className="bg-[var(--surface\/subtle,#f4f4f4)] content-stretch flex flex-col h-[83.245px] items-start relative shrink-0 w-full" data-node-id="28:6570" data-name="Bottom navigation">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[11.86%] text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] text-center top-[34.96px] w-[83.245px] cursor-pointer" data-node-id="28:6571" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Home")}>
          Home
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[37.28%] text-[11.654px] text-[color:var(--brand\/red,#f5405c)] text-center top-[34.96px] w-[83.245px]" data-node-id="28:6572" style={{ fontVariationSettings: '"wdth" 100' }}>
          Movies
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[62.27%] text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] text-center top-[34.96px] w-[83.245px] cursor-pointer" data-node-id="28:6573" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Live Events")}>
          Live Events
        </p>
        <div className="absolute h-[21.644px] left-[calc(87.69%-9.99px)] top-[8.32px] w-[19.979px] cursor-pointer" data-node-id="28:6574" data-name="Profile icon" onClick={notInPrototype("Profile")}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfileIcon} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto'] font-normal leading-[1.18] left-[87.69%] text-[11.654px] text-[color:var(--text\/secondary,#6b6b6b)] text-center top-[34.96px] w-[83.245px] cursor-pointer" data-node-id="28:6576" style={{ fontVariationSettings: '"wdth" 100' }} onClick={notInPrototype("Profile")}>
          Profile
        </p>
        <div className="absolute h-[19.979px] left-[calc(12.07%-10.82px)] top-[8.32px] w-[21.644px] cursor-pointer" data-node-id="28:6577" data-name="Home icon" onClick={notInPrototype("Home")}>
          <div className="absolute inset-[-12.43%_-4.82%_-11.1%_-0.38%]">
            <img alt="" className="block max-w-none size-full" src={imgHomeIcon} />
          </div>
        </div>
        <div className="absolute h-[19.979px] left-[calc(37.49%-10.82px)] top-[8.32px] w-[21.644px]" data-node-id="28:6579" data-name="Movies icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMoviesIcon} />
        </div>
        <div className="absolute h-[19.979px] left-[calc(62.49%-10.82px)] top-[8.32px] w-[21.644px] cursor-pointer" data-node-id="28:6581" data-name="Live Events icon" onClick={notInPrototype("Live Events")}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLiveEventsIcon} />
        </div>
      </div>
    </div>
  );
}

window.NowShowingBody = NowShowingBody;
window.Screens.NowShowing = function NowShowing({ go }) {
  return (
    <div className="relative size-full">
      <NowShowingBody go={go} />
    </div>
  );
};
})();
