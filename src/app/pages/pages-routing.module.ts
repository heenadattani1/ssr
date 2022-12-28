import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { eventDetailRoutes } from '../@core/utils';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    /*   {
        path: virtualChallengeRoutes.main,
        loadChildren: () => import('./virtual-challenge/virtual-challenge.module').then((m) => m.VirtualChallengeModule),
      }, */
      {
        path: eventDetailRoutes.main,
        loadChildren: () => import('./event-detail/event-detail.module').then((m) => m.EventDetailModule),
      },
   /*    {
        path: MapRoute.map,
        loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
      },
      {
        path: TeamCenterRoutes.main,
        canActivate: [AuthenticationGuard],
        loadChildren: () => import('./team-center/team-center.module').then((m) => m.TeamCenterModule),
      },
      {
        path: StaticPageRoutes.main,
        loadChildren: () => import('./static-pages/static-pages.module').then((m) => m.StaticPagesModule),
      },
      {
        path: HomeV2Route.main,
        loadChildren: () => import('./homev2/homev2.module').then((m) => m.Homev2Module),
      },
      {
        path: StaticPageRoutes.welcome,
        loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
      }, */
     /*  {
        path: staticRoutes.pageNotFound,
        component: PageNotFoundComponent,
        data: {
          title: 'Ragnar Not Found' ,
          description: 'Not able to find the content you are looking for',
          keywords:
            'race calendar, running events, overnight relay race, find a race, run a race, 10k, half marathon, Ragnar Relay, Ragnar Trail',
        },
      }, */
     /*  {
        path: '',
        redirectTo: StaticPageRoutes.main,
        pathMatch: 'full',
      }, */
      { path: '', redirectTo: '/event-detail/trail/appalachians_wv#overview', pathMatch: 'full' },
      { path: '**', redirectTo:'/event-detail/trail/appalachians_wv#overview'},
      /* {
        path: '**',
        redirectTo: staticRoutes.pageNotFound,
      }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
