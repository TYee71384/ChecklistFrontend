import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() status: string;
  @Input() menuButtons: Link[];
  statusClass = 'draft';
  constructor(private router: Router) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
  
  }

  navigate(item: Link) {
    if (item.id || item.ver) {
      this.router.navigate(['/' + item.path, item.id, item.ver]);
    } else {
      this.router.navigate(['/' + item.path]);
    }
  }
}
