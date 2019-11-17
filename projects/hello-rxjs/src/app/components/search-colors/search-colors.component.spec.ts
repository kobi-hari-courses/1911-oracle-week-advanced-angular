import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchColorsComponent } from './search-colors.component';

describe('SearchColorsComponent', () => {
  let component: SearchColorsComponent;
  let fixture: ComponentFixture<SearchColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
