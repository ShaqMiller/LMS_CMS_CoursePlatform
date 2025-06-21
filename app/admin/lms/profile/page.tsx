import SVG_stack from "@/public/assets/svg/stack.svg"
import SVG_bolt from "@/public/assets/svg/bolt.svg"
import SVG_trophy from "@/public/assets/svg/trophy.svg"


export default function Home() {
  const allStats = [
    {name:"Total XP" ,svg:SVG_stack,val:2500},
    {name:"Quests Completed" ,svg:SVG_trophy,val:34},
    {name:"Current Streak" ,svg:SVG_bolt,val:5},
    {name:"Best Streak" ,svg:SVG_bolt,val:12},
  ]

  const allSkill = [
    {name:"Research", val:80},
    {name:"Research", val:50},
    {name:"Research", val:85},
    {name:"Research", val:45},
    {name:"Research", val:80},
    {name:"Research", val:4},
  ]

  return (
    <div className=" h-fit p-10 bg-indigo-50 pb-40 gap-25">

        {/* All datat container */}
        <div className="flex flex-col gap-5 w-[65%]"> 

          {/* Top Header */}
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">My Profile</div>
            <div className="bg-primary text-sm pl-4 pr-4 p-3 text-white rounded-lg hover:bg-primary-hover hover:cursor-pointer ">Edit Profile</div>
          </div>

          <div className="flex relative flex-col gap-10 bg-white justify-between  shadow-2xs rounded-xl  p-8 w-full border border-gray-200 ">
            {/* CoverArt container */}
            {/* <div className="w-full h-40 bg-pink-100 rounded-xl"></div> */}
            <img className="w-full h-40 bg-pink-100 rounded-xl" src={"/examples/profileCover.png"}/>
            <div className="w-full relative mb-10">
                <div className="flex flex-col gap-2 items-center justify-center absolute top-[50%] left-[50%] translate-[-50%]">
                  <img className="w-30 h-30 border-solid border border-gray-200 bg-gray-50 rounded-full object-cover p-[5px]" height={40} width={40} src="/avatar.png"/>
                  <div className="font-bold text-2xl">George Smith</div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="flex flex-col w-[80%] gap-5">
              <div className="font-semibold text-xl text-left">Statistics</div>

              {/* List stats left-right */}
              <div className="flex justify-between">
                {allStats.map((statInfo,i)=>{
                  return(
                    <div key={`stat_${i}`} className="flex flex-col gap-2">
                      <div className="text-sm font-thin text-gray-500">{statInfo.name}</div>
                      <div className="flex gap-2 items-center">
                        <statInfo.svg className={`h-5 ${i<2 ?"fill-gray-500":"fill-white stroke-gray-500"} `}/>
                        <div className="text-sm font-bold">{statInfo.val}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
      
             {/* Skill Section */}
            <div className="flex flex-col w-full gap-5">
              <div className="font-semibold text-xl text-left">Skill Chart</div>

              {/* List stats left-right */}
              <div className="grid grid-cols-3 gap-5 ">
                {allSkill.map((skillInfo,i)=>{
                  return(
                    <div key={`stat_${i}`} className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <div className="text-sm font-thin ">{skillInfo.name}</div>
                        <div className="text-sm font-bold ">{skillInfo.val}</div>
                      </div>

                      {/* Bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="h-2 w-full bg-gray-200 relative  mr-1 rounded-sm ">
                            <div className={`absolute h-full  rounded-sm rounded-r-none ${skillInfo.val<40 ? "bg-red-500": skillInfo.val<75?"bg-yellow-500":"bg-green-500"}`} style={{ width: `${skillInfo.val}%` }}></div>
                        </div>
                    </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
          
        </div>
        
    </div>
  );
}