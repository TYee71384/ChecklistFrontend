import { Component, OnInit, Inject } from '@angular/core';
import { EditDescriptionComponent } from 'src/app/checklists/edit-description/edit-description.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Update } from 'src/app/models/update';
import { UpdateService } from 'src/app/services/update.service';
import { Site, LookupDictionary } from 'src/app/models/dictionary';
import { ChecklistService } from 'src/app/services/checklist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-update-info',
  templateUrl: './edit-update-info.component.html',
  styleUrls: ['./edit-update-info.component.css']
})
export class EditUpdateInfoComponent implements OnInit {
siteLookup : Site[];
dictionary: LookupDictionary;
statuses = ['In Progress', 'On Hold', 'Complete'];
  constructor(private updateService: UpdateService,
    private cs: ChecklistService,
    public dialogRef: MatDialogRef<EditDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public update: Update) { }

  ngOnInit() {
    this.updateService.getSitesByPlatform(this.update.prodLine).subscribe(x => this.siteLookup = x);
    this.cs.getDictionary().subscribe(x => this.dictionary = x)
  }

  submit(f:NgForm) {
    console.log(f.value)
  }

}
