import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const index: Route = {
  path: '',
  loadChildren: () => import('./routes/start/start.module').then(mod => mod.StartModule),
};

const routes: Routes = [
  index,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
