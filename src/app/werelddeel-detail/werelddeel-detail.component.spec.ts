// voeg modules en componenten toe
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WerelddeelDetailComponent } from './werelddeel-detail.component';

describe('WerelddeelDetailComponent', () => {
  let component: WerelddeelDetailComponent;
  let fixture: ComponentFixture<WerelddeelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerelddeelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerelddeelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
