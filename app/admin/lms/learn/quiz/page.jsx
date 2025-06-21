
"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';

import SVG_heartStraight from "@/public/assets/svg/heartStraight.svg"
import SVG_heartBroken from "@/public/assets/svg/heartBroken.svg"
import SVG_question from "@/public/assets/svg/question.svg"
import SVG_close from "@/public/assets/svg/close.svg"
import SVG_flag from "@/public/assets/svg/flag.svg"
import SVG_more from "@/public/assets/svg/more.svg"
import SVG_XCircle from "@/public/assets/svg/XCircle.svg"
import SVG_tickGreenFilled from "@/public/assets/svg/tickGreenFilled.svg"

import SVG_stack from "@/public/assets/svg/stack.svg"
import SVG_crosshair from "@/public/assets/svg/crosshair.svg"
import SVG_timer from "@/public/assets/svg/timer.svg"


export default function Masterclass() {
    const router = useRouter();

    const [isStarted,setIsStarted] = useState(false)
    const [hasUserMadeDecision,setHasUserMadeDecision] = useState(false)
    const [isUserCorrect,setIsUserCorrect] = useState(false)
    const [answerIndexClicked, setAnswerIndexClicked] = useState(-1)

    const [hasCompletedQuiz,setHasCompletedQuiz] = useState(false)
    const [livesRemaining,setLivesRemaining] = useState(3)
    const [currentQuestionNumber,setCurrentQuestionNumber] = useState(1);
    
    const [correctAnswersCount,setCorrectAnswersCount] = useState(0)

    const progressBarPercent = ( currentQuestionNumber/allQuizQuestions.length ) *100
    const currentQuestionData = allQuizQuestions[currentQuestionNumber-1] 


    const handleCheckCorrect = (indexClicked)=>{
        if(hasUserMadeDecision) return

        setAnswerIndexClicked(indexClicked)
        if(currentQuestionData.type == "betweenImages")     {
            if(indexClicked == currentQuestionData.correctAnswersIndex[0]){
                setIsUserCorrect(true)
                setCorrectAnswersCount((old)=>old+1)
            }else{
                setLivesRemaining((old)=>old-1)
                setIsUserCorrect(false)
            }
            setHasUserMadeDecision(true)
            return;
        }   

        if(currentQuestionData.type == "multipleChoice")     {
            if(indexClicked == currentQuestionData.correctAnswersIndex[0]){
                setIsUserCorrect(true)
                setCorrectAnswersCount((old)=>old+1)
            }else{
                setIsUserCorrect(false)
                setLivesRemaining((old)=>old-1)
            }
            setHasUserMadeDecision(true)
            return;
        }   
    }

    const goToNextQuestion = ()=>{
        if(currentQuestionNumber == allQuizQuestions.length){
            setHasCompletedQuiz(true)
        }

        setAnswerIndexClicked(-1)
        setHasUserMadeDecision(false)
        setIsUserCorrect(false)
        setCurrentQuestionNumber((cur)=>cur+1)
    }
    //If finished quiz
    if(hasCompletedQuiz){
        return(
            <div className="absolute top-[0%] left-[0%] h-screen w-screen bg-violet-50 flex flex-col items-center justify-center">
                <div className="relative w-fit flex flex-col gap-5 bg-white items-center justify-center p-15 pr-20 pl-20 shadow-2xs rounded-xl items-center border border-gray-200 ">
                    <img src="/assets/img/celebrate.png"/>
                    <div className="text-3xl font-bold">Quiz Completed</div>
                    <div className="text-sm ">Nice job reaching your goal!</div>
                    
                    {/* acheive */}
                    <div className="w-full flex gap-5 items-center justify-center">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-1">
                                <SVG_stack className="h-5 fill-blue-900"/>
                                <div className="text-md font-bold">250</div>
                            </div>
                            <div className="text-xs text-gray-400">EXP</div>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-1 items-center">
                                <SVG_crosshair className="h-5 fill-red-900"/>
                                <div className="text-md font-bold">{correctAnswersCount}/{allQuizQuestions.length}</div>
                            </div>
                            <div className="text-xs text-gray-400">Accuracy</div>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-1">
                                <SVG_timer className="h-5 fill-yellow-500"/>
                                <div className="text-md font-bold">1:30</div>
                            </div>
                            <div className="text-xs text-gray-400">Time</div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={`
                        absolute bottom-0 left-0 w-full
                        h-35 flex items-center justify-between pl-40 pr-40 border-3
                        bg-white border-gray-200
                    `}>
                    <div></div>
                    <div className="flex gap-5">
                        <div className="border-[#573EFF] bg-[#573EF0] hover:bg-[#573EFF] text-white border-1 pl-6 pr-6 p-3 text-md rounded-md w-fit text-center hover:cursor-pointer"  onClick={() => window.location.reload()}  >Continue</div>
                        <div className="border-gray-400 border-1 pl-6 pr-6 p-3 text-md rounded-md w-fit text-center hover:cursor-pointer"onClick={() => router.push('/admin/lms/')} >Exit</div>
                    </div>
                    
                </div>
            </div>
        )
    }

    // If failed
    if(livesRemaining == 0){
        return(
            <div className="absolute top-[0%] left-[0%] h-screen w-screen bg-violet-50 flex flex-col items-center justify-center">
                <div className="relative w-fit flex flex-col gap-5 bg-white items-center justify-center p-15 pr-20 pl-20 shadow-2xs rounded-xl items-center border border-gray-200 ">
                    <img src="/assets/img/oops.png"/>
                    <div className="text-3xl font-bold">Try Again!</div>
                    <div className="text-sm ">Let’s give it another go — you’re getting closer.</div>
                </div>

                {/* Footer */}
                <div className={`
                        absolute bottom-0 left-0 w-full
                        h-35 flex items-center justify-between pl-40 pr-40 border-3
                        bg-white border-gray-200
                    `}>
                    <div></div>
                    <div className="flex gap-5">
                        <div className="border-[#573EFF] bg-[#573EF0] hover:bg-[#573EFF] text-white border-1 pl-6 pr-6 p-3 text-md rounded-md w-fit text-center hover:cursor-pointer"  onClick={() => window.location.reload()}  >Try Again!</div>
                        <div className="border-gray-400 border-1 pl-6 pr-6 p-3 text-md rounded-md w-fit text-center hover:cursor-pointer" onClick={() => router.push('/admin/lms/')}>Exit</div>
                    </div>
                    
                </div>
            </div>
        )
    }


    return (
        <div className="absolute top-[0%] left-[0%] h-screen w-screen bg-violet-50 flex flex-col  pt-10">

            {/* IF Started */}
            {isStarted &&
                <>
                    {/* Progress Bar */}
                     <div className="flex w-full justify-between items-center pl-20 pr-20">
                        <div></div>
                        <div className="flex gap-2 w-[50%] items-center">
                            <div className="h-2 w-[50%] bg-gray-200 relative  mr-1 rounded-sm">
                                <div className={`absolute h-full  bg-primary rounded-sm`} style={{ width: `${progressBarPercent}%` }}></div>
                            </div>

                            {livesRemaining >=1 ? <SVG_heartStraight className="h-5 fill-red-500" /> : <SVG_heartBroken  className="h-4 fill-gray-400" />}
                            {livesRemaining >=2 ? <SVG_heartStraight className="h-5 fill-red-500" /> : <SVG_heartBroken  className="h-4 fill-gray-400" />}
                            {livesRemaining ==3 ? <SVG_heartStraight className="h-5 fill-red-500" /> : <SVG_heartBroken  className="h-4 fill-gray-400" />}
                            
                            <div className="font-bold text-lg">{currentQuestionNumber}/{allQuizQuestions.length}</div>
                            <SVG_flag className="h-5" />
                            <SVG_more className="h-5 rotate-90" />
                        </div>
                        <SVG_close onClick={() => router.push('/admin/lms/')} className="h-6 hover:cursor-pointer" />

                    </div>

                    {/* Display the question */}
                    <div className="bg-green w-full h-full p-20 flex flex-col gap-5">
                        {/* If BetweenImage Type */}
                        {currentQuestionData.type == "betweenImages" &&
                            <>
                                {/*title  */}
                                <div className="font-bold text-2xl text-center">{currentQuestionData.title}</div>
                                <div className="flex items-center justify-center gap-8">
                                    {currentQuestionData.answers.map((imgSrc,i)=>{
                                        return(
                                            <div onClick={()=>handleCheckCorrect(i)} className="relative flex bg-white p-5 shadow-2xs rounded-xl items-center border border-gray-200 hover:bg-gray-50 hover:cursor-pointer" key={`quizimg_${i}`}>
                                               <img src={imgSrc} className={`h-110 w-90 object-cover rounded-md `}/>
                                               {hasUserMadeDecision && i==answerIndexClicked && 
                                                    <div className="absolute top-[5%] right-[0%] translate-[-50%]">
                                                        {isUserCorrect && <SVG_tickGreenFilled className="h-7 fill-green-500"/>}
                                                        {!isUserCorrect && <SVG_XCircle className="h-7 fill-red-500" />}
                                                    </div>
                                               }
                                            </div>
                                        )
                                    })}
                                </div>    
                            </>    
                        }   

                        {/* If multiple Type */}
                        {currentQuestionData.type == "multipleChoice" &&
                            <>
                                {/*title  */}
                                <div className="font-bold text-2xl text-center">{currentQuestionData.title}</div>
                                {currentQuestionData.helperText && <div className="font-thin text-md text-center pr-60 pl-60 text-center">{currentQuestionData.helperText}</div>}
                                <div className="flex gap-5 items-center justify-center">
                                    {/* Helper img */}
                                   {currentQuestionData.helperImage && <img src={currentQuestionData.helperImage} className="w-120 object-cover"/>}
                                    {/* answers */}
                                   <div className="flex flex-col items-center justify-center gap-8">
                                        {currentQuestionData.answers.map((answerText,i)=>{
                                            return(
                                                <div onClick={()=>handleCheckCorrect(i)} className="relative w-200 flex bg-white p-5 shadow-2xs rounded-xl items-center border border-gray-200 hover:bg-gray-50 hover:cursor-pointer" key={`quizimg_${i}`}>
                                                <div>{answerText}</div>
                                                {hasUserMadeDecision && i==answerIndexClicked && 
                                                        <div className="absolute top-[50%] right-[-2%] translate-[-50%]">
                                                            {isUserCorrect && <SVG_tickGreenFilled className="h-7 fill-green-500"/>}
                                                            {!isUserCorrect && <SVG_XCircle className="h-7 fill-red-500" />}
                                                        </div>
                                                }
                                                </div>
                                            )
                                        })}
                                    </div>    
                                </div>
                                
                            </>    
                        }   

                    </div>

                    {/* Footer */}
                    <div className={`
                        h-35 flex items-center justify-between pl-40 pr-40 border-3
                        ${!hasUserMadeDecision ? "bg-white border-gray-500" : isUserCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}
                    `}>
                        <div>
                            <div className={`flex gap-2 bg-white pl-6 pr-6 p-3 text-md rounded-md w-fit border-2 text-center ${(hasUserMadeDecision &&isUserCorrect)  ? "border-green-500 text-green-500" :hasUserMadeDecision? "border-red-500 text-red-500":"border-none"}`}>
                                {hasUserMadeDecision && isUserCorrect && <SVG_tickGreenFilled className="h-6" />}
                                {hasUserMadeDecision && !isUserCorrect && <SVG_XCircle className="h-6 fill-red-500" />}
                                {hasUserMadeDecision && <div  onClick={()=>setIsStarted(true)}>{isUserCorrect?"Thats Correct!":"Incorrect!"}</div>}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {hasUserMadeDecision && isUserCorrect && <div className="bg-white border border-gray-500 pl-6 pr-6 p-3 text-md text-black rounded-md w-fit text-center  hover:cursor-pointer" >View Theory</div>}
                            {hasUserMadeDecision && !isUserCorrect && <div className="bg-red-500  pl-6 pr-6 p-3 text-md text-white rounded-md w-fit text-center hover:bg-red-400 hover:cursor-pointer" >Why</div>}                        
                            
                            {!hasUserMadeDecision && <div className="bg-gray-200  pl-6 pr-6 p-3 text-md text-gray-500 rounded-md w-fit text-center hover:cursor-pointer" >Continue</div>}
                            {hasUserMadeDecision && isUserCorrect && <div className="bg-green-500  pl-6 pr-6 p-3 text-md text-white rounded-md w-fit text-center hover:cursor-pointer hover:bg-green-600 " onClick={()=>goToNextQuestion()}>Continue</div>}
                            {hasUserMadeDecision && !isUserCorrect && <div className="bg-white  pl-6 pr-6 p-3 text-md  rounded-md w-fit text-center hover:cursor-pointer " onClick={()=>goToNextQuestion()}>Continue</div>}
                        </div>
                    </div>
                </>
            }

            {/* IF NOT STARTED */}
            {!isStarted &&
                <>
                    {/* Header */}
                    <div className="flex w-full justify-end pr-20">
                        <SVG_close onClick={() => router.push('/admin/lms/')} className="h-6 hover:cursor-pointer" />
                    </div>

                    <div className="h-full w-full flex items-center justify-center">    
                        {/* White container */}
                        <div className="flex relative flex-col gap-5 bg-white justify-between p-10 shadow-2xs rounded-xl items-center border border-gray-200 w-[30%]">
                            <div className="font-bold text-4xl text-center">Attention to Detail</div>
                            <div className="text-md text-gray-500 text-center">Demonstrate your eye for detail and see how you stack up against designers worldwide.</div>
                            
                            {/* Lives and question FLEX */}
                            <div className="flex gap-5">
                                {/* Lives */}
                                <div className="flex gap-2 items-center">
                                    <SVG_heartStraight className="h-5 stroke-gray-500 fill-white"/>
                                    <div className="text-md text-gray-700">Lives</div>
                                    <div className="text-md font-bold p-0.5 pl-2  pr-2 rounded-md bg-gray-100">3</div>
                                </div>

                                {/* Questions */}
                                <div className="flex gap-2 items-center">
                                    <SVG_question className="h-5 stroke-gray-500 fill-white"/>
                                    <div className="text-md text-gray-700">Questions</div>
                                    <div className="text-md font-bold p-0.5 pl-2  pr-2 rounded-md bg-gray-100">30</div>
                                </div>
                            </div>

                            {/* Start */}
                            <div className="bg-primary hover:bg-primary-hover hover:cursor-pointer pl-5 pr-5 p-3 text-md text-white rounded-md w-full text-center" onClick={()=>setIsStarted(true)}>Get Started</div>

                            <div className="text-md text-gray-500 text-center">On average users complete test in 12 minutes.</div>

                        </div>
                    </div>
                </>
                
            }
        </div>
    );
}


