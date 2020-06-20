import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartRoutingModule} from './start-routing.module';
import {StartIndexComponent} from './start-index/start-index.component';
import {MatButtonModule, MatCardModule} from '@angular/material';


@NgModule({
  declarations: [StartIndexComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class StartModule { }
