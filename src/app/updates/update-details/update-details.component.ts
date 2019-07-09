import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/services/update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Update } from 'src/app/models/update';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  id;
  update: Update;
  edit = true;
  percentage;
  title;
    public conn: HubConnection;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updateService: UpdateService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = +p.id;
    });
    this.getUpdate();
    this.conn = new HubConnectionBuilder()
      .withUrl('https://localhost:44317/updatesHub')
      .build();
    this.conn
      .start()
      .then()
      .catch();


    this.conn.on('StepProgress', this.hubReturn.bind(this));

    this.updateService.getPercentage(this.id).subscribe(x => {
      this.percentage = x;
      this.percentage < 100 ? (this.edit = true) : (this.edit = false);
    });
  }

setEdit() {
  this.edit = !this.edit;
  console.log(this.edit)
}

  getUpdate() {
    this.updateService.getUpdate(this.id).subscribe(x =>{ (this.update = x);
      this.title = `${this.update.prodLine} ${this.update.siteKml} : Update # ${
        this.update.updateNum
      } : ${this.update.process}`;
    });
  }

  hubReturn(progress, step, comment, percentage) {
    this.update.logUpdateSteps[step - 1].progress = progress;
    this.update.logUpdateSteps[step - 1].comment = comment;
    this.percentage = percentage.replace('%', '');
    if (this.percentage === '100.0') {
      alertify.success('Update is complete!');
      this.edit = false;
    } 
  }
}
