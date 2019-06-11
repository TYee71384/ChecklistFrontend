export interface LogUpdateHistory {
  idupdate: number;
  fileTime: string;
  fileBy: string;
  fileAction: string;
  status: string;
}

export interface LogUpdateStep {
  idupdate: number;
  step: number;
  stepText: string;
  comment: string;
  progress: string;
}

export interface Update {
  idupdate: number;
  prodLine: string;
  siteKml: string;
  updateNum: number;
  system: string;
  process: string;
  task: number;
  updateRelease: string;
  updatePpack: string;
  note: string;
  idchecklist: number;
  version: number;
  status: string;
  startTime: string;
  endTime: string;
  logUpdateHistory: LogUpdateHistory[];
  logUpdateSteps: LogUpdateStep[];
}




