import { Component, OnInit } from '@angular/core';
import {ProductsService } from './product.service'

@Component({
  selector: 'studi-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList= []
  displayedColumns: string[] = ['name', 'img', 'description', 'price', 'age', 'ref', 'details'];
  constructor(private readonly productsService: ProductsService) { }

  cutDescription(description: string) {
    return description.substr(0, 100)
  }

  /*
  getProducts() {
    for(let product of this.productsList) {
      product.description= this.cutDescription(product.description)
    }
  }*/

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (products) => this.productsList = products)
  }

}
