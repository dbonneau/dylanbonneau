import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccessComponent } from './customer-access.component';

describe('CustomerAccessComponent', () => {
  let component: CustomerAccessComponent;
  let fixture: ComponentFixture<CustomerAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
