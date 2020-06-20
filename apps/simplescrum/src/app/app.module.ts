import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderModule} from './common/header/header.module';
import {BodyModule} from './common/body/body.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    BodyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
