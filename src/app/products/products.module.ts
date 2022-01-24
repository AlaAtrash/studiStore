import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
