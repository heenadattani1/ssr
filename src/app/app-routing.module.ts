import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { staticRoutes } from './@core/utils';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

const routes: Routes = [
/*   {
    path: '',
    loadChildren: () => import('./pages/homev2/homev2.module').then((m) => m.Homev2Module),
  },
  {
    path: authRoutes.main,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  }, */
  {
    path:'',
    component: EventDetailComponent
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
 /*  {
    path: staticRoutes.main,
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  }, */
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: staticRoutes.main },
];

// const config: ExtraOptions = {
//     useHash: true,
//     scrollPositionRestoration: 'enabled',
//     preloadingStrategy: PreloadAllModules,
//     relativeLinkResolution: 'legacy'
// }{
//     useHash: false,
//     scrollPositionRestoration: 'enabled',
//     preloadingStrategy: PreloadAllModules,
//     relativeLinkResolution: 'legacy'
// };

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
