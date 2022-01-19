import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { products } from './products.list'


describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let spy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cut description', () => {
    const testDescription= 'Les Aventuriers du Rail vous invite à bord d’une aventure ferroviaire dans laquelle vous collectez des wagons pour prendre le contrôle de chemins de fer reliant les différentes villes des États-Unis d’Amérique.'
    const modifiedDescription = component.cutDescription(testDescription)
    expect(modifiedDescription.length).toBeLessThanOrEqual(100)
  });

  it('should get get products', () => {
    spy = spyOn(component, 'cutDescription').and.returnValue('atrash')
    component.getProducts()
    expect(component.cutDescription).toHaveBeenCalled()
  });

});