const allQuizQuestions = [
  {
    title: "Which One is AI-Generated?",
    type: "betweenImages",
    helperImage: null,
    helperText: null,
    answers: ["/examples/quiz/woman.png", "/examples/quiz/man.png"],
    correctAnswersIndex: [0],
  },
  {
    title: "How does AI contribute to UX?",
    type: "multipleChoice",
    helperImage: null,
    helperText: null,
    answers: [
      "AI completely replaces the need for human UX designers by automatically generating all user interfaces without any manual input or creative decisions.",
      "AI's primary function in the context of UX is to track and analyze hardware-related data, such as processor speed or battery usage.",
      "AI significantly improves the overall user experience by delivering highly personalized, context-aware, and adaptive interactions tailored to each individual user's behavior and preferences.",
      "AI technologies are used exclusively in backend systems and infrastructure, with no direct influence on user interface or experience design.",
    ],
    correctAnswersIndex: [2],
  },
  {
    title: "What are the 4 WCAG principles?",
    type: "multipleChoice",
    helperImage: "/examples/quiz/helper_1.png",
    helperText: null,
    answers: [
      "Perceivable, Operable, Understandable, Robust",
      "Accessible, Navigable, Inclusive, Interactive",
      "Readability, Operability, Flexibility, Visibility",
      "Usability, Compatibility, Clarity, Simplicity",
    ],
    correctAnswersIndex: [0],
  },
  {
    title: "What is one key responsibility of UX designers when working with AI systems?",
    helperText:
      "As artificial intelligence becomes more integrated into digital products, the role of UX designers expands beyond designing user interfaces. A key new responsibility is shaping how AI systems learn from and adapt to user behavior over time. This includes creating flexible interaction frameworks rather than rigid flows. Designers must ensure AI intervenes at the right moments, define boundaries for autonomy, and provide fallback mechanisms when AI underperforms. They also act as translators between users and technical teams—communicating user expectations to data scientists, and conveying model limitations to product stakeholders.",
    helperImage: null,
    type: "multipleChoice",
    answers: [
      "Creating only visual mockups without involving AI behavior",
      "Designing fixed user flows that AI must strictly follow",
      "Defining how AI should learn, adapt, and interact with users ✅",
    ],
    correctAnswersIndex: [2],
  },
  {
    title: "Which of the following is a real limitation of current AI systems in UX?",
    type: "multipleChoice",
    helperImage: null,
    helperText: null,
    answers: [
      "AI fully understands human emotions and always responds empathetically.",
      "AI sometimes makes decisions that are hard to explain to users (lack of transparency).",
      "AI can autonomously handle all design feedback without human input.",
      "AI guarantees perfect accessibility in every user interface it generates.",
    ],
    correctAnswersIndex: [1],
  },
  {
    title: "Why is accessibility important in UX design?",
    type: "multipleChoice",
    helperImage: null,
    helperText: null,
    answers: [
      "It allows AI to generate more advanced interfaces for high-end users.",
      "It ensures only users with the latest devices can access the interface.",
      "It helps ensure that digital experiences are usable by people of all abilities, including those with disabilities.",
      "It’s primarily a visual design concern, unrelated to interaction or content.",
    ],
    correctAnswersIndex: [2],
  },
];