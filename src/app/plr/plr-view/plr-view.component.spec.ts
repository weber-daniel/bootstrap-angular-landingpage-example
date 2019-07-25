import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlrViewComponent } from './plr-view.component';

describe('PlrViewComponent', () => {
  let component: PlrViewComponent;
  let fixture: ComponentFixture<PlrViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlrViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
