import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {StartIndexComponent} from './start-index/start-index.component';

const index: Route = {
  path: '',
  pathMatch: 'full',
  component: StartIndexComponent,
};

const routes: Routes = [
  index,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {
}
