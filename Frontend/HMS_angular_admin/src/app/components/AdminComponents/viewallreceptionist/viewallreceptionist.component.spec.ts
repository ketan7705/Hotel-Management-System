import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallreceptionistComponent } from './viewallreceptionist.component';

describe('ViewallreceptionistComponent', () => {
  let component: ViewallreceptionistComponent;
  let fixture: ComponentFixture<ViewallreceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallreceptionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
