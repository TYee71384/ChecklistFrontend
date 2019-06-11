import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatRadioModule,
  MatDatepickerModule,
  MatInputModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    FlexLayoutModule,
    DragDropModule
  ],
  declarations: []
})
export class MaterialModule {}
