"use client"

const exampleList = [
    {
        title:"The Ultimate Ethical Hacking Boot",
        description:"The point of using Lorem Ipsum is that it has The point of using Lorem Ipsum is that it has a more-or-less normal...",
        imgUrl:"/examples/course_1.png",
        percentage:85//out of 100
    }
]

const ProgramStatus = ({courseId} : {courseId:number})=>{
    const example  = exampleList[courseId];

    return(
        <div className="flex items-center justify-between shadow-2xs bg-white p-5 rounded-md ">
            <img className="w-90 rounded-md"  src={example.imgUrl}/>
            <div className="flex flex-col ml-10">
                <h3 className="text-2xl font-bold mb-5">{example.title}</h3>
                <h4 className="text-sm text-gray-500 mb-5">{example.description}</h4>

                {/* Bar */}
                <div className="flex items-center justify-between mb-5">
                    <div className="h-2 w-full bg-gray-200 relative  mr-1 rounded-sm">
                        <div className={`absolute h-full  bg-primary rounded-sm`} style={{ width: `${example.percentage}%` }}></div>
                    </div>
                    <div>{example.percentage}%</div>
                </div>
               
                {/* Button */}
                <div className="w-full hover:bg-primary-hover bg-primary rounded-md h-10 flex items-center justify-center text-white hover:cursor-pointer hover:cursor-pointer ">Resume Program</div>
            </div>
        </div>
    )
}

export default ProgramStatus


