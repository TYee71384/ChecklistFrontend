import { Component, OnInit, Input } from '@angular/core';
import {LogChecklistHistory, Checklist } from '../../models/checklist';
import {ChecklistService} from '../../services/checklist.service';

@Component({
  selector: 'app-checklist-history',
  templateUrl: './checklist-history.component.html',
  styleUrls: ['./checklist-history.component.css']
})
export class ChecklistHistoryComponent implements OnInit {
@Input() checklist: Checklist;
history: LogChecklistHistory[];
  constructor(private cs: ChecklistService) { }

  ngOnInit() {
    console.log('History is loading')
    this.loadHistory()
  }

  loadHistory() {
    this.cs.getChecklist(this.checklist.idchecklist, this.checklist.version).subscribe(x => this.history = x.logChecklistHistory, err => console.log(err))
  }

}
