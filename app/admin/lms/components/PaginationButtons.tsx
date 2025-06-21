"use client"

import SVG_down from "@/public/assets/svg/down.svg"

const PaginationButton = ({})=>{
    return(
      <div className="flex items-center justify-between gap-2">
         <div className="flex items-center bg-white border-solid rounded-sm border border-gray-300 hover:bg-gray-100 hover:cursor-pointer">
            <SVG_down className="h-6 rotate-90" />
        </div>
        <div className="flex items-center bg-white border-solid rounded-sm border border-gray-300 hover:bg-gray-100 hover:cursor-pointer ">
            <SVG_down className="h-6 rotate-270" />
        </div>
      </div>
    )
}

export default PaginationButton


