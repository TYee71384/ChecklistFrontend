import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Checklist, LogChecklistStep, LogChecklistHistory } from 'src/app/models/checklist';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { StepEditorComponent } from '../step-editor/step-editor.component';
import { DialogService } from 'primeng/api';

@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css']
})
export class ChecklistDetailsComponent implements OnInit {
  checklist: Checklist;
  id;
  ver;
  title;
  history: LogChecklistHistory[];

  constructor(
    private checklistService: ChecklistService,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = +p.id;
      this.ver = +p.ver;
    });
    this.getChecklist(this.id, this.ver);
    this.title = `Checklist ${this.id} Version ${this.ver}`;
  }

  getChecklist(id, ver) {
    //  console.log(this.id);
    this.checklistService
      .getChecklist(this.id, this.ver)
      .subscribe(x => {this.checklist = x; this.history = x.logChecklistHistory;});
  }

  reorder(event) {
    moveItemInArray(
      this.checklist.logChecklistSteps,
      event.previousIndex,
      event.currentIndex
    );
    let step = 1;
    this.checklist.logChecklistSteps.forEach((i: LogChecklistStep) => {
      i.step = step;
      step++;
      console.log(i);
    });

    this.checklistService
      .reorderStep(this.checklist)
      .subscribe(x => console.log('reordered'), err => console.log(err));
  }

  stepChanged($event) {
    console.log('event', $event);
    const step = this.checklist.logChecklistSteps.findIndex(
      i => i.idstep === $event.idstep
    );
    this.checklist.logChecklistSteps.splice(step, 1);
    let count = 1;
    this.checklist.logChecklistSteps.forEach((i: LogChecklistStep) => {
      i.step = count;
      count++;
    });
  }

  showEditor() {
    let header = '';
    header = `Add Step`;
    const ref = this.dialogService.open(StepEditorComponent, {
      header,
      width: '70%',
      data: {
        idChecklist: this.checklist.idchecklist,
        version: this.checklist.version
      },
      contentStyle: { 'max-height': '350px', overflow: 'auto' }
    });
    ref.onClose.subscribe((stepR: LogChecklistStep) => {
      //this.getChecklist(this.id,this.ver);
      if(stepR){
         this.checklist.logChecklistSteps.push(stepR);

      console.log('refresh', stepR);
      }
 console.log('here')
    this.loadHistory();
    console.log('hist',this.history)
      // this.step = stepR;
    });

  }

  loadHistory() {
    this.checklistService.getChecklist(this.id, this.ver).subscribe(x => this.history = x.logChecklistHistory, err => console.log(er))
  }
}
