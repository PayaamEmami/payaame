import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCSharpComponent } from './notes-c-sharp.component';

describe('NotesCSharpComponent', () => {
  let component: NotesCSharpComponent;
  let fixture: ComponentFixture<NotesCSharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesCSharpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesCSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
