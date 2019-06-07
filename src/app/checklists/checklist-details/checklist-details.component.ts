import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Checklist, LogChecklistStep } from 'src/app/models/checklist';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { StepEditorComponent } from '../step-editor/step-editor.component';

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
  constructor(private checklistService: ChecklistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = +p.id; this.ver = +p.ver;
    } );
    this.getChecklist(this.id, this.ver);
    this.title = `Checklist ${this.id} Version ${this.ver}`;
  }

  getChecklist(id, ver) {
  //  console.log(this.id);
    this.checklistService.getChecklist(this.id, this.ver).subscribe(x => this.checklist = x);
  }

  reorder(event) {
    moveItemInArray(this.checklist.logChecklistSteps, event.previousIndex, event.currentIndex);
let step = 1;
    this.checklist.logChecklistSteps.forEach((i:LogChecklistStep) => {

    i.step = step;
    step ++;
console.log(i)
    })

    this.checklistService.reorderStep(this.checklist).subscribe(x => console.log('reordered'),err => console.log(err));
  }

}
