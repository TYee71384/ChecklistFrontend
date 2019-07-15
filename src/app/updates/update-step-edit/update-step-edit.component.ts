import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { LogUpdateStep } from '../../models/update';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { EditDescriptionComponent } from 'src/app/checklists/edit-description/edit-description.component';
import * as alertify from 'alertifyjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-step-edit',
  templateUrl: './update-step-edit.component.html',
  styleUrls: ['./update-step-edit.component.css']
})
export class UpdateStepEditComponent implements AfterViewInit {
  @Input() step: LogUpdateStep;
  @Input() conn: HubConnection;
  @Input() edit;
  @ViewChild('commentForm', {static: false}) form: NgForm;
  constructor() {}
  isComplete;

  ngAfterViewInit() {}

  setDone(e) {
    e.checked ? (this.isComplete = 'Done') : (this.isComplete = '');
    this.conn.invoke(
      'GetProgress',
      this.step.idupdate,
      this.step.step,
      this.isComplete
    );
  }


  setSkip(e) {

if(this.form.valid){
    e.checked ? (this.isComplete = 'Skip') : (this.isComplete = '');
    this.conn.invoke(
      'GetProgress',
      this.step.idupdate,
      this.step.step,
      this.isComplete
    );
} else {
  alertify.error('Comment is required in order to file!')
  e.checked = !e.checked;
}
  }

  saveComment(e) {
    setTimeout(() => {
      this.conn.invoke(
        'SaveComment',
        this.step.idupdate,
        this.step.step,
        e.target.value
      );
    }, 2000);
  }
}
