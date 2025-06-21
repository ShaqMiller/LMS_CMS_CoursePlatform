import type { Module_T } from "@/types/module";
import BlockContainer from "./BlockContainer"
type Props = {
  moduleData: Module_T;
};

// ICON
import SVG_exam from "@/public/assets/svg/exam.svg"


export default function ModuleDisplayer({moduleData}:Props) {

  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl font-bold">{moduleData.name}</div>
      <div className="text-sm text-gray-400">{moduleData.description}</div>

      {/* Display List of blocks */}
      {moduleData.blocks.map((block,i)=>{
        return(
          <BlockContainer key={`${moduleData.name}_block${i}`} blockData={block} />
        )
      })}

      {/* module test */}
      <div className={`flex gap-1 items-center justify-center shadow-2xs bg-white rounded-xl  p-8 w-full border border-gray-200 text-gray-400`}>
        <SVG_exam className="h-10 fill-gray-300"/>
        <div className="font-bold text-gray-300 text-2xl">Module Test</div>
      </div>

    </div>
  );
}