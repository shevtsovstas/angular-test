import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfsProductsComponent } from './afs-products.component';

describe('AfsProductsComponent', () => {
  let component: AfsProductsComponent;
  let fixture: ComponentFixture<AfsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
