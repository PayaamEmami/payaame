import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesProbAndStatsComponent } from './notes-prob-and-stats.component';

describe('NotesProbAndStatsComponent', () => {
  let component: NotesProbAndStatsComponent;
  let fixture: ComponentFixture<NotesProbAndStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesProbAndStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesProbAndStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
