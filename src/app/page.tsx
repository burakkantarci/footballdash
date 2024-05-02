import Image from "next/image";

function Player({ title }: { title: string }) {
  return (
    <div className="mx-auto text-sm text-center">
      <div className="w-10 h-10 rounded-full text-center mx-auto flex justify-center items-center relative">
        <span className="absolute font-mono font-bold">99</span>
        <svg  width="37" height="31" viewBox="0 0 37 31" fill="#000" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.59597 30.3673C9.18433 30.3673 8.8609 30.0583 8.8609 29.6651V12.0808L6.80269 13.7381C6.77329 13.7662 6.74389 13.7662 6.74389 13.7943C6.44986 13.9628 6.12642 14.0752 5.80299 14.0752C5.21493 14.0752 4.68568 13.7943 4.36225 13.3448L1.21613 8.82237C0.686876 8.06394 0.9221 7.0527 1.71598 6.54708L10.4487 0.732478C10.5075 0.704388 10.5663 0.648208 10.6545 0.648208C10.6839 0.648208 11.4778 0.395399 12.5951 0.36731H13.5066C13.7124 0.36731 13.9182 0.451579 14.0358 0.592029C14.1828 0.732478 14.2416 0.929107 14.2122 1.12574C14.2122 1.15383 14.2122 1.21001 14.1828 1.2381C14.2416 3.34484 16.5645 5.31113 19.0343 5.31113C21.5042 5.31113 23.827 3.34484 23.8858 1.2381C23.8858 1.21001 23.8858 1.15383 23.8564 1.12574C23.827 0.929107 23.9152 0.732478 24.0328 0.592029C24.1504 0.451579 24.3563 0.36731 24.5621 0.36731H26.3557C27.0613 0.36731 27.62 0.676298 27.6788 0.704388C27.7082 0.704388 27.7082 0.732478 27.7376 0.732478L36.1762 6.54708C36.9407 7.02461 37.1759 8.06394 36.6467 8.82237L33.5006 13.092C33.2065 13.5415 32.6479 13.8224 32.0598 13.8224C31.707 13.8224 31.3836 13.7381 31.1189 13.5415C31.0895 13.5415 31.0895 13.5134 31.0601 13.4853L29.1783 11.9965L29.1195 29.6651C29.1195 30.0583 28.7961 30.3673 28.3845 30.3673H9.59597Z" 
          fill="#FF0000"/>
        </svg>
      </div>
      {title}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="score-card w-full flex items-stretch justify-between mt-2">
        <div className="flex items-center">
          <div className="px-4">
            <h1 className="text-white font-bold font-mono">F<span className="bg-green-300 text-green-800 p-1 ml-1 rounded-lg">D</span></h1>
          </div>
          <div className="rounded-l-md bg-white text-red-600 -skew-x-12 text-center text-xl font-semibold px-4 py-2 border-l-4  border-red-600">
            <span className="unskew">LIV</span>
          </div>
          <div className=" bg-green-500 font-mono -skew-x-12 text-center text-xl font-semibold px-4 py-2">
            <span className="unskew">2-0</span>
          </div>
          <div className=" rounded-r-md bg-white text-blue-400 -skew-x-12 text-center text-xl font-semibold px-4 py-2 border-r-4  border-blue-400">
            <span className="unskew">MAN</span>
          </div>
          <div className="rounded-r-md bg-gray-900 font-mono -skew-x-12 text-center text-xl font-semibold px-4 py-2">
            <span className="unskew">24:11</span>
          </div>
        </div>
        {/* <div className="flex items-center gap-4 px-4 rounded-lg text-green-600 text-sm font-medium border border-green-900 mr-4">
          <svg className="w-4 h-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          Ask something about this match
        </div> */}
      </div>
      <div className="m-4">
        <div className="w-1/3 rounded-xl bg-zinc-900/80 text-slate-300 mr-4 float-left">
          <table className="table-fixed w-full text-center text-sm">
            <thead>
              <tr>
                <th className="py-4 text-base text-white">
                  <div className="flex gap-4 justify-center items-center">
                    Liverpool
                    <img src="/Liverpool_FC.svg" className="rounded-full w-8 h-8 float-left"></img>
                  </div>
                </th>
                <th className="py-4">          
                  <h2 className="text-md text-center font-medium text-amber-500">Match Stats</h2>
                </th>
                <th className="py-4 text-base text-white">
                  <div className="flex gap-4 justify-center items-center">
                    <img src="/Manchester_City_FC_badge.svg" className="rounded-full w-8 h-8 float-left"></img>
                    Man City
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Possession %</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>
              <tr className="hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Shots on target</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>            
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Shots</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>
              <tr className="hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Touches</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>            
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Passes</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>
              <tr className="hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Tackles</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>            
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Fouls conceded</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>
              <tr className="hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Clearances</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>            
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Corners</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>
              <tr className="hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Offsides</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>            
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 font-semibold rounded-bl-xl">46.3</td>
                <td className="py-2">Yellow cards</td>
                <td className="py-2 font-semibold rounded-br-xl">53.7</td>
              </tr>         
            </tbody>
          </table>
        </div>
        <div className="rounded-xl bg-zinc-900/80 p-4 float-left">
          <div className="text-sm font-semibold mb-4 text-slate-300">Liverpool</div>
          {/* <div className="inline-flex rounded-lg shadow-sm">
            <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Small
            </button>
            <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Small
            </button>
            <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Small
            </button>
          </div> */}
          <div className="lineup relative">
            <div className="absolute w-full h-full flex flex-col justify-end z-10">
              <div className="grid grid-cols-2 items-center grow">
                <Player title="Test"></Player>
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
              </div>
              <div className="grid grid-cols-3 items-center grow">
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
               
              </div>
              <div className="grid grid-cols-5 items-center grow">
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className="mx-auto text-center self-end">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className="mx-auto text-center self-end">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className="mx-auto text-center self-end">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
              </div>
              <div className="grid grid-cols-5 items-center  grow">
                <div className=""></div>
                <div className=""></div>
                <div className="mx-auto text-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-center mx-auto">1</div>
                  Allison
                </div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
            <svg className="opacity-30" width="278" height="428" viewBox="0 0 278 428" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M142.041 45.5135C142.041 47.1927 140.679 48.554 139 48.554C137.321 48.554 135.959 47.1927 135.959 45.5135C135.959 43.8343 137.321 42.473 139 42.473C140.679 42.473 142.041 43.8343 142.041 45.5135Z" fill="white"/>
              <path d="M135.959 382.487C135.959 380.807 137.321 379.446 139 379.446C140.679 379.446 142.041 380.807 142.041 382.487C142.041 384.166 140.679 385.527 139 385.527C137.321 385.527 135.959 384.166 135.959 382.487Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.162109 0.16217H277.838V427.838H0.162109V0.16217ZM2.16211 10.2152V213H100.918C101.448 192.423 118.295 175.905 139 175.905C159.705 175.905 176.551 192.423 177.082 213H275.838V10.2152C273.79 9.98911 271.868 9.0733 270.397 7.60257C268.927 6.13185 268.011 4.20994 267.785 2.16217H221.729V69.0541H168.951C165.439 73.5217 160.971 77.149 155.873 79.6677C150.626 82.2598 144.852 83.6081 139 83.6081C133.148 83.6081 127.374 82.2598 122.127 79.6677C117.029 77.149 112.561 73.5217 109.049 69.0541H56.27V2.16217H10.2152C9.98905 4.20994 9.07324 6.13185 7.60251 7.60257C6.13179 9.0733 4.20988 9.98911 2.16211 10.2152ZM2.16211 8.19961C3.67769 7.98427 5.09325 7.28341 6.1883 6.18836C7.28335 5.09331 7.98421 3.67775 8.19955 2.16217H2.16211V8.19961ZM269.8 2.16217C270.016 3.67775 270.717 5.09331 271.812 6.18836C272.907 7.28341 274.322 7.98427 275.838 8.19961V2.16217H269.8ZM123.013 77.8746C118.662 75.7248 114.795 72.7227 111.638 69.0541H166.362C163.205 72.7227 159.339 75.7248 154.987 77.8746C150.015 80.3306 144.545 81.6081 139 81.6081C133.455 81.6081 127.985 80.3306 123.013 77.8746ZM58.27 2.16217V67.0541H219.729V2.16217H177.135V24.4595H100.865V2.16217H58.27ZM102.865 2.16217H175.135V22.4595H102.865V2.16217ZM175.081 213C174.551 193.528 158.6 177.905 139 177.905C119.4 177.905 103.449 193.528 102.919 213H136.128C136.541 211.812 137.671 210.959 139 210.959C140.329 210.959 141.459 211.812 141.872 213H175.081ZM102.919 215H136.128C136.541 216.188 137.671 217.041 139 217.041C140.329 217.041 141.459 216.188 141.872 215H175.081C174.551 234.472 158.6 250.095 139 250.095C119.4 250.095 103.449 234.472 102.919 215ZM100.918 215C101.448 235.577 118.295 252.095 139 252.095C159.705 252.095 176.551 235.577 177.082 215H275.838V417.785C273.79 418.011 271.868 418.927 270.397 420.397C268.927 421.868 268.011 423.79 267.785 425.838H221.729V358.946H168.951C165.439 354.478 160.971 350.851 155.873 348.332C150.626 345.74 144.852 344.392 139 344.392C133.148 344.392 127.374 345.74 122.127 348.332C117.029 350.851 112.561 354.478 109.049 358.946H56.27V425.838H10.2152C9.98905 423.79 9.07324 421.868 7.60251 420.397C6.13179 418.927 4.20988 418.011 2.16211 417.785V215H100.918ZM2.16211 419.8V425.838H8.19955C7.98421 424.322 7.28335 422.907 6.1883 421.812C5.09325 420.717 3.67769 420.016 2.16211 419.8ZM269.8 425.838H275.838V419.8C274.322 420.016 272.907 420.717 271.812 421.812C270.717 422.907 270.016 424.322 269.8 425.838ZM154.987 350.125C159.339 352.275 163.205 355.277 166.362 358.946H111.638C114.795 355.277 118.661 352.275 123.013 350.125C127.985 347.669 133.455 346.392 139 346.392C144.545 346.392 150.015 347.669 154.987 350.125ZM58.27 425.838H100.865V403.541H177.135V425.838H219.729V360.946H58.27V425.838ZM175.135 425.838H102.865V405.541H175.135V425.838Z" fill="white"/>
            </svg>

          </div>


        </div>

      </div>
    </>
  );
}
