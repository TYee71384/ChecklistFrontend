import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChecklistService } from 'src/app/services/checklist.service';
import { LookupDictionary } from 'src/app/models/dictionary';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
dictionary: LookupDictionary;
  constructor(private checklistService: ChecklistService) { }
title='Create a new Checklist';
  ngOnInit() {
    this.checklistService.getDictionary().subscribe(x => this.dictionary = x);
  }

  submit(form: NgForm)
  {
    console.log(form.value)
  }

}
