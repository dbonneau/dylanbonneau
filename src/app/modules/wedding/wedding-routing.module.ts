import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './components/about-me/wedding.component';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule {}
