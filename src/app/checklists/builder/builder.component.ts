import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChecklistService } from 'src/app/services/checklist.service';
import { LookupDictionary } from 'src/app/models/dictionary';
import * as alertify from 'alertifyjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Link } from '../../models/link';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  dictionary: LookupDictionary;
  constructor(
    private checklistService: ChecklistService,
    private router: Router
  ) {}
  title = 'Create a new Checklist';
  buttons: Link[] = [{ name: 'Back to Search', path: '/checklists' }];
  ngOnInit() {
    this.checklistService.getDictionary().subscribe(x => (this.dictionary = x));
  }

  submit(form: NgForm) {
    this.checklistService.createChecklist(form.value).subscribe(
      checklist => {
        alertify.success(`Checklist ${checklist.idchecklist} was created!`);
        this.router.navigate([
          '/checklists/details',
          checklist.idchecklist,
          checklist.version
        ]);
      },
      err => alertify.console.error(err)
    );
  }
}
