import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNameComponent } from './event-name.component';

describe('EventNameComponent', () => {
  let component: EventNameComponent;
  let fixture: ComponentFixture<EventNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
