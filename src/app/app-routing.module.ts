import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './checklists/search/search.component';
import { ChecklistDetailsComponent } from './checklists/checklist-details/checklist-details.component';
import { BuilderComponent } from './checklists/builder/builder.component';
import { AuthGuard } from './guards/AuthGuard';
import { ChecklistEditComponent } from './checklists/checklist-edit/checklist-edit.component';

const routes: Routes = [
  { path: 'checklists', component: SearchComponent },
  { path: 'checklists/new', component: BuilderComponent },
  { path: 'checklists/details/:id/:ver', component: ChecklistDetailsComponent },
  {
    path: 'checklists/edit/:id/:ver',
    component: ChecklistEditComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: 'checklists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
