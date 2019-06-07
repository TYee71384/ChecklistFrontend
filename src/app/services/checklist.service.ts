import { Injectable } from '@angular/core';
import { Checklist } from '../models/checklist';
import { LookupDictionary } from '../models/dictionary';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  baseUri = environment.baseUri + 'checklist';
  stepUri = environment.baseUri + 'checklistSteps/';
    constructor(private http: HttpClient) { }

    getChecklists() {
           return this.http.get<Checklist[]>(this.baseUri)

        }

    getChecklist(id, ver) {
      return this.http.get<Checklist>(`${this.baseUri}/${id}/${ver}`);
    }

    getDictionary() {
      return this.http.get<LookupDictionary>(environment.baseUri + 'dictionary');
    }

    editStep(step) {
      return this.http.put(this.stepUri + step.idstep, step);
    }

    addStep(step) {
      return this.http.post(this.stepUri, step);
    }

    reorderStep(checklist) {
      return this.http.put(this.stepUri + 'reorder', checklist)
    }

    createChecklist(checklist) {
      return this.http.post<Checklist>(this.baseUri, checklist)
    }
}
