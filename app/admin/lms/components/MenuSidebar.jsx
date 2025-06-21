"use client"
import React,{useState} from "react"
import styles from "../styles/MenuSidebar.module.scss"
import Link from 'next/link'

//SVGS
import SVG_message from "@/public/assets/svg/message.svg"
import SVG_clipboard from "@/public/assets/svg/clipboard.svg"
import SVG_notebook from "@/public/assets/svg/notebook.svg"
import SVG_logo from "@/public/assets/svg/logo.svg"
import SVG_userCap from "@/public/assets/svg/userCap.svg"
import SVG_house from "@/public/assets/svg/house.svg"


const MenuOptionsArr = [
    {
        title:"Dashboard",
        svg:SVG_house,
        sub:[],
        link:"/admin/lms/dashboard"
    },
    // {
    //     title:"Messages",
    //     svg:SVG_message,
    //     sub:[],
    //     link:"/admin/lms/messages"
    // },
    {
        title:"Learn",
        svg:SVG_userCap,
        sub:[
            {
                title:"Program",
                link:"/admin/lms/learn/program/1"
            },
            {
                title:"Assessment",
                link:"/admin/lms/learn/assessment",
            },
            {
                title:"Quiz",
                link:"/admin/lms/learn/quiz",
            },
            {
                title:"Event",
                link:"/admin/lms/learn/event",
            },
            {
                title:"Resource",
                link:"/admin/lms/learn/resource",
            },
            {
                title:"Clip",
                link:"/admin/lms/learn/clip",
            },
            {
                title:"Profile",
                link:"/admin/lms/profile",
            },
  
        ],
    },
    // {
    //     title:"Learn",
    //     svg:SVG_userCap,
    //     sub:[
    //         {
    //             title:"Program",
    //             link:"/admin/lms/learn/program/1"
    //         },
    //         {
    //             title:"Teams",
    //             link:"/admin/lms/teams",
    //         },
    //         {
    //             title:"Learners",
    //             link:"/admin/lms/learners",
    //         },
    //         {
    //             title:"Feedback",
    //             link:"/admin/lms/feedback",
    //         },
    //         {
    //             title:"Assignments",
    //             link:"/admin/lms/assignments",
    //         },
    //     ],
    // },
    // {
    //     title:"Experience",
    //     svg:SVG_clipboard,
    //     sub:[
    //         {
    //             title:"General",
    //             link:"/admin/lms/accountsettings",
    //         },
    //     ],
    // },
    // {
    //     title:"Career",
    //     svg:SVG_notebook,
    //     sub:[
    //         {
    //             title:"Courses",
    //             link:"/admin/lms/courses",
    //         },
    //         {
    //             title:"Projects",
    //             link:"/admin/lms/courses",
    //         },
    //         {
    //             title:"Instructors",
    //             link:"/admin/lms/courses",
    //         },
    //         {
    //             title:"Certificates",
    //             link:"/admin/lms/courses",
    //         },
    //     ],
    // },

]



const MenuSidebar = ({sectionSubHeader="",sectionName=""})=>{
    return(
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <SVG_logo />
                <div className={styles.information}>
                    <div className={styles.title}>Quotient</div>
                    <div className={styles.desc}>Learning System</div>
                </div>

            </div>

            <div className={styles.allMainOptionsContainer}>
                {MenuOptionsArr.map((optionsData,i)=>{
                    return(
                        <MainOption sectionName={sectionName} sectionSubHeader={sectionSubHeader} key={i} optionData={optionsData}/>
                    )
                })} 
            </div>
        </div>
    )
}

export default MenuSidebar

const MainOption = ({optionData,sectionName,sectionSubHeader})=>{
    const [expanded,setExpanded] = useState(false)
    if(optionData.sub.length == 0){
        return(
            <Link as={optionData.link} href={optionData.link}>
                <div className={styles.mainOptionContainer}> 
                    <div className={`${styles.header} ${sectionName == optionData.title ? styles.selected:""}`}>
                        <optionData.svg className={styles.svg} />
                        <span className={styles.text}>{optionData.title}</span>
                    </div>
                </div>
            </Link>
        )
    }else{

        return(
            <div  className={styles.mainOptionContainer}> 
                <div onClick={()=>setExpanded(!expanded)} className={`${styles.header} ${sectionName == optionData.title ? styles.selected:""}`}>
                    <optionData.svg className={styles.svg} />
                    <span className={styles.text}>{optionData.title}</span>
                </div>
                <div className={styles.allSubOptionsContainer}>
                    {expanded && optionData.sub.map((subOptionData,i)=>{
                        return <SubOption sectionSubHeader={sectionSubHeader} subOptionData={subOptionData} key={`${subOptionData.title}_${i}`} />
                    })}
                </div>
                
            </div>
        )
    }
    
}

const SubOption = ({subOptionData,sectionSubHeader})=>{
    return(
        <Link as={subOptionData.link} href={subOptionData.link}>
            <div className={`${styles.subOptionsContainer} ${sectionSubHeader == subOptionData.title?styles.selected:""}`}>
                <div className={styles.styleSection}></div>
                <div className={styles.textSection}>
                    <div className={styles.text}>{subOptionData.title}</div>
                </div>
            </div>
        </Link>
    )
}
