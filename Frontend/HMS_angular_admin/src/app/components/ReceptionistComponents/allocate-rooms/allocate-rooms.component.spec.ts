import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateRoomsComponent } from './allocate-rooms.component';

describe('AllocateRoomsComponent', () => {
  let component: AllocateRoomsComponent;
  let fixture: ComponentFixture<AllocateRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
