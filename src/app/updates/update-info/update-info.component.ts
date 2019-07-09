import { Component, OnInit, Input } from '@angular/core';
import { Update } from 'src/app/models/update';
import { MatDialog } from '@angular/material';
import { EditUpdateInfoComponent } from '../edit-update-info/edit-update-info.component';


@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
@Input() update: Update;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  editInfo() {
    const dialogRef =  this.dialog.open(EditUpdateInfoComponent, { data: this.update})
  }

}
