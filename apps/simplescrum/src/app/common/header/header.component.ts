import {Component} from '@angular/core';
import {AppStateService} from '../../app-state.service';
import {BreakpointService} from '../observables/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor(private appStateService: AppStateService,
              public breakpointService: BreakpointService) {
  }

  async toggleDrawer() {
    await this.appStateService.drawer.toggle();
  }

}
