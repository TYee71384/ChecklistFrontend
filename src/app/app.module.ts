//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//3rd party imports
import { EditorModule } from '@tinymce/tinymce-angular';
import { SortablejsModule } from 'ngx-sortablejs';

//my modules
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



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    StepEditorComponent,
    ChecklistDetailsComponent,
    ChecklistStepDetailsComponent,
    BuilderComponent,
    ChecklistHistoryComponent
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
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [ChecklistService],
  bootstrap: [AppComponent],
  entryComponents: [StepEditorComponent, BuilderComponent]
})
export class AppModule { }
