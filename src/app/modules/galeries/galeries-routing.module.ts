import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriesComponent } from './components/galeries.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: GaleriesComponent
  },
  {
    path: ':name',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriesRoutingModule {}
