import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ChecklistService } from './services/checklist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'checklistdb-spa';
  cookieValue;
  constructor(private service: ChecklistService){}

  ngOnInit() {
    this.service.isAuth();
    
  }
}
