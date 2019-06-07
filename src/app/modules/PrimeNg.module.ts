import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService, MessageService} from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TableModule, PaginatorModule, DynamicDialogModule, AccordionModule],
  declarations: [],
  providers: [DialogService, MessageService]
})
export class PrimeNgModule { }
