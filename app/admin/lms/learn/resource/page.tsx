import SVG_stack from "@/public/assets/svg/stack.svg"
import SVG_clock from "@/public/assets/svg/clock.svg"
import SVG_playButton from "@/public/assets/svg/playButton.svg"

export default function Masterclass() {

  return (
    <div className="h-fit p-10 bg-indigo-50 pb-40 gap-5 flex flex-col">
        <div className="text-2xl font-bold ">Masterclass</div>
        {/* Container */}
        <div className="flex relative flex-col gap-10 bg-white justify-between  shadow-2xs rounded-xl  p-8 w-full border border-gray-200 ">
            <div className="flex gap-10">
                {/* Image LEFT */}
                <div className="relative w-90">
                    <img className="w-90 h-150 rounded object-cover" src={"/examples/book.png"}/>
                    <SVG_playButton className="absolute top-[50%] left-[50%] translate-[-50%] h-20 fill-white"/>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                    <div className="text-2xl font-bold ">The basics of designing</div>

                    {/* ACTUAL MARKDOWN */}
                    <div className="flex flex-col gap-10 text-md font-thin">
                        <div className="">This 3D Design Foundations course is recommended for anyone interested in 3D design and who wants to explore a whole new world of design possibilities. Design is constantly evolving, and 3D design has exploded onto the scene in a big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design.</div>
                        <ul className="list-disc ml-5">
                            <li>big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design.</li>
                            <li>big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design.</li>
                            <li>big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design.</li>

                        </ul>
                        <div>This 3D Design Foundations course is recommended for anyone interested in 3D design and who wants to explore a whole new world of design possibilities. Design is constantly evolving, and 3D design has exploded onto the scene in a big way. From the creative team at Spline, this course explores the definitions and best practices for learning 3D design.</div>
                    </div>

                    {/* BUTTON */}
                    <div className="bg-primary text-white text-sm rounded-md hover:bg-primary-hover hover:cursor-pointer w-fit pr-6 pl-6 p-3">Download</div>
                </div>
            </div>
        </div>
    </div>
  );
}