import { Component, OnInit, Input } from '@angular/core';
import { LogChecklistHistory } from 'src/app/models/checklist';

@Component({
  selector: 'app-page-identification-info',
  templateUrl: './page-identification-info.component.html',
  styleUrls: ['./page-identification-info.component.css']
})
export class PageIdentificationInfoComponent implements OnInit {
  @Input() history: LogChecklistHistory;
  constructor() {}

  ngOnInit() {}
}
