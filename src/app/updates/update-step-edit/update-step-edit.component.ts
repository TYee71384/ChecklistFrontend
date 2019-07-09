import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LogUpdateStep } from '../../models/update';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { EditDescriptionComponent } from 'src/app/checklists/edit-description/edit-description.component';

@Component({
  selector: 'app-update-step-edit',
  templateUrl: './update-step-edit.component.html',
  styleUrls: ['./update-step-edit.component.css']
})
export class UpdateStepEditComponent implements AfterViewInit {
  @Input() step: LogUpdateStep;
  @Input() conn: HubConnection
@Input() edit
  constructor() {}
isComplete;

  ngAfterViewInit() {

  }

  setDone(e) {

    e.checked ? this.isComplete = 'Done' : this.isComplete = '';
    this.conn.invoke('GetProgress', this.step.idupdate, this.step.step, this.isComplete);
  }

  setSkip(e) {
    e.checked ? this.isComplete = 'Skip' : this.isComplete = '';
    this.conn.invoke('GetProgress', this.step.idupdate, this.step.step, this.isComplete);
  }

  saveComment(e) {
    setTimeout(() => {
this.conn.invoke('SaveComment',this.step.idupdate, this.step.step, e.target.value)
    }, 2000);

  }




}
