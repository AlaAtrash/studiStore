import { Component, OnInit } from '@angular/core';
import { products } from './products.list'

@Component({
  selector: 'studi-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  productsList = products
  displayedColumns: string[] = ['name', 'img', 'description', 'price', 'age', 'ref', 'details'];
  constructor() { }

  cutDescription(description: string) {
    return description.substr(0, 100)
  }

  getProducts() {
    for(let product of this.productsList) {
      product.description= this.cutDescription(product.description)
    }
  }

  ngOnInit(): void {
    //TODO LIST OF PRODUCTS TO RETRIVE FROM NODEJS
    // THIS IS ONLY A MOCK
    this.productsList = products
    this.getProducts()
  }

}
