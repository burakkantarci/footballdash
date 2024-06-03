import Image from "next/image";


function Kit({ colour, showRating }: {colour: string, showRating: boolean }) {
  return (
    <div className="w-10 h-10 rounded-full text-center mx-auto flex justify-center items-center relative">
      <span className="absolute font-mono font-bold">99</span>
      <svg width="37" height="31" viewBox="0 0 37 31" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.59597 30.3673C9.18433 30.3673 8.8609 30.0583 8.8609 29.6651V12.0808L6.80269 13.7381C6.77329 13.7662 6.74389 13.7662 6.74389 13.7943C6.44986 13.9628 6.12642 14.0752 5.80299 14.0752C5.21493 14.0752 4.68568 13.7943 4.36225 13.3448L1.21613 8.82237C0.686876 8.06394 0.9221 7.0527 1.71598 6.54708L10.4487 0.732478C10.5075 0.704388 10.5663 0.648208 10.6545 0.648208C10.6839 0.648208 11.4778 0.395399 12.5951 0.36731H13.5066C13.7124 0.36731 13.9182 0.451579 14.0358 0.592029C14.1828 0.732478 14.2416 0.929107 14.2122 1.12574C14.2122 1.15383 14.2122 1.21001 14.1828 1.2381C14.2416 3.34484 16.5645 5.31113 19.0343 5.31113C21.5042 5.31113 23.827 3.34484 23.8858 1.2381C23.8858 1.21001 23.8858 1.15383 23.8564 1.12574C23.827 0.929107 23.9152 0.732478 24.0328 0.592029C24.1504 0.451579 24.3563 0.36731 24.5621 0.36731H26.3557C27.0613 0.36731 27.62 0.676298 27.6788 0.704388C27.7082 0.704388 27.7082 0.732478 27.7376 0.732478L36.1762 6.54708C36.9407 7.02461 37.1759 8.06394 36.6467 8.82237L33.5006 13.092C33.2065 13.5415 32.6479 13.8224 32.0598 13.8224C31.707 13.8224 31.3836 13.7381 31.1189 13.5415C31.0895 13.5415 31.0895 13.5134 31.0601 13.4853L29.1783 11.9965L29.1195 29.6651C29.1195 30.0583 28.7961 30.3673 28.3845 30.3673H9.59597Z" 
        fill={colour} />
      </svg>
      {showRating && <span className="absolute w-6 rounded-md bg-green-600 top-0 -right-4 text-[12px] font-semibold z-20">9.2</span> }
    </div>
  );
}
function Player({ title, colour }: { title: string, colour: string }) {
  return (
    <div className="mx-auto text-sm text-center flex flex-col items-center">
      <Kit colour={colour} showRating={true}></Kit>
      <span className="w-2/3 block text-xs text-center font-semibold text-slate-100">{title}</span>
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
      <div className="m-4 flex">
        <div className="w-1/4 rounded-xl bg-zinc-900/80 text-slate-300 mr-4 float-left">
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
                <td className="py-2 font-semibold">46.3</td>
                <td className="py-2">Yellow cards</td>
                <td className="py-2 font-semibold">53.7</td>
              </tr>         
            </tbody>
          </table>
          <div className="text-sm font-semibold px-4 mt-4 mb-2 text-slate-300">Notable events</div>
          <div>
            <div className="flex px-4 py-2 gap-2 items-center">
              <div className="w-3 h-4 bg-yellow-500 rounded-sm mr-2"></div>
              <span className="text-gray-500 text-sm">76'</span>
              <span className="text-gray-700">|</span>
              <span className="font-medium">Trent Alex Arnold</span>
              <span className="text-gray-500 text-sm">Foul</span>
            </div>
            <div className="flex px-4 py-2 gap-2 items-center flex-row-reverse">
              <svg className="w-5 h-5" fill="none" strokeWidth={2} stroke="#00FF00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <span className="text-gray-500 text-sm">76'</span>
              <span className="text-gray-700">|</span>
              <span className="font-medium">Trent Alex Arnold</span>
              <span className="text-gray-500 text-sm">Out: A. Mac Allister</span>
            </div>
            <div className="rounded-full bg-slate-100/10 text-center text-sm py-1 mx-4 my-2">Halftime 1:0</div>
            <div className="flex px-4 py-2 gap-2 items-center">
              <svg className="w-5 h-5" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400.001 0C179.449 0 0 179.431 0 400.001C0 620.57 179.449 800.002 400.001 800.002C620.553 800.002 800.002 620.57 800.002 400.001C800.002 179.431 620.551 0 400.001 0ZM695.574 185.12H678.472C671.094 185.12 664.57 189.884 662.295 196.888L625.638 309.706L529.761 351.84L417.015 269.937V156.871L512.161 87.7863C518.134 83.4491 520.623 75.7679 518.348 68.7633L512.926 52.0702C587.022 76.1783 650.595 123.395 695.574 185.12ZM287.094 52.0538L281.671 68.7469C279.396 75.7694 281.884 83.4312 287.858 87.7699L382.987 156.854V269.92L270.24 351.823L174.346 309.672L137.671 196.854C135.396 189.814 128.854 185.086 121.494 185.086H104.426C149.404 123.395 212.996 76.1783 287.094 52.0538ZM34.0627 399.715L48.3917 410.134C51.3788 412.285 54.8804 413.405 58.3998 413.405C61.9014 413.405 65.4223 412.303 68.4079 410.134L162.629 341.671L258.506 383.822L302.007 517.636L244.034 586.667H125.742C118.364 586.667 111.839 591.431 109.564 598.435L104.285 614.666C60.3208 554.311 34.0449 480.249 34.0449 399.999C34.0449 399.894 34.0627 399.804 34.0627 399.715ZM286.808 747.841L300.977 737.493C306.949 733.19 309.456 725.475 307.181 718.49L271.074 607.432L329.047 538.437H470.95L528.869 607.432L492.78 718.508C490.505 725.53 493.028 733.192 499.003 737.531L513.171 747.842C477.508 759.452 439.517 765.976 400.016 765.976C360.48 765.973 322.489 759.484 286.808 747.841ZM695.698 614.72L690.418 598.435C688.125 591.413 681.583 586.685 674.223 586.685L555.947 586.703L498.027 517.69L541.494 383.859L637.405 341.726L731.61 410.135C734.597 412.321 738.099 413.424 741.62 413.424C745.139 413.424 748.66 412.322 751.629 410.135L765.958 399.736C765.958 399.825 765.976 399.915 765.976 400.02C765.955 480.249 739.645 554.311 695.698 614.72Z" 
                fill="white"/>
              </svg>
              <span className="text-gray-500 text-sm">12'</span>
              <span className="text-gray-700">|</span>
              <span className="font-medium">D. Nunez</span>
              <span className="text-gray-500 text-sm">Asist: Salah</span>
            </div>
          </div>

        </div>
        <div className="rounded-xl bg-zinc-900/80 mr-4 float-left">
          <div className="flex justify-between pt-4 px-4">
            <div className="text-sm font-semibold mb-4 text-slate-300">Liverpool</div>
          </div>
        
          <div className="lineup relative">
            <div className="absolute w-full h-full flex flex-col justify-end p-4 z-10">
              <div className="grid grid-cols-3 items-center grow">
                <Player title="Luis Diaz" colour="#FF0000"></Player>
                <Player title="Darwin Nunez" colour="#FF0000"></Player>
                <Player title="Mohammed Salah" colour="#FF0000"></Player>
              </div>
              <div className="grid grid-cols-3 items-center grow">
                <Player title="Alexis Mac Allister" colour="#FF0000"></Player>
                <Player title="Wataru Endo" colour="#FF0000"></Player>
                <Player title="Curtis Jones" colour="#FF0000"></Player>
              </div>
              <div className="grid grid-cols-4 items-center grow">
                <Player title="Conor Bradley" colour="#FF0000"></Player>
                <Player title="Ibrahima Konaté" colour="#FF0000"></Player>
                <Player title="(c) Virgil van Dijk" colour="#FF0000"></Player>
                <Player title="Andrew Robertson" colour="#FF0000"></Player>
              </div>
              <div className="grid items-end grow">
                <Player title="Alisson" colour="#FF0000"></Player>
              </div>
            </div>
            <div className="pitch px-4">
            <svg  className="opacity-10" width="350" height="539" viewBox="0 0 350 539" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178.833 57.1563C178.833 59.2727 177.117 60.9883 175 60.9883C172.883 60.9883 171.168 59.2727 171.168 57.1563C171.168 55.04 172.883 53.3243 175 53.3243C177.117 53.3243 178.833 55.04 178.833 57.1563Z" fill="white"/>
              <path d="M171.168 481.844C171.168 479.727 172.883 478.012 175 478.012C177.117 478.012 178.833 479.727 178.833 481.844C178.833 483.96 177.117 485.676 175 485.676C172.883 485.676 171.168 483.96 171.168 481.844Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H350V539H0V0ZM2.52093 12.6699V268.24H126.999C127.668 242.307 148.902 221.489 175 221.489C201.097 221.489 222.332 242.307 223.001 268.24H347.479V12.6699C344.898 12.3849 342.475 11.2307 340.622 9.37715C338.768 7.52359 337.613 5.1014 337.328 2.5206H279.278V86.8245H212.752C208.326 92.4551 202.694 97.0266 196.268 100.201C189.654 103.468 182.377 105.167 175 105.167C167.624 105.167 160.346 103.468 153.733 100.201C147.306 97.0266 141.675 92.4551 137.248 86.8245H70.722V2.5206H12.6715C12.3865 5.10141 11.2322 7.52359 9.37836 9.37715C7.52456 11.2307 5.10206 12.3849 2.52093 12.6699ZM2.52093 10.1296C4.43126 9.8582 6.21552 8.97491 7.59579 7.59481C8.97607 6.21472 9.85948 4.43069 10.1309 2.5206H2.52093V10.1296ZM339.869 2.5206C340.141 4.43069 341.024 6.21472 342.404 7.59481C343.784 8.97491 345.569 9.85821 347.479 10.1296V2.5206H339.869ZM154.849 97.941C149.364 95.2317 144.49 91.4482 140.512 86.8245H209.489C205.51 91.4482 200.636 95.2317 195.151 97.941C188.885 101.036 181.989 102.646 175 102.646C168.011 102.646 161.116 101.036 154.849 97.941ZM73.2429 2.5206V84.3039H276.757V2.5206H223.068V30.6219H126.932V2.5206H73.2429ZM129.453 2.5206H220.547V28.1013H129.453V2.5206ZM220.479 268.24C219.811 243.699 199.705 224.01 175 224.01C150.295 224.01 130.189 243.699 129.521 268.24H171.38C171.901 266.742 173.325 265.668 175 265.668C176.675 265.668 178.099 266.742 178.62 268.24H220.479ZM129.521 270.76H171.38C171.901 272.258 173.325 273.332 175 273.332C176.675 273.332 178.099 272.258 178.62 270.76H220.479C219.811 295.301 199.705 314.99 175 314.99C150.295 314.99 130.189 295.301 129.521 270.76ZM126.999 270.76C127.668 296.693 148.902 317.511 175 317.511C201.097 317.511 222.332 296.693 223.001 270.76H347.479V526.33C344.898 526.615 342.475 527.769 340.622 529.623C338.768 531.476 337.613 533.899 337.328 536.479H279.278V452.176H212.752C208.326 446.545 202.694 441.973 196.267 438.799C189.654 435.532 182.377 433.833 175 433.833C167.624 433.833 160.346 435.532 153.733 438.799C147.306 441.973 141.674 446.545 137.248 452.176H70.722V536.479H12.6715C12.3865 533.899 11.2322 531.476 9.37836 529.623C7.52456 527.769 5.10206 526.615 2.52093 526.33V270.76H126.999ZM2.52093 528.87V536.479H10.1309C9.85948 534.569 8.97607 532.785 7.59579 531.405C6.21552 530.025 4.43126 529.142 2.52093 528.87ZM339.869 536.479H347.479V528.87C345.569 529.142 343.784 530.025 342.404 531.405C341.024 532.785 340.141 534.569 339.869 536.479ZM195.151 441.059C200.636 443.768 205.51 447.552 209.489 452.176H140.512C144.49 447.552 149.364 443.768 154.849 441.059C161.115 437.964 168.011 436.354 175 436.354C181.989 436.354 188.885 437.964 195.151 441.059ZM73.2429 536.479H126.932V508.378H223.068V536.479H276.757V454.696H73.2429V536.479ZM220.547 536.479H129.453V510.899H220.547V536.479Z" fill="white"/>
            </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 pt-4">
            <span className="w-8 h-8 rounded-full bg-slate-300 block"></span>
            <div className="">
              <div className="text-sm font-semibold text-slate-100">Jurgen Klopp</div>
              <div className="text-xs font-medium text-red-500">Manager</div>
            </div>
          </div>
          <div className="text-sm font-semibold px-4 mt-6 text-slate-300">Substitutes</div>
          <table className="w-full text-left mt-2 text-xs">
            <tbody>
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right">
                  <span className="bg-green-600 px-2 py-1 rounded-md text-xs font-semibold">8.0</span> 
                </td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>                
                <td className="py-2 pr-4 float-right">
                  <span className="bg-orange-600 px-2 py-1 rounded-md text-xs font-semibold">5.0</span> 
                </td>
              </tr>
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right">
                </td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="rounded-xl bg-zinc-900/80 mr-4 float-left">
          <div className="flex justify-between pt-4 px-4">
            <div className="text-sm font-semibold mb-4 text-slate-300">Liverpool</div>
          </div>
        
          <div className="lineup relative">
            <div className="absolute w-full h-full flex flex-col justify-end p-4 z-10">
              <div className="grid grid-cols-3 items-center grow">
                <Player title="Luis Diaz" colour="#FF0000"></Player>
                <Player title="Darwin Nunez" colour="#FF0000"></Player>
                <Player title="Mohammed Salah" colour="#FF0000"></Player>
              </div>
              <div className="grid grid-cols-3 items-center grow">
                <Player title="Alexis Mac Allister" colour="#FF0000"></Player>
                <Player title="Wataru Endo" colour="#FF0000"></Player>
                <Player title="Curtis Jones" colour="#FF0000"></Player>
              </div>
              <div className="grid grid-cols-4 items-center grow">
                <Player title="Conor Bradley" colour="#FF0000"></Player>
                <Player title="Ibrahima Konaté" colour="#FF0000"></Player>
                <Player title="(c) Virgil van Dijk" colour="#FF0000"></Player>
                <Player title="Andrew Robertson" colour="#FF0000"></Player>
              </div>
              <div className="grid items-end grow">
                <Player title="Alisson" colour="#FF0000"></Player>
              </div>
            </div>
            <div className="pitch px-4">
            <svg  className="opacity-10" width="350" height="539" viewBox="0 0 350 539" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178.833 57.1563C178.833 59.2727 177.117 60.9883 175 60.9883C172.883 60.9883 171.168 59.2727 171.168 57.1563C171.168 55.04 172.883 53.3243 175 53.3243C177.117 53.3243 178.833 55.04 178.833 57.1563Z" fill="white"/>
              <path d="M171.168 481.844C171.168 479.727 172.883 478.012 175 478.012C177.117 478.012 178.833 479.727 178.833 481.844C178.833 483.96 177.117 485.676 175 485.676C172.883 485.676 171.168 483.96 171.168 481.844Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H350V539H0V0ZM2.52093 12.6699V268.24H126.999C127.668 242.307 148.902 221.489 175 221.489C201.097 221.489 222.332 242.307 223.001 268.24H347.479V12.6699C344.898 12.3849 342.475 11.2307 340.622 9.37715C338.768 7.52359 337.613 5.1014 337.328 2.5206H279.278V86.8245H212.752C208.326 92.4551 202.694 97.0266 196.268 100.201C189.654 103.468 182.377 105.167 175 105.167C167.624 105.167 160.346 103.468 153.733 100.201C147.306 97.0266 141.675 92.4551 137.248 86.8245H70.722V2.5206H12.6715C12.3865 5.10141 11.2322 7.52359 9.37836 9.37715C7.52456 11.2307 5.10206 12.3849 2.52093 12.6699ZM2.52093 10.1296C4.43126 9.8582 6.21552 8.97491 7.59579 7.59481C8.97607 6.21472 9.85948 4.43069 10.1309 2.5206H2.52093V10.1296ZM339.869 2.5206C340.141 4.43069 341.024 6.21472 342.404 7.59481C343.784 8.97491 345.569 9.85821 347.479 10.1296V2.5206H339.869ZM154.849 97.941C149.364 95.2317 144.49 91.4482 140.512 86.8245H209.489C205.51 91.4482 200.636 95.2317 195.151 97.941C188.885 101.036 181.989 102.646 175 102.646C168.011 102.646 161.116 101.036 154.849 97.941ZM73.2429 2.5206V84.3039H276.757V2.5206H223.068V30.6219H126.932V2.5206H73.2429ZM129.453 2.5206H220.547V28.1013H129.453V2.5206ZM220.479 268.24C219.811 243.699 199.705 224.01 175 224.01C150.295 224.01 130.189 243.699 129.521 268.24H171.38C171.901 266.742 173.325 265.668 175 265.668C176.675 265.668 178.099 266.742 178.62 268.24H220.479ZM129.521 270.76H171.38C171.901 272.258 173.325 273.332 175 273.332C176.675 273.332 178.099 272.258 178.62 270.76H220.479C219.811 295.301 199.705 314.99 175 314.99C150.295 314.99 130.189 295.301 129.521 270.76ZM126.999 270.76C127.668 296.693 148.902 317.511 175 317.511C201.097 317.511 222.332 296.693 223.001 270.76H347.479V526.33C344.898 526.615 342.475 527.769 340.622 529.623C338.768 531.476 337.613 533.899 337.328 536.479H279.278V452.176H212.752C208.326 446.545 202.694 441.973 196.267 438.799C189.654 435.532 182.377 433.833 175 433.833C167.624 433.833 160.346 435.532 153.733 438.799C147.306 441.973 141.674 446.545 137.248 452.176H70.722V536.479H12.6715C12.3865 533.899 11.2322 531.476 9.37836 529.623C7.52456 527.769 5.10206 526.615 2.52093 526.33V270.76H126.999ZM2.52093 528.87V536.479H10.1309C9.85948 534.569 8.97607 532.785 7.59579 531.405C6.21552 530.025 4.43126 529.142 2.52093 528.87ZM339.869 536.479H347.479V528.87C345.569 529.142 343.784 530.025 342.404 531.405C341.024 532.785 340.141 534.569 339.869 536.479ZM195.151 441.059C200.636 443.768 205.51 447.552 209.489 452.176H140.512C144.49 447.552 149.364 443.768 154.849 441.059C161.115 437.964 168.011 436.354 175 436.354C181.989 436.354 188.885 437.964 195.151 441.059ZM73.2429 536.479H126.932V508.378H223.068V536.479H276.757V454.696H73.2429V536.479ZM220.547 536.479H129.453V510.899H220.547V536.479Z" fill="white"/>
            </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 pt-4">
            <span className="w-8 h-8 rounded-full bg-slate-300 block"></span>
            <div className="">
              <div className="text-sm font-semibold text-slate-100">Jurgen Klopp</div>
              <div className="text-xs font-medium text-red-500">Manager</div>
            </div>
          </div>
          <div className="text-sm font-semibold px-4 mt-6 text-slate-300">Substitutes</div>
          <table className="w-full text-left mt-2 text-xs">
            <tbody>
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right">
                  <span className="bg-green-600 px-2 py-1 rounded-md text-xs font-semibold">8.0</span> 
                </td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>                
                <td className="py-2 pr-4 float-right">
                  <span className="bg-orange-600 px-2 py-1 rounded-md text-xs font-semibold">5.0</span> 
                </td>
              </tr>
              <tr className="bg-zinc-600/10 hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right">
                </td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              <tr className=" hover:bg-purple-800 transition ease-in-out">
                <td className="py-2 pl-4 font-semibold">GK</td>
                <td className="py-2 w-3/5 font-semibold">
                  <span className="bg-slate-700/50 px-2 py-1 mr-2 rounded-md">8</span> 
                  Dominik Szoboszlai
                </td>
                <td className="py-2 pr-4 float-right"></td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="rounded-xl bg-zinc-900/80 mr-4 float-left grow">
          asfas
        </div>

      </div>
    </>
  );
}
