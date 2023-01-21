import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
        title: 'Me contacter - Dylan Bonneau - Photographe de mariage',
        description: 'Et si on faisait connaissance ? J\'ai hâte de vous découvrir. Parlez-moi de vous, de votre mariage, de vos envies.'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
