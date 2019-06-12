import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './checklists/search/search.component';
import { ChecklistDetailsComponent } from './checklists/checklist-details/checklist-details.component';
import { BuilderComponent } from './checklists/builder/builder.component';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [
  {path: 'checklists', component: SearchComponent},
  {path: 'checklists/new', component: BuilderComponent, canActivate: [AuthGuard]},
  {path: 'checklists/:id/:ver', component: ChecklistDetailsComponent},
  {path: '**', redirectTo: 'checklists', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
