import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BodyComponent} from './body.component';
import {BodyModule} from './body.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {AppStateService} from '../../app-state.service';

describe('BodyComponent', () => {



  @Component({
    selector: 'app-body-spec',
    template: `
      <app-body></app-body>
    `,
  })
  class BodyComponentSpec {
  }


  let component: BodyComponentSpec;
  let fixture: ComponentFixture<BodyComponentSpec>;
  let appStateService: AppStateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BodyComponentSpec,
      ],
      imports: [
        BodyModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponentSpec);
    component = fixture.componentInstance;
    appStateService = TestBed.inject(AppStateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register the MatDrawer to the appStateService', () => {
    expect(appStateService.drawer).not.toBeUndefined();
  });
});
