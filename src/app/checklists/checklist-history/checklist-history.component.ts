import { Component, OnInit, Input } from '@angular/core';
import { LogChecklistHistory, Checklist } from '../../models/checklist';
import { ChecklistService } from '../../services/checklist.service';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-checklist-history',
  templateUrl: './checklist-history.component.html',
  styleUrls: ['./checklist-history.component.css']
})
export class ChecklistHistoryComponent implements OnInit {
  @Input() checklist: Checklist;
  history: LogChecklistHistory[];
  cols;
  constructor(private cs: ChecklistService) {}

  ngOnInit() {
    this.loadHistory();
    this.cols = [
      { field: 'fileTime', header: 'File Time'},
      { field: 'fileBy', header: 'File By'},
      { field: 'fileAction', header: 'Action'},
      { field: 'status', header: 'status'}

    ]
  }

  loadHistory() {
    this.cs
      .getChecklist(this.checklist.idchecklist, this.checklist.version)
      .subscribe(
        x => (this.history = x.logChecklistHistory),
        err => alertify.error(err)
      );
  }
}
