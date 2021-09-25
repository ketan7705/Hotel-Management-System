import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereceptionistComponent } from './updatereceptionist.component';

describe('UpdatereceptionistComponent', () => {
  let component: UpdatereceptionistComponent;
  let fixture: ComponentFixture<UpdatereceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereceptionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
