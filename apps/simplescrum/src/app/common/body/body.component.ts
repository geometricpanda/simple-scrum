import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {AppStateService} from '../../app-state.service';
import {BreakpointService} from '../observables/breakpoint.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements AfterViewInit {

  @ViewChild(MatDrawer) drawer: MatDrawer;
  mode: 'push' | 'side' = 'push';

  constructor(private appState: AppStateService,
              private breakpointService: BreakpointService) {
  }

  async calculateDrawerLogic(isMobile) {
    if (isMobile) {
      this.mode = 'push';
      await this.drawer.close();
    } else {
      this.mode = 'side';
      await this.drawer.open('program');
    }

  }

  ngAfterViewInit(): void {
    this.appState.drawer = this.drawer;

    this.breakpointService
      .mobileBreakpoint
      .subscribe(isMobile => this.calculateDrawerLogic(isMobile));
  }

}
