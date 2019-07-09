import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Update } from '../models/update';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Site } from '../models/dictionary';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

baseUri = environment.baseUri + 'update/';
constructor(private http: HttpClient) { }

getSitesByPlatform(platform) {
  return this.http.get<Site[]>(`${environment.baseUri}dictionary/site/${platform}`);
}

startUpdate(update: Update) {
  return this.http.post(this.baseUri, update);
}

getUpdate(id) {
  return this.http.get<Update>(this.baseUri + id);
}

getUpdates() {
  return this.http.get<Update[]>(this.baseUri);
}

getPercentage(id) {
  return this.http.get(this.baseUri + id + '/Progress');
}


}
