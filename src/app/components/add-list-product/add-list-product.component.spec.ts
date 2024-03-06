import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListProductComponent } from './add-list-product.component';

describe('AddListProductComponent', () => {
  let component: AddListProductComponent;
  let fixture: ComponentFixture<AddListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddListProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
