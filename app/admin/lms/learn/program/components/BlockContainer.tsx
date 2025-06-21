import type { Block_T } from "@/types/module";
import BiteContainer from "./BiteContainer"

// ICON
import SVG_lockKey from "@/public/assets/svg/lockKey.svg"


type Props = {
  blockData: Block_T;
};

export default function BlockContainer({blockData}:Props) {

  const amountBitesCompleted = blockData.bites.filter((bites) => bites.isCompleted).length;

  const completedPercent = Math.round((amountBitesCompleted / blockData.bites.length) * 1000) / 10;

  return (
      <div className={`flex flex-col gap-1 justify-between shadow-2xs bg-white rounded-xl  p-8 w-full border border-gray-200 ${blockData.isUnlocked?"":"text-gray-400"}`}>
        
        <div className="flex justify-between w-full">
          <div className="flex gap-1 items-center">
            <div className="text-3xl font-bold">Block {blockData.index+1}. {blockData.name}</div>
            
            {/* Bar if onlocked*/}
            {blockData.isUnlocked &&
              <>
                <div className="text-3xl font-bold">:</div>
                <div className="h-3 w-30 bg-gray-100 border border-gray-200 relative  mr-1 rounded-sm ">
                    <div className={`absolute h-full  bg-primary `} style={{ width: `${completedPercent}%` }}></div>
                </div>
                <div className="text-sm font-medium">{completedPercent}%</div>
              </>
            }
          </div>

          {/* Locked */}
          {!blockData.isUnlocked && <SVG_lockKey className="h-10 fill-gray-400"/>}
        </div>

        <div className="text-xs text-gray-400 ">{blockData.description}</div>

        {/* Show the bites if not locked*/}
        {blockData.isUnlocked &&
          <div className="grid grid-cols-3 gap-5 mt-8">
            {/* Display List of bites */}
            {blockData.bites.map((bite,i)=>{
              return(
                <div className="" key={`${bite.name}_block${i}`}>
                  <BiteContainer biteData={bite} />
                </div>
              )
            })}
          </div>
        }
      </div>
  );
}