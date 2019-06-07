export interface LogChecklistHistory {
  idchecklist: number;
  version: number;
  fileTime: string;
  fileBy: string;
  fileAction: string;
  status: string;
}

export interface LogChecklistStep {
  idchecklist: number;
  idstep: number;
  version: number;
  step: number;
  stepText: string;
}

export interface Checklist {
  idchecklist: number;
  version: number;
  status: string;
  title: string;
  prodLine: string;
  system: string;
  process: string;
  rel: string;
  type?: any;
  scope: string;
  logChecklistHistory: LogChecklistHistory[];
  logChecklistSteps: LogChecklistStep[];
}




