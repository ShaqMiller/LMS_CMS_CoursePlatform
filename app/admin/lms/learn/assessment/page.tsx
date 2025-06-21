import SVG_stack from "@/public/assets/svg/stack.svg"
import SVG_clock from "@/public/assets/svg/clock.svg"
import SVG_question from "@/public/assets/svg/question.svg"

export default function Masterclass() {

  return (
    <div className="h-fit p-10 bg-indigo-50 pb-40 gap-2 flex flex-col">
        <div className="text-2xl font-bold ">Assessment</div>
        {/* Container */}
        <div className="flex relative flex-col gap-10 bg-white justify-between  shadow-2xs rounded-xl  w-full border border-gray-200 ">
            
            <div className="flex gap-10">
                {/* Image LEFT */}
                <div className="flex flex-col p-6 gap-4 w-100 border-r border-r-gray-200">
                    <img className="w-100  rounded " src={"/assets/img/assessmentCover.png"}/>
                    <div className="text-xl font-semibold ">Measure & benchmark your skills</div>
                    <div className="font-thin text-sm text-gray-500">Discover your skill level and receive customized learning recommendations.</div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col p-6  gap-4 flex-1">
                    <div className="text-2xl font-bold ">Uxcel Pulse</div>
                    <div className="text-md">Assess your overall UX design skills and get personalized learning recommendations.</div>

                    {/* XP AND TIME */}
                    <div className="flex gap-8 mt-1">
                        {/* Time */}
                        <div className="flex gap-2">
                            <SVG_clock className="h-5 fill-gray-400"/>
                            <div className="text-sm">25 mins</div>
                        </div>

                        {/* Questions */}
                        <div className="flex gap-2">
                            <SVG_question className="h-5 fill-white stroke-gray-400"/>
                            <div className="text-sm">25 questions</div>
                        </div>

                         {/* XP */}
                        <div className="flex gap-2">
                            <SVG_stack className="h-5 fill-gray-400"/>
                            <div className="text-sm">750 XP</div>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="bg-primary text-white text-sm rounded-md hover:bg-primary-hover hover:cursor-pointer w-fit pr-4 pl-4 p-2">Register Interest</div>

                    {/* ACTUAL MARKDOWN */}
                    <div className="flex flex-col gap-4 text-md font-thin border-t-2 border-t-gray-100 pt-5">
                        <div className="text-xl font-bold ">About the Uxcel Pulse assessment</div>
                        <div className="">This 3D Design Foundations course is recommended for anyone interested in 3D design and who wants to explore a whole new world of design possibilities. Design is constantly evolving, and 3D design has exploded onto the scene in a big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design, providing you with the foundational knowledge necessary to create stunning 3D designs.</div>
                        <div className="">Whether you're a beginner or an experienced designer, this course offers valuable insight and resources to improve your understanding of 3D design. By mastering these principles and implementing them into your designs, you can create products that are user-friendly and efficient, helping you increase engagement and retention rates.</div>
                        
                        <div>
                            <div className="text-xl font-bold ">Instructions</div>
                            <ul className="list-disc ml-5 flex flex-col gap-1">
                                <li>The assessment has a time limit.</li>
                                <li>Do not use search engines or seek assistance from others.</li>
                                <li>Once you've submitted an answer, you can't go back.</li>
                                <li>If you're unsure of an answer, it's better to respond with "I don't know” rather than guessing randomly.</li>
                                <li>You may exit the test, but the timer will continue running.</li>
                                <li>You have 2 attempts per assessment every 30 days.</li>
                            </ul>
                        </div>
                        
                        <div>This 3D Design Foundations course is recommended for anyone interested in 3D design and who wants to explore a whole new world of design possibilities. Design is constantly evolving, and 3D design has exploded onto the scene in a big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design.</div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  );
}