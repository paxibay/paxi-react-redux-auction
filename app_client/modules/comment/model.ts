export type Project = {
  key: number,
  code: string,     //02
  title: string,    //project 2
  name?: string,     //project 2
  unit?: string,     //hundred
  symbol?: string,   //ton1 
  scale?: number,    //0
  price?: number     //0
}

export type Settings = {
  count: number;
  period?: number;
  startYear?: string;
};

export type IState = {
  settings: Settings,
  projects: Project[]
};
