import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAndDropComponent } from './pick-and-drop.component';

describe('PickAndDropComponent', () => {
  let component: PickAndDropComponent;
  let fixture: ComponentFixture<PickAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAndDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
