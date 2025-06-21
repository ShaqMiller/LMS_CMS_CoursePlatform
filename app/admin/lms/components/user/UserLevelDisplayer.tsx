"use client"

const exampleList = [
    {
        level:4,
        currentXP:13600,
        nextLevelXP:15600,
    },
]

import SVG_hexagon from "@/public/assets/svg/hexagon.svg"


const UserLevelDisplayer = ({userId} : {userId:number})=>{
    const example  = exampleList[userId];

    const barPercentage = (example.currentXP/example.nextLevelXP) * 100

    return(
        <div className="flex flex-col items-center justify-between shadow-2xs bg-white rounded-xl  p-8 w-full border border-gray-200">
            {/* Header */}
            <div className="flex items-center w-full gap-5 mb-5">
                <SVG_hexagon className="h-15" />
                <div className="flex flex-col justify-center">
                    <div className="text-lg font-semibold">Level {example.level}</div>
                    <div className="text-xs text-gray-400">{example.nextLevelXP - example.currentXP} Points to next level</div>
                </div>
            </div>

            {/* Bar */}
            <div className="h-4 w-full bg-white border border-gray-200 relative  mr-1 rounded-sm mb-1">
                <div className={`absolute h-full  bg-primary rounded-sm`} style={{ width: `${barPercentage}%` }}></div>
            </div>

            <div className="flex justify-between w-full">
                <div className="text-sm">Level {example.level}</div>
                <div className="text-sm ">Level {example.level+1}</div>
            </div>
            
        </div>
    )
}

export default UserLevelDisplayer


