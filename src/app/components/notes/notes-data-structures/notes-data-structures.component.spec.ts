import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDataStructuresComponent } from './notes-data-structures.component';

describe('NotesDataStructuresComponent', () => {
  let component: NotesDataStructuresComponent;
  let fixture: ComponentFixture<NotesDataStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesDataStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDataStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
