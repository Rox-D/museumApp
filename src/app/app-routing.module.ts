import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkGalleryComponent } from './artwork-gallery/artwork-gallery.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';

const routes: Routes = [
{ path: 'gallery', component: ArtworkGalleryComponent },
{ path: 'show-details/:id', component: ArtworkDetailsComponent },
{ path: '', redirectTo: '/gallery', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
