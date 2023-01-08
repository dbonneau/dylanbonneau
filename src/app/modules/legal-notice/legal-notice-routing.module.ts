import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

const routes: Routes = [
    {
        path: '',
        component: LegalNoticeComponent,
        data: {
            title: 'Mentions légales - Dylan Bonneau - Photographe de mariage',
            description: ''
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LegalNoticeRoutingModule { }
