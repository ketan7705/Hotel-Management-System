import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewroomsComponent } from './viewrooms.component';

describe('ViewroomsComponent', () => {
  let component: ViewroomsComponent;
  let fixture: ComponentFixture<ViewroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
