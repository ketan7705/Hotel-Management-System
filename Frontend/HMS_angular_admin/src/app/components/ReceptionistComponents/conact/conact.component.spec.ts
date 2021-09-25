import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConactComponent } from './conact.component';

describe('ConactComponent', () => {
  let component: ConactComponent;
  let fixture: ComponentFixture<ConactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
