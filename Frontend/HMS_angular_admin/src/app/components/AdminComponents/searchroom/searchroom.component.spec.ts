import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchroomComponent } from './searchroom.component';

describe('SearchroomComponent', () => {
  let component: SearchroomComponent;
  let fixture: ComponentFixture<SearchroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
