import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_DEMO, ROUTING_GALERIES } from './shared/consts/consts';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: ROUTING_DEMO,
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
    },
    {
        path: ROUTING_GALERIES,
        loadChildren: () => import('./modules/galeries/galeries.module').then(m => m.GaleriesModule)
    }
    // {
    //     path: ROUTING_DEMO,
    //     loadChildren: () => import('./modules/demo/demo.module')
    //         .then(m => m.DemoModule)
    // },
    // {
    //   path: '**',
    //   component: ErrorComponent,
    //   data: { type: 404, message: 'Page not found' }
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
