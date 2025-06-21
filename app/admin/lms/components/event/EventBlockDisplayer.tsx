"use client"

const exampleList = [
    {
        title:"Webinar | Design Quality Assurance Tailored to Your Design System...",
        description:"It helps protect the integrity of your design system, ensuring accessibility, and delivering...",
        imgUrl:"/examples/event_2.png",
        date:new Date()
    },
    {
        title:"Webinar | Design Quality Assurance Tailored to Your Design System...",
        description:"It helps protect the integrity of your design system, ensuring accessibility, and delivering...",
        imgUrl:"/examples/event_1.png",
        date:new Date()
    }
]

import SVG_calendar from "@/public/assets/svg/calendar.svg"
import SVG_clock from "@/public/assets/svg/clock.svg"


const ProgramStatus = ({eventId} : {eventId:number})=>{
    const example  = exampleList[eventId];

    return(
        <div className="flex flex-col items-center justify-between shadow-2xs bg-white rounded-md w-100">
            <img className="rounded-md rounded-b-none" src={example.imgUrl}/>

            {/* Footer details */}
            <div className="flex flex-col p-3 border-b border-gray-200">
                <span className="text-[0.6rem] font-semibold text-primary">EVENT</span>
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <h4 className="text-sm text-gray-500 mb-5">{example.description}</h4>

                {/* Button */}
                <div className="w-fit p-5 hover:bg-gray-300 bg-gray-200 rounded-md h-10 flex items-center justify-center  hover:cursor-pointer hover:cursor-pointer ">Learn More</div>
            </div>

            {/* Date  and time*/}
            <div className="flex w-full items-center justify-between p-3">
                {/* Date */}
                <div className="flex gap-1 items-center content-between">
                    <SVG_calendar className="h-5 fill-red-50" />
                    <div className="text-xs">02/03/2023</div>
                </div>

                {/* Time */}
                <div className="flex gap-1 items-center content-between">
                    <SVG_clock className="h-5" />
                    <div className="text-xs">11-1 PM (GMT)</div>
                </div>
            </div>
        </div>
    )
}

export default ProgramStatus


