import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDotNetComponent } from './notes-dot-net.component';

describe('NotesDotNetComponent', () => {
  let component: NotesDotNetComponent;
  let fixture: ComponentFixture<NotesDotNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesDotNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDotNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
