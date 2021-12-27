import { Component, OnInit } from '@angular/core';
import { products } from './products.list'

@Component({
  selector: 'studi-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  productsList = products
  displayedColumns: string[] = ['name', 'img', 'description', 'price', 'age', 'ref'];
  constructor() { }

  ngOnInit(): void {
  }

}
