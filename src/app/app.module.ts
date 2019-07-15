// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// 3rd party imports
import { EditorModule } from '@tinymce/tinymce-angular';
import { SortablejsModule } from 'ngx-sortablejs';
import { CookieService } from 'ngx-cookie-service';

// my modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './modules/PrimeNg.module';
import { SearchComponent } from './checklists/search/search.component';
import { ChecklistService } from './services/checklist.service';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './checklists/header/header.component';
import { StepEditorComponent } from './checklists/step-editor/step-editor.component';
import { ChecklistDetailsComponent } from './checklists/checklist-details/checklist-details.component';
import { ChecklistStepDetailsComponent } from './checklists/checklist-step-details/checklist-step-details.component';
import { BuilderComponent } from './checklists/builder/builder.component';
import { ChecklistHistoryComponent } from './checklists/checklist-history/checklist-history.component';
import { AuthGuard } from './guards/AuthGuard';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ChecklistEditComponent } from './checklists/checklist-edit/checklist-edit.component';
import { EditDescriptionComponent } from './checklists/edit-description/edit-description.component';
import { PageIdentificationInfoComponent } from './shared/page-identification-info/page-identification-info.component';
import { UpdateDetailsComponent } from './updates/update-details/update-details.component';
import { UpdateStarterComponent } from './updates/update-starter/update-starter.component';
import { UpdateService } from './services/update.service';
import { UpdateStepEditComponent } from './updates/update-step-edit/update-step-edit.component';
import { UpdateHeaderComponent } from './updates/update-header/update-header.component';
import { UpdateInfoComponent } from './updates/update-info/update-info.component';
import { EditUpdateInfoComponent } from './updates/edit-update-info/edit-update-info.component';
import { UpdateSearchComponent } from './updates/update-search/update-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    StepEditorComponent,
    ChecklistDetailsComponent,
    ChecklistStepDetailsComponent,
    BuilderComponent,
    ChecklistHistoryComponent,
    SpinnerComponent,
    ChecklistEditComponent,
    EditDescriptionComponent,
    PageIdentificationInfoComponent,
    UpdateDetailsComponent,
    UpdateStarterComponent,
    UpdateStepEditComponent,
    UpdateHeaderComponent,
    UpdateInfoComponent,
    EditUpdateInfoComponent,
    UpdateSearchComponent,

      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    EditorModule,
    FormsModule,
    MaterialModule,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  providers: [ChecklistService, CookieService, AuthGuard, UpdateService],
  bootstrap: [AppComponent],
  entryComponents: [
    StepEditorComponent,
    BuilderComponent,
    EditUpdateInfoComponent,
    EditDescriptionComponent
  ]
})
export class AppModule {}
