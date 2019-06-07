import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './checklists/search/search.component';
import { ChecklistDetailsComponent } from './checklists/checklist-details/checklist-details.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'checklists/:id/:ver', component: ChecklistDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
