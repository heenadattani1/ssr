import { NgModule } from '@angular/core';
import { Routes, RouterModule,} from '@angular/router';
import { authRoutes, staticRoutes } from './@core/utils';

const routes: Routes = [

  // {
  //   path: '',
  //   component: RoadComponent
  // },
  {
    path: '',
    loadChildren: () => import('./pages/homev2/homev2.module').then((m) => m.Homev2Module),
  },
  {
    path: authRoutes.main,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: staticRoutes.main,
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
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
