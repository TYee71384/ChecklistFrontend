import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() status: string;
  @Input() menuButtons: Link[];
  statusClass = 'draft';
  constructor(private router: Router) {}

  navigate(item: Link) {
    if (item.id || item.ver) {
      this.router.navigate(['/' + item.path, item.id, item.ver]);
    } else {
      this.router.navigate(['/' + item.path]);
    }
  }
}
