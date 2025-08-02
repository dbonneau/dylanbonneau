import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaenComponent } from './caen.component';

describe('CaenComponent', () => {
  let component: CaenComponent;
  let fixture: ComponentFixture<CaenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
