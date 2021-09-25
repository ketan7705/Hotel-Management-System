import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoffersComponent } from './viewoffers.component';

describe('ViewoffersComponent', () => {
  let component: ViewoffersComponent;
  let fixture: ComponentFixture<ViewoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
