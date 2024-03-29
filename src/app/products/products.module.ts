import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { DecimalPipePipe } from './decimal-pipe.pipe';
import { ToCommaPipe } from './to-comma.pipe';




@NgModule({
  declarations: [
    ProductsListComponent,
    DecimalPipePipe,
    ToCommaPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
