import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {HeaderComponent} from './header.component';
import {HeaderModule} from './header.module';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AppStateService} from '../../app-state.service';

describe('HeaderComponent', () => {

  const appStateServiceMock = {
    drawer: {
      open: jest.fn(),
    },
  };

  const selectors = {
    openDrawerButton: By.css('[data-test="open-drawer-button"]'),
  };

  @Component({
    selector: 'app-header-spec',
    template: `
      <app-header></app-header>
    `,
  })
  class HeaderComponentSpec {
  }

  let component: HeaderComponentSpec;
  let fixture: ComponentFixture<HeaderComponentSpec>;
  let appStateService: AppStateService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentSpec],
      imports: [HeaderModule, NoopAnimationsModule],
    });
    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentSpec);
    component = fixture.componentInstance;
    appStateService = TestBed.inject(AppStateService);
    fixture.detectChanges();
  });

  it('should match the snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('Open Drawer button', () => {
    it('should call the toggle method of the drawer on click', () => {
      appStateService.drawer = {toggle: jest.fn()} as any;

      const $elem = fixture.debugElement.query(selectors.openDrawerButton);
      const $event = new MouseEvent('click');
      $elem.triggerEventHandler('click', $event);

      expect(appStateService.drawer.toggle).toHaveBeenCalled();
    });
  });

});
