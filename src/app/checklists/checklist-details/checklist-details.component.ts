import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Checklist, LogChecklistHistory } from 'src/app/models/checklist';
import { ActivatedRoute, Router } from '@angular/router';
import * as alertify from 'alertifyjs';
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
  pageIdInfo;
  title;
  showApproval;
  status;
  showArchive;
  history: LogChecklistHistory[];
  buttons: Link[] = [{ name: 'Back to Search', path: '/checklists' }];
  constructor(
    private checklistService: ChecklistService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
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
      console.log('get', this.checklist);
      this.status = x.status;
      this.history = x.logChecklistHistory;
      this.isApproved();
      this.checkForDraft();
      this.pageIdInfo = x.logChecklistHistory.slice(-1)[0];
      if (this.checklist.status === 'Approved') {
        {
          this.buttons.unshift({
            name: 'Update Starter',
            path: '/updates/starter',
            id: this.id,
            ver: this.ver
          });
        }
      }
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

  isApproved() {
    const user = this.cookieService.get('User');
    const lastuser = this.checklist.logChecklistHistory.slice(-1)[0].fileBy;
    if (this.checklist.status === 'Draft' && user !== lastuser) {
      this.showApproval = true;
    }
  }

  checkForDraft() {
    this.checklistService
      .checkForDraft(this.id)
      .subscribe(x => (this.showArchive = x));
  }

  deleteChecklist() {
    alertify.confirm('Are you sure you want to delete this checklist?', () => {
 this.checklistService.deleteChecklist(this.id, this.ver).subscribe(
      () => {
        alertify.warning(
          `Checklist Id: ${this.id} Version: ${this.ver} was deleted`
        );
        this.router.navigate(['/']);
      },
      err => alertify.error(err)
    );
    })
  }

  archiveChecklist() {
    this.checklistService.archiveChecklist(this.id, this.ver).subscribe(
      () => {
        alertify.success('Checklist was set to Archived');
        this.status = 'Archived';
      },
      err => alertify.error(err)
    );
  }
}
