import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/services/update.service';
import { ActivatedRoute } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Update } from 'src/app/models/update';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  id;
  update: Update;
  public conn: HubConnection;
  constructor(
    private route: ActivatedRoute,
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

    // this.getUpdate()
  }

  getUpdate() {
    this.updateService.getUpdate(this.id).subscribe(x => (this.update = x));
  }

  hubReturn(progress,step, comment) {
    this.update.logUpdateSteps[step -1].progress = progress;
    this.update.logUpdateSteps[step -1].comment = comment;

  }
}
