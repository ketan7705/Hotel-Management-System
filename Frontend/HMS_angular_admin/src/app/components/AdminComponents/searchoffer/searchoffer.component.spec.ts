import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchofferComponent } from './searchoffer.component';

describe('SearchofferComponent', () => {
  let component: SearchofferComponent;
  let fixture: ComponentFixture<SearchofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
