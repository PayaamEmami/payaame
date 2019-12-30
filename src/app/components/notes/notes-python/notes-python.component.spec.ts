import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPythonComponent } from './notes-python.component';

describe('NotesPythonComponent', () => {
  let component: NotesPythonComponent;
  let fixture: ComponentFixture<NotesPythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesPythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
