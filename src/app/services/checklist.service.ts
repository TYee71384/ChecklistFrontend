import { Injectable } from '@angular/core';
import { Checklist } from '../models/checklist';
import { LookupDictionary } from '../models/dictionary';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  baseUri = environment.baseUri + 'checklist';
  stepUri = environment.baseUri + 'checklistSteps/';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getChecklists() {
    return this.http.get<Checklist[]>(this.baseUri);
  }

  approveChecklist(id,ver) {
    return this.http.post(`${this.baseUri}/${id}/${ver}/approve`, {});
  }

  createDraft(checklist: Checklist) {
    return this.http.post(`${this.baseUri}/${checklist.idchecklist}/${checklist.version}/draft`, checklist);

  }

  getChecklist(id, ver) {
    return this.http.get<Checklist>(`${this.baseUri}/${id}/${ver}`);
  }

  getDictionary() {
    return this.http.get<LookupDictionary>(environment.baseUri + 'dictionary');
  }
  editChecklist(checklist, id, ver) {
    return this.http.put(`${this.baseUri}/${id}/${ver}`, checklist);
  }

  editStep(step) {
    return this.http.put(this.stepUri + step.idstep, step);
  }

  deleteStep(step) {
    return this.http.post(this.stepUri + step.idstep, step);
  }

  addStep(step) {
    return this.http.post(this.stepUri, step);
  } 

  reorderStep(checklist) {
    return this.http.put(this.stepUri + 'reorder', checklist);
  }

  createChecklist(checklist) {
    return this.http.post<Checklist>(this.baseUri, checklist);
  }

  checkForDraft(id) {
    return this.http.get(`${this.baseUri}/${id}/draftExist`);
  }

  deleteChecklist(id, ver) {
    return this.http.delete(`${this.baseUri}/${id}/${ver}`);
  }

  archiveChecklist(id, ver) {
    return this.http.post(`${this.baseUri}/${id}/${ver}/archive`, {});
  }

  isAuth() {
    this.http
      .get(environment.baseUri + 'dictionary/authorized')
      .subscribe((x: any) => {
        this.cookieService.set('Auth', x.isAuth);
        this.cookieService.set('User', x.user);
      });
  }
}
