import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemComponent } from './taskitem.component';

describe('TaskitemComponent', () => {
  let component: TaskitemComponent;
  let fixture: ComponentFixture<TaskitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskitemComponent]
    });
    fixture = TestBed.createComponent(TaskitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
