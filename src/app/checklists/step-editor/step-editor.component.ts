import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { LogChecklistStep } from '../../models/checklist';
import { NgForm } from '@angular/forms';
import { ChecklistService } from 'src/app/services/checklist.service';

@Component({
  selector: 'app-step-editor',
  templateUrl: './step-editor.component.html',
  styleUrls: ['./step-editor.component.css']
})
export class StepEditorComponent implements OnInit {
  api = environment.tinyApi;
  tinyMceSettings;
  step: LogChecklistStep;
  constructor(private cs: ChecklistService ,public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

  ngOnInit() {
    this.tinyMceSettings = {
      inline: false,
      statusbar: false,
      browser_spellcheck: true,
      height: 320,
      toolbar:
        'undo redo | removeformat | formatselect | fontsizeselect | bold italic underline | forecolor | alignleft aligncenter alignright | bullist numlist | table | outdent indent | link unlink image | preview',
      plugins:
        'advlist autolink lists link image charmap print preview hr anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking save table directionality emoticons template paste textpattern'
    };
    this.step = this.config.data;
  }

  save(f: NgForm) {
    this.step.stepText = f.controls['stepText'].value;
    this.cs.editStep(this.step).subscribe();
    this.ref.close(this.step);
  }

}
