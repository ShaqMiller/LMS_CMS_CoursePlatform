// types/module.ts

export type Bite_T = {
  name: string;
  type: "quiz" | "article" | "resource" | "clip" |"task";
  xp: number;
  isCompleted: boolean;
  minutesToComplete: number;
  questionsCount?: number;
  correctAnswers?: number;
  isUnlocked:boolean;
  index:number;
};

export type Block_T = {
  name: string;
  description: string;
  bites: Bite_T[];
  isUnlocked:boolean;
  index:number;
};

export type Module_T = {
    name: string;
    description: string;
    blocks: Block_T[];
    isUnlocked:boolean;
    index:number;
};

export type Program_T = {
    name: string;
    modules: Module_T[];
};