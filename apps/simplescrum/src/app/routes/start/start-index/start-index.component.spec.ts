import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StartIndexComponent} from './start-index.component';
import {StartModule} from '../start.module';

describe('StartIndexComponent', () => {
  let component: StartIndexComponent;
  let fixture: ComponentFixture<StartIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [StartModule]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
