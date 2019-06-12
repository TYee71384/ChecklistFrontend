import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import {
  Checklist,
  LogChecklistStep,
  LogChecklistHistory
} from 'src/app/models/checklist';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { StepEditorComponent } from '../step-editor/step-editor.component';
import { DialogService } from 'primeng/api';
import { Link } from 'src/app/models/link';
import { CookieService } from 'ngx-cookie-service';

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
  buttons: Link[] = [{ name: 'Back to Search', path: '/checklists' }];
  constructor(
    private checklistService: ChecklistService,
    private cookieService: CookieService,
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
    this.checklistService.getChecklist(this.id, this.ver).subscribe(x => {
      this.checklist = x;
      this.history = x.logChecklistHistory;
      if (
        this.cookieService.get('Auth') === 'true' &&
        this.checklist.status === 'Draft'
      ) {
        this.buttons.unshift({
          name: 'Edit',
          path: '/checklists/edit',
          id: this.id,
          ver: this.ver
        });
      }
    });
  }

  loadHistory() {
    this.checklistService
      .getChecklist(this.id, this.ver)
      .subscribe(
        x => (this.history = x.logChecklistHistory),
        err => console.log(err)
      );
  }
}
