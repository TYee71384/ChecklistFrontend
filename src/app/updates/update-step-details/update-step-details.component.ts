import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LogUpdateStep } from '../../models/update';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-update-step-details',
  templateUrl: './update-step-details.component.html',
  styleUrls: ['./update-step-details.component.css']
})
export class UpdateStepDetailsComponent implements AfterViewInit {
  @Input() step: LogUpdateStep;
  @Input() conn: HubConnection

  constructor() {}
isComplete
  ngAfterViewInit() {

  }

  getProgress(e) {
    console.log(e.checked)
    e.checked ? this.isComplete = 'Done' : this.isComplete = '';
    console.log(this.isComplete)
    this.conn.invoke('GetProgress', this.step.idupdate, this.step.step, this.isComplete);
  }


}
