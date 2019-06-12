import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogChecklistStep } from 'src/app/models/checklist';
import { DialogService, MessageService } from 'primeng/api';
import { StepEditorComponent } from '../step-editor/step-editor.component';
import * as alertify from 'alertifyjs';
import { ChecklistService } from '../../services/checklist.service';

@Component({
  selector: 'app-checklist-step-details',
  templateUrl: './checklist-step-details.component.html',
  styleUrls: ['./checklist-step-details.component.css']
})
export class ChecklistStepDetailsComponent implements OnInit {
  @Input() step: LogChecklistStep;
  @Output() stepChange: EventEmitter<LogChecklistStep> = new EventEmitter();
  @Input() editMode: boolean;
  constructor(
    public dialogService: DialogService,
    private checklistService: ChecklistService
  ) {}

  ngOnInit() {
    console.log('edit', this.editMode);
  }

  showEditor(step?: LogChecklistStep) {
    let header = '';
    header = `Edit Step ${step.step}`;
    const ref = this.dialogService.open(StepEditorComponent, {
      data: step,
      header,
      width: '70%',
      contentStyle: { 'max-height': '350px', overflow: 'auto' }
    });
    ref.onClose.subscribe((stepR: LogChecklistStep) => {
      console.log('closed', stepR);

      // this.step = stepR;
    });
  }

  getChecklist() {
    this.checklistService
      .getChecklist(this.step.idchecklist, this.step.version)
      .subscribe();
  }

  deleteStep(step) {
    this.checklistService.deleteStep(step).subscribe(
      () => {
        alertify.warning(`Step ${step.step} was deleted`);
        this.stepChange.emit(step);
      },
      err => alertify.error(err)
    );
  }
}
