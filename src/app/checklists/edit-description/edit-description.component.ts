import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../../services/checklist.service';
import { LookupDictionary } from '../../models/dictionary';
import { Checklist } from '../../models/checklist';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent implements OnInit {
  dictionary: LookupDictionary;
  checklist: Checklist;
  constructor(
    private checklistService: ChecklistService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.checklistService.getDictionary().subscribe(x => (this.dictionary = x));
    this.checklist = this.config.data;
    console.log(this.checklist);
  }

  submit(f: NgForm) {
    console.log(f.value);
  }
}
