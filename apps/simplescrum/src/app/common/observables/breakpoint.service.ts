import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {

  // TODO: Figure out why having this detect Mobile and Tablet Portrait breaks jest
  mobileBreakpoint = this.breakpointObserver
    .observe([
      Breakpoints.TabletLandscape,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
    ])
    .pipe(map(({matches, ...rest}) => !matches));


  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
