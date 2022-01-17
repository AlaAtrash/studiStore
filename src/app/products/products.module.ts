import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class ProductsModule { }
