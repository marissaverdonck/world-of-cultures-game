import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerelddeelComponent } from './werelddeel.component';

describe('WerelddeelComponent', () => {
  let component: WerelddeelComponent;
  let fixture: ComponentFixture<WerelddeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerelddeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerelddeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
