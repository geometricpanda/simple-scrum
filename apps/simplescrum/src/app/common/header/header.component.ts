import {Component, forwardRef, Inject} from '@angular/core';
import {AppStateService} from '../../app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor(@Inject(forwardRef(() => AppStateService)) private appStateService: AppStateService) {
  }

  async toggleDrawer() {
    await this.appStateService.drawer.toggle();
  }

}
