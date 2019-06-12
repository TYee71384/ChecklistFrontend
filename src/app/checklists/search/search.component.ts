import { Component, OnInit } from '@angular/core';
import { Checklist } from 'src/app/models/checklist';
import { ChecklistService } from 'src/app/services/checklist.service';
import { environment } from 'src/environments/environment';
import { MessageService, DialogService } from 'primeng/api';
import { BuilderComponent } from '../builder/builder.component';
import { LookupDictionary } from 'src/app/models/dictionary';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private checkistService: ChecklistService) {}
  title = 'Checklist Search';
  checklists: Checklist[];
  menuButtons: Link[] = [
    { name: 'Create New Checklist', path: 'checklists/new' }
  ];
  cols: any[];
  dictionary: LookupDictionary;
  platform = [];
  system = [];
  process = [];
  type = [];
  release = [];
  statuses: any[] = [
    { label: '---', value: '' },
    { label: 'Approved', value: 'Approved' },
    { label: 'Draft', value: 'Draft' },
    { label: 'Archived', value: 'Archived' }
  ];
  ngOnInit() {
    this.cols = [
      { field: 'idchecklist', header: 'ID', width: '8%' },
      { field: 'version', header: 'Version', width: '8%' },
      { field: 'status', header: 'Status', width: '10%' },
      { field: 'title', header: 'Title', width: '30%' },
      { field: 'prodLine', header: 'Platform', width: '8%' },
      { field: 'system', header: 'System', width: '10%' },
      { field: 'process', header: 'Process', width: '10%' },
      { field: 'rel', header: 'Release', width: '8%' },
      { field: 'type', header: 'Type', width: '8%' }
    ];
    this.getChecklists();
    this.checkistService.getDictionary().subscribe(x => {
      this.platform = this.populateDropdown(x.prodLines);
      this.process = this.populateDropdown(x.processes);
      this.release = this.populateDropdown(x.releases);
      this.type = this.populateDropdown(x.types);
      this.system = this.populateDropdown(x.systems);
    });
  }

  populateDropdown(array) {
    const returnarray = [{ label: '---', value: '' }];
    array.forEach(element => {
      const item = { label: element, value: element };
      returnarray.push(item);
    });
    return returnarray;
  }
  getChecklists() {
    this.checkistService.getChecklists().subscribe(x =>
      setTimeout(() => {
        this.checklists = x;
      }, 500)
    );
  }

  clickMe() {
    console.log('here');
    alert('you clicked here');
  }
}
