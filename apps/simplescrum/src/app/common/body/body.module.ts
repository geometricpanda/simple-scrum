import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from './body.component';
import {MatSidenavModule} from '@angular/material';


@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  exports: [
    BodyComponent,
  ],
})
export class BodyModule {
}
