"use client"
//SVGS
import SVG_bolt from "@/public/assets/svg/bolt.svg"
import SVG_hexagon from "@/public/assets/svg/hexagon.svg"
import SVG_more from "@/public/assets/svg/more.svg"
import Link from 'next/link'



const Header = ({title="Dashboard",subText="Create a new course, or view an existing one."})=>{
    return(
        <div  className="flex items-center justify-between shadow-2xs bg-white pr-20">
            {/* Location Text EX: Dashboard */}
            <div className="p-5 pl-10">
                <h2 className="text-lg font-bold">{title}</h2>
                <h4 className="text-xs text-gray-500">{subText}</h4>
            </div>

            {/* Items on tight */}

            <div className="flex gap-10 items-center">
                {/* BOLT */}
                <div className="flex items-center gap-2 pt-1 pb-1 pl-4 pr-4 border-solid rounded-sm border border-gray-300 hover:bg-gray-100 hover:cursor-pointer">
                    <SVG_bolt  className="h-4 fill-icon-bolt"/>
                    <div className="text-lg font-bold">1</div>
                </div>

                {/* Hex */}
                <div className="flex items-center gap-2 pt-1 pb-1 pl-4 pr-4 border-solid rounded-sm border border-gray-300 hover:bg-gray-100 hover:cursor-pointer">
                    <div className="relative">
                        <SVG_hexagon className="h-8"/>
                        {/* Level Number */}
                        <div className="size-[12px] bg-primary text-white absolute top-[50%] left-[50%] translate-[-50%]"></div> 
                        <div className="text-white text-sm  absolute top-[50%] left-[50%] translate-[-50%]">2</div> 
                    </div>
                    <div className="text-lg font-bold">650/1200</div>
                </div>

                {/* Divider */}
                <div className="text-gray-300 text-xl">|</div>

                {/* Avatar */}
                <div className="flex gap-2 items-center">
                    <img className="w-15 h-15 border-solid border border-gray-200 rounded-full object-cover p-[5px]" height={40} width={40} src="/avatar.png"/>
                    <div>
                        <div className="text-lg font-bold">George</div>
                        <div className="text-sm text-gray-400">Super Admin Account</div>
                    </div>
                    <div className="flex items-center ml-2 pt-1 pb-1 pl-1 pr-1 border-solid rounded-sm border border-gray-300 hover:bg-gray-100 hover:cursor-pointer">
                        <Link as={"/admin/lms/profile"} href={"/admin/lms/profile"}>
                            <SVG_more className="h-5"/>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header


