import ModuleDisplayer from "../components/ModuleDisplayer"
import {Program_T} from "@/types/module"

const exampleList: Program_T[] = [
  {
    name: "Data Analyst Program",
    modules: [
      {
        name: "Module 1",
        description: "Discover and review UX projects from design professionals worldwide.",
        isUnlocked:true,
        index:0,
        blocks: [
          {
            name: "AI & UX Foundations",
            description:"Understand core AI concepts, capabilities, limitations, and human-centered principles that distinguish AI-powered experiences.",
            isUnlocked:true,
            index:0,
            bites: [
              { name: "AI Fundamentals Quiz", type: "quiz", xp: 250, isCompleted: true, questionsCount: 30, correctAnswers: 29, minutesToComplete: 5 ,isUnlocked:true, index:0},
              { name: "Human Centered Lesson", type: "article", xp: 250, isCompleted: true, minutesToComplete: 5,isUnlocked:true , index:1},
              { name: "AI Guidebook Resource", type: "resource", xp: 250, isCompleted: true, minutesToComplete: 5,isUnlocked:true, index:2 },
              { name: "Recap Quiz", type: "quiz", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:true , index:3},
              { name: "Homework Challenge", type: "task", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:4},
              { name: "AI Masterclass by sam", type: "clip", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:5},
            ],
          },

          {
            name: "How to tie your shoe",
            description:"Understand core AI concepts, capabilities, limitations, and human-centered principles that distinguish AI-powered experiences.",
            isUnlocked:false,
            index:1,
            bites: [
              { name: "AI Fundamentals Quiz", type: "quiz", xp: 250, isCompleted: true, questionsCount: 30, correctAnswers: 29, minutesToComplete: 5 ,isUnlocked:true, index:0},
              { name: "Human Centered Lesson", type: "article", xp: 250, isCompleted: false, minutesToComplete: 5,isUnlocked:true , index:1},
              { name: "AI Guidebook Resource", type: "resource", xp: 250, isCompleted: false, minutesToComplete: 5,isUnlocked:false, index:2 },
              { name: "Recap Quiz", type: "quiz", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:3},
              { name: "Homework Challenge", type: "task", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:4},
              { name: "AI Masterclass by sam", type: "clip", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:5},
            ],
          },
          {
            name: "How to tie your shoe",
            description:"Understand core AI concepts, capabilities, limitations, and human-centered principles that distinguish AI-powered experiences.",
            isUnlocked:false,
            index:2,
            bites: [
              { name: "AI Fundamentals Quiz", type: "quiz", xp: 250, isCompleted: true, questionsCount: 30, correctAnswers: 29, minutesToComplete: 5 ,isUnlocked:true, index:0},
              { name: "Human Centered Lesson", type: "article", xp: 250, isCompleted: false, minutesToComplete: 5,isUnlocked:true , index:1},
              { name: "AI Guidebook Resource", type: "resource", xp: 250, isCompleted: false, minutesToComplete: 5,isUnlocked:false, index:2 },
              { name: "Recap Quiz", type: "quiz", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:3},
              { name: "Homework Challenge", type: "task", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:4},
              { name: "AI Masterclass by sam", type: "clip", xp: 250, isCompleted: false, questionsCount: 30, correctAnswers: 0, minutesToComplete: 5,isUnlocked:false , index:5},
            ],
          },
          
        ],
      },
    ],
  },
];


export default function ProgramPage() {
  const example = exampleList[0]
  let {modules} = example;

  return (
    <div className="flex flex-col h-fit	p-10 bg-indigo-50 pb-40 gap-25">
      {modules.map((moduleData,i:number)=>{
        return(
          <ModuleDisplayer moduleData={moduleData} key={`Module_${i}`} />
        )
      })}
    </div>

  );
}