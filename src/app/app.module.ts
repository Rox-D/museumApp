import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtworkGalleryComponent } from './artwork-gallery/artwork-gallery.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularWebStorageModule } from 'angular-web-storage';
import {ArtworksListService} from "./shared/artworks-list.service";
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ArtworkGalleryComponent,
    ArtworkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularWebStorageModule
  ],

  providers: [ArtworksListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
