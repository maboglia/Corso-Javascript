import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenteComponent } from './studente.component';

describe('StudenteComponent', () => {
  let component: StudenteComponent;
  let fixture: ComponentFixture<StudenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
