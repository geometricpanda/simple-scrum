import {Component, forwardRef, Inject} from '@angular/core';
import {AppStateService} from '../../app-state.service';
import {BreakpointService} from '../observables/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  // TODO: Figure out why injected dependencies need to be a forwardRef or jest dies
  constructor(@Inject(forwardRef(() => AppStateService)) private appStateService: AppStateService,
              @Inject(forwardRef(() => BreakpointService)) public breakpointService: BreakpointService) {
  }

  async toggleDrawer() {
    await this.appStateService.drawer.toggle();
  }

}
