import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Checklist } from '../../models/checklist';
import { ChecklistService } from '../../services/checklist.service';
import { UpdateService } from '../../services/update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../../models/dictionary';
import * as alertify from 'alertifyjs';
import { NgForm } from '@angular/forms';
import { Update } from '../../models/update';

@Component({
  selector: 'app-update-starter',
  templateUrl: './update-starter.component.html',
  styleUrls: ['./update-starter.component.css']
})
export class UpdateStarterComponent implements OnInit, AfterViewInit {
  id;
  ver;
  checklist: Checklist;
  sites: Site[];
  dictionary;
  update: Update;
  constructor(
    private checklistService: ChecklistService,
    private updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = +x.id;
      this.ver = +x.ver;
    });
  }

  ngAfterViewInit() {
    this.checklistService.getChecklist(this.id, this.ver).subscribe(x => {
      this.checklist = x;
      this.updateService
        .getSitesByPlatform(this.checklist.prodLine)
        .subscribe(x => (this.sites = x));
    });
    this.checklistService.getDictionary().subscribe(x => (this.dictionary = x));
  }

  submit(f: NgForm) {
    this.update = f.value;
    this.update.prodLine = this.checklist.prodLine;
    this.update.process = this.checklist.process;
    this.update.system = this.checklist.system;
    this.update.idchecklist = this.id;
    this.update.version = this.ver;
    this.updateService.startUpdate(this.update).subscribe(
      (x: Update) => {
        alertify.success(`Update ${x.idupdate} is now In Progress`);
        this.router.navigate(['/updates/details', x.idupdate]);
      },
      err => alertify.error(err.error)
    );
  }
}
