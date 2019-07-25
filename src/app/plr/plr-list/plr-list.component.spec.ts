import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlrListComponent } from './plr-list.component';

describe('PlrListComponent', () => {
  let component: PlrListComponent;
  let fixture: ComponentFixture<PlrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
