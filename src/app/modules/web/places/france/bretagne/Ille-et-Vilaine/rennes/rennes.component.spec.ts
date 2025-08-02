import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RennesComponent } from './rennes.component';

describe('RennesComponent', () => {
  let component: RennesComponent;
  let fixture: ComponentFixture<RennesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RennesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RennesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
