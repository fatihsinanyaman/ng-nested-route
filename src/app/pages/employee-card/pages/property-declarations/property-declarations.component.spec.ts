import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDeclarationsComponent } from './property-declarations.component';

describe('PropertyDeclarationsComponent', () => {
  let component: PropertyDeclarationsComponent;
  let fixture: ComponentFixture<PropertyDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
