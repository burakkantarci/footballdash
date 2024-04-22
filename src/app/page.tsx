import Image from "next/image";

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
      <div className="grid grid-cols-12 gap-4 m-4">
        <div className="col-span-4 rounded-xl bg-zinc-900/80 text-slate-300">
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
        <div className="col-span-4 border rounded-sm border-green-800">
asd
        </div>
        <div className="col-span-4 border rounded-sm border-green-800">
asd
        </div>

        <div className="">
          Liverpool
          <ul>
            <li>Alisson Becker</li>
            <li>Joe Gomez</li>
          </ul>
        </div>
      </div>
    </>
  );
}
