import { Component, OnInit } from '@angular/core';
import { Checklist } from 'src/app/models/checklist';
import { ChecklistService } from 'src/app/services/checklist.service';
import { environment } from 'src/environments/environment';
import { MessageService, DialogService } from 'primeng/api';
import { BuilderComponent } from '../builder/builder.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private checkistService: ChecklistService) {}
  title = 'Checklist Search';
  checklists: Checklist[];
  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'idchecklist', header: 'ID', width: '8%' },
      { field: 'version', header: 'Version', width: '8%' },
      { field: 'status', header: 'Status', width: '10%' },
      { field: 'title', header: 'Title', width: '30%' },
      { field: 'prodLine', header: 'Platform',width: '8%' },
      { field: 'system', header: 'System',width: '10%' },
      { field: 'process', header: 'Process',width: '10%' },
      { field: 'rel', header: 'Release',width: '8%' },
      { field: 'type', header: 'Type',width: '8%' }
    ];
    this.getChecklists();


  }


  getChecklists() {
    setTimeout(() => {}, 10000);
    this.checkistService.getChecklists().subscribe(x =>  this.checklists = x);
  }

}
