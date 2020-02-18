import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprightmenuComponent } from './apprightmenu.component';

describe('ApprightmenuComponent', () => {
  let component: ApprightmenuComponent;
  let fixture: ComponentFixture<ApprightmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprightmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprightmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
