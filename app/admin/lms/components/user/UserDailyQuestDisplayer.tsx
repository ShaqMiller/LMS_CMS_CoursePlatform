"use client"
import SVG_tickGreenFilled from "@/public/assets/svg/tickGreenFilled.svg"
import SVG_stack from "@/public/assets/svg/stack.svg"

const exampleList = [
    {
        quests : [
            {objective:"Start yout first course",isComplete:true,xp:250},
            {objective:"Complete a lesson quiz",isComplete:true,xp:250},
            {objective:"Take Uxcel Pulse test",isComplete:false,xp:250},
            
        ]
    },
]


const UserDailyQuestDisplayer = ({userId} : {userId:number})=>{
    const example  = exampleList[userId];
    let {quests} = example;
    const amountCompleted = quests.filter((quest) => quest.isComplete).length;


    return(
        <div className="flex flex-col items-center justify-between shadow-2xs bg-white rounded-xl  p-8 w-full border border-gray-200">
            {/* Header */}
            <div className="flex items-center w-full gap-5 mb-5">
                {/* circle */}
                <div className="relative size-15">
                    
                    {/* Inner white circle */}
                    <div className="relative z-10 size-15 bg-white rounded-full border border-gray-200 flex items-center justify-center text-xl font-bold">
                        {amountCompleted}/{quests.length}
                    </div>
                    
                    {/* Outer circle with progress */}
                    <div
                        className="absolute top-[50%] left-[50%] translate-[-50%] inset-0 rounded-full size-17 rounded-full"
                        style={{
                        background: `conic-gradient(var(--color-primary) ${Math.round(
                            (amountCompleted / quests.length) * 360
                        )}deg, #e5e7eb 0deg)`, // blue + light gray
                        }}
                    ></div>

                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-lg font-semibold">Daily Quests</div>
                    <div className="text-xs text-gray-400">The point of using Lorem Ipsum is that it has </div>
                </div>
            </div>

            {/* Quests */}
            <div className="flex flex-col gap-2 w-full">
                {quests.map((quest,i)=>{
                    return(
                        <div key={`quest_${i}`} className={`flex flex items-center justify-between shadow-2xs  rounded-xl  p-3 w-full border border-gray-200  ${quest.isComplete?"bg-gray-100 text-gray-400":"hover:bg-gray-100 hover:cursor-pointer"}`}>
                            <div className="text-sm">{quest.objective}</div>
                            {quest.isComplete && <SVG_tickGreenFilled className="h-5"/>}
                            {!quest.isComplete && 
                                <div className="flex gap-2 items-center">
                                    <SVG_stack className="h-4"/>
                                    <div className="font-bold text-sm">{quest.xp}</div>
                                    <div className="text-sm text-gray-500">EXP</div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            

            
        </div>
    )
}

export default UserDailyQuestDisplayer


