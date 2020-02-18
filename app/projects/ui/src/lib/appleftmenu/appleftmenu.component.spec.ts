import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleftmenuComponent } from './appleftmenu.component';

describe('AppleftmenuComponent', () => {
  let component: AppleftmenuComponent;
  let fixture: ComponentFixture<AppleftmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleftmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleftmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
