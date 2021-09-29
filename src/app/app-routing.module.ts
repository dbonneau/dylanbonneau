import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './modules/home/components/body/body.component';
import { ROUTING_DEMO } from './shared/consts/consts';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: ROUTING_DEMO,
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
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
