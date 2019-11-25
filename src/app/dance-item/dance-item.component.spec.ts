import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceItemComponent } from './dance-item.component';

describe('DanceItemComponent', () => {
  let component: DanceItemComponent;
  let fixture: ComponentFixture<DanceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
