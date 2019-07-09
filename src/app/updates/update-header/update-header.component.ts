import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-header',
  templateUrl: './update-header.component.html',
  styleUrls: ['./update-header.component.css']
})
export class UpdateHeaderComponent implements OnInit {
@Input() percentage;
@Input() title;
@Input() status;
  constructor() { }

  ngOnInit() {
  }

}
