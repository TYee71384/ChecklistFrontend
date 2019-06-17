import { Component, OnInit, Inject } from '@angular/core';
import { ChecklistService } from '../../services/checklist.service';
import { LookupDictionary } from '../../models/dictionary';
import { Checklist } from '../../models/checklist';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { NgForm } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from '@angular/material';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent implements OnInit {
  dictionary: LookupDictionary;
  constructor(
    private checklistService: ChecklistService,
    public dialogRef: MatDialogRef<EditDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public checklist: Checklist //public config: MatDialogConfig // public ref: DynamicDialogRef, // public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.checklistService.getDictionary().subscribe(x => {
      this.dictionary = x;
      
    });
  }

  submit(f: NgForm) {
    this.checklistService
      .editChecklist(
        f.value,
        this.checklist.idchecklist,
        this.checklist.version
      )
      .subscribe(
        () => alertify.success('Description was edited'),
        err => alertify.error(err)
      );
  }
}
