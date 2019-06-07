import { Component, OnInit, Input } from '@angular/core';
import { LogChecklistStep } from 'src/app/models/checklist';
import { DialogService, MessageService } from 'primeng/api';
import { StepEditorComponent } from '../step-editor/step-editor.component';

@Component({
  selector: 'app-checklist-step-details',
  templateUrl: './checklist-step-details.component.html',
  styleUrls: ['./checklist-step-details.component.css']
})
export class ChecklistStepDetailsComponent implements OnInit {
@Input() step : LogChecklistStep;
  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit() {
  }

  showEditor(step?: LogChecklistStep) {
    let header = '';
    header = `Edit Step ${step.step}`;
    const ref = this.dialogService.open(StepEditorComponent, {
      data: step,
      header,
      width: '70%',
      contentStyle: {"max-height": "350px", "overflow": "auto"}
    });
    ref.onClose.subscribe((stepR: LogChecklistStep) => {
      console.log('closed',stepR)
     // this.step = stepR;
      this.messageService.add({severity: 'info', summary: 'Step was edited', detail: `text: ${step.stepText}`})
    })
  }

}
