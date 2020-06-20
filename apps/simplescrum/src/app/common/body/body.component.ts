import {AfterViewInit, Component, forwardRef, Inject, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {AppStateService} from '../../app-state.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements AfterViewInit {

  @ViewChild(MatDrawer) drawer: MatDrawer;

  constructor(@Inject(forwardRef(() => AppStateService)) private appState: AppStateService) {
  }

  ngAfterViewInit(): void {
    this.appState.drawer = this.drawer;
  }

}
