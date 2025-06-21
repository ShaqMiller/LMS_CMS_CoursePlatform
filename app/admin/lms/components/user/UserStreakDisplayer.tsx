"use client"

const exampleList = [
    {
        level:2,
        currentXP:650,
        nextLevelXP:1200,
    },
]

import SVG_bolt from "@/public/assets/svg/bolt.svg"
import SVG_heartStraight from "@/public/assets/svg/heartStraight.svg"


const UserStreakDisplayer = ({userId} : {userId:number})=>{

    const example  = exampleList[userId];

    const days = [
        {isStreak:false},{isStreak:true},
    ]

    return(
        <div className="flex flex-col items-center justify-between shadow-2xs bg-white rounded-xl  p-8 w-full border border-gray-200">
            {/* Header */}
            <div className="flex items-center w-full gap-5 mb-3">
                <SVG_bolt  className="h-15 fill-icon-bolt" />
                <div className="flex flex-col justify-center w-full">
                    <div className="text-lg font-semibold">1 Day Streak</div>
                    
                    {/* Bar */}
                    <div className="flex items-center gap-2 w-50">
                        <div className="h-2 w-full bg-gray-200 relative  mr-1 rounded-sm mb-1">
                            <div className={`absolute h-full  bg-yellow-300 rounded-sm`} style={{ width: `50%` }}></div>
                        </div>
                        <div className="text-sm">100/200</div>
                        <div className="text-sm">PX</div>
                    </div>
                </div>
            </div>

            {/* hearts and bolt */}
            <div className="flex w-full gap-3">
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={`day${i}`} className={`flex p-2 gap-2 flex-col items-center justify-center ${i==days.length-1 ? "bg-gray-50 rounded-lg":""} `}>
                            {days[i] && days[i].isStreak && <SVG_bolt className="h-10 fill-icon-bolt" />}
                            {days[i] && !days[i].isStreak && <SVG_heartStraight className="h-10 fill-icon-heart" />}
                            {!days[i] && <SVG_bolt  className="h-10 fill-gray-500" />}
                            
                            <div className={`text-lg font-bold text-gray-400 ${i==days.length-1 ? "text-gray-800":""}`} >T</div>
                        </div> 
                    ))
                }
                <div className="h-full w-0.5 bg-gray-100"></div>
                <div className={`flex p-2 gap-2 flex-col items-center justify-center `}>
                    <SVG_heartStraight className="h-8 fill-gray-500" />
                    <SVG_heartStraight className="h-8 fill-icon-heart" />
                </div> 
            </div>
            
        </div>
    )
}

export default UserStreakDisplayer


