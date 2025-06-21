import type { Bite_T } from "@/types/module";

import SVG_download from "@/public/assets/svg/bites/download.svg"
import SVG_lesson from "@/public/assets/svg/bites/lesson.svg"
import SVG_question from "@/public/assets/svg/bites/question.svg"
import SVG_notebook from "@/public/assets/svg/bites/notebook.svg"
import SVG_video from "@/public/assets/svg/bites/video.svg"

import SVG_stack from "@/public/assets/svg/stack.svg"
import SVG_timer from "@/public/assets/svg/timer.svg"
import SVG_crosshair from "@/public/assets/svg/crosshair.svg"
import SVG_tickGreenFilled from "@/public/assets/svg/tickGreenFilled.svg"

type Props = {
  biteData: Bite_T;
};

export default function BiteContainer({biteData}:Props) {

  return (
    <div 
      className={
        `flex h-50 relative flex-col gap-2 justify-between items-center shadow-2xs rounded-xl  p-8 w-full border border-gray-200 
        ${biteData.isCompleted ? "border-green-600 bg-green-50 border-3 hover:border-green-800 hover:bg-green-100  hover:cursor-pointer":
          biteData.isUnlocked?"border-purple-600 bg-purple-50 border-3 hover:border-purple-800 hover:bg-purple-100 hover:cursor-pointer":
          "border-1 border-grey-500 fill-gray-200 text-gray-200"}`
      }
    >
      {biteData.type == "quiz" && <SVG_question className="w-15"/>}
      {biteData.type == "article" && <SVG_lesson className="w-15"/>}
      {biteData.type == "resource" && <SVG_download className="w-15"/>}
      {biteData.type == "clip" && <SVG_video className="w-15"/>}
      {biteData.type == "task" && <SVG_notebook className="w-15"/>}

      {/* Checkbox if completed */}
      {biteData.isCompleted &&
        <div className="absolute top-[18%] right-[0%] translate-[-50%]">
          <SVG_tickGreenFilled className="h-12"/>
        </div>
      }

      <h4 className="text-xl font-semibold">{biteData.name}</h4>
      <div className="flex items-center justify-around gap-5">
          {/* EXP */}
          <div className="flex gap-2 items-center">
              <SVG_stack className={`h-4 ${biteData.isCompleted ? "fill-blue-800":""}`}/>
              <div className="font-bold text-sm">{biteData.xp}</div>
              <div className={`text-sm  ${!biteData.isUnlocked ? "text-gray-200":"text-gray-500"}`}>EXP{biteData.isCompleted?" GAINED":""}</div>
          </div>

          {biteData.isCompleted ? 
            //is completed
            //Now depends on type
            biteData.type == "quiz" ? 
              //for quiz type
              <div className="flex gap-1 items-center">
                  <SVG_crosshair className={`h-4 ${biteData.isCompleted ? "fill-red-800":""}`}/>
                  <div className="font-bold text-sm">{biteData.correctAnswers} / {biteData.questionsCount}</div>
                  <div className="text-sm text-gray-500">Accuracy</div>
              </div>
              :
              //all others except quiz
              <div className="flex gap-1 items-center">
                  <SVG_timer className={`h-4 ${biteData.isCompleted ? "fill-green-800":""}`}/>
                  <div className="font-bold text-sm">{biteData.minutesToComplete}</div>
                  <div className="text-sm text-gray-500">Minutes</div>
              </div>
            :
            //not completed
            <div className="flex gap-1 items-center"> 
                <SVG_timer className={`h-4 ${biteData.isCompleted ? "fill-green-800":""}`}/>
                <div className="font-bold text-sm">{biteData.minutesToComplete}</div>
                <div className={`text-sm ${!biteData.isUnlocked ? "text-gray-200":"text-gray-500"}`}>Minutes</div>
            </div>
          }
      </div>
    </div>
  );
}