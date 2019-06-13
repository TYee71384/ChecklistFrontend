import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Checklist } from 'src/app/models/checklist';
import { ChecklistService } from 'src/app/services/checklist.service';
import { environment } from 'src/environments/environment';
import { MessageService, DialogService } from 'primeng/api';
import { BuilderComponent } from '../builder/builder.component';
import { LookupDictionary } from 'src/app/models/dictionary';
import { Link } from 'src/app/models/link';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  constructor(private checkistService: ChecklistService) {}
  @ViewChild('dt', { static: false }) table;
  title = 'Checklist Search';
  checklists: Checklist[];
  menuButtons: Link[] = [
    { name: 'Create New Checklist', path: 'checklists/new' }
  ];
  selectedItem = 'Approved';
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
      { field: 'idchecklist', header: 'ID', width: '5%' },
      { field: 'version', header: 'Version', width: '5%' },
      { field: 'status', header: 'Status', width: '10%' },
      { field: 'title', header: 'Title', width: '25%' },
      { field: 'prodLine', header: 'Platform', width: '9%' },
      { field: 'system', header: 'System', width: '8%' },
      { field: 'process', header: 'Process', width: '10%' },
      { field: 'rel', header: 'Release', width: '6%' },
      { field: 'type', header: 'Type', width: '6%' }
    ];

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
    this.checkistService.getChecklists().subscribe(x =>this.checklists = x);
  }

  ngAfterViewInit() {
    this.getChecklists();
    this.table.filter(this.selectedItem,'status', 'equals')
  }
}
