import { Component } from '@angular/core';
import { Artwork } from '../shared/artwork.model';
import { ArtworksListService } from '../shared/artworks-list.service';
import { Observable } from "rxjs"
import {Router} from '@angular/router'

@Component({
  selector: 'app-artwork-gallery',
  templateUrl: './artwork-gallery.component.html',
  styleUrls: ['./artwork-gallery.component.css']
})
export class ArtworkGalleryComponent {
  artworks$: Observable<Artwork[]>;
  constructor(private router: Router, private artworksService: ArtworksListService) {}

  onSearch(value) {
    console.log('Searching for artist: ' + value);
    this.artworks$ = this.artworksService.searchArtworks(value);
  }
  showDetails(id) {
    console.log('Searching for details on:' + id);
    this.router.navigate(['/show-details', id]);
  }
}
