import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowphotoComponent } from './showphoto.component';

describe('ShowphotoComponent', () => {
  let component: ShowphotoComponent;
  let fixture: ComponentFixture<ShowphotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowphotoComponent]
    });
    fixture = TestBed.createComponent(ShowphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
