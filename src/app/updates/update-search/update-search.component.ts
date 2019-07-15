import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { UpdateService } from 'src/app/services/update.service';
import { Update } from 'src/app/models/update';
import { LookupDictionary } from 'src/app/models/dictionary';

@Component({
  selector: 'app-update-search',
  templateUrl: './update-search.component.html',
  styleUrls: ['./update-search.component.css']
})
export class UpdateSearchComponent implements OnInit, AfterViewInit {
  constructor(private checkistService: ChecklistService, private updateService: UpdateService) {}
  @ViewChild('dt', { static: false }) table;
  title = 'Update Search';
  updates: Update[];

  selectedItem = 'Approved';
  cols: any[];
  dictionary: LookupDictionary;
  selectedSite = 'CS';
  platform = [];
  system = [];
  process = [];
  type = [];
  release = [];
  siteKml = [];
  statuses: any[] = [
    { label: '---', value: '' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'On Hold', value: 'On Hold' },
    { label: 'Complete', value: 'Complete' },
    { label: 'Cancelled', value: 'Cancelled' }

  ];
  ngOnInit() {
    this.cols = [
      { field: 'prodLine', header: 'PL', width: '5%' },
      { field: 'siteKml', header: 'Site', width: '10%' },
      { field: 'updateNum', header: 'Update #', width: '5%' },
      { field: 'system', header: 'System', width: '8%' },
      { field: 'process', header: 'Process', width: '10%' },
      { field: 'task', header: 'Task', width: '8%' },
      { field: 'updateRelease', header: 'Release', width: '8%' },
      { field: 'idchecklist', header: 'ID', width: '6%' },
      { field: 'version', header: 'Ver', width: '6%' },
      { field: 'startTime', header: 'Start Date', width: '8%' },
      { field: 'endTime', header: 'Last Activity', width: '8%' },
      { field: 'status', header: 'Status', width: '8%' }



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
  getUpdates() {
    this.updateService.getUpdates().subscribe(x => this.updates = x);
  }

  ngAfterViewInit() {
    this.getUpdates();
  }

  getPercentage(id) {
    this.updateService.getPercentage(id).subscribe(x => x);
  }

  getSites(platform) {
    console.log(this.selectedSite)
    this.updateService.getSitesByPlatform(platform).subscribe(x => this.siteKml = x);
  }

}
