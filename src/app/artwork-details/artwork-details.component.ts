import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router'; 
import { ArtworksListService } from '../shared/artworks-list.service';
import { Artwork } from '../shared/artwork.model';
import { Observable } from "rxjs"
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit, OnDestroy {

  sub:  any;
  selectedArtwork$: Observable<Artwork>;
  constructor(private router: Router, private activated: ActivatedRoute, private artworkService: ArtworksListService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.sub = this.activated.params.subscribe(params => {
      console.log(params.id);
      this.selectedArtwork$ = this.artworkService.showDetails(params.id);
    }
    );
  }

  onBack() {
    console.log('Go back to artwork gallery');
    this.router.navigate(['gallery']);
}
markAsFavorite(a: Artwork) {
  if (this.localStorage.get(a.objectNumber) != null) {
    this.localStorage.remove(a.objectNumber);
  }  else {
    this.localStorage.set(a.objectNumber, a.title);
  }
}

isMarked(a: Artwork) {
  return this.localStorage.get(a.objectNumber) != null;
}

ngOnDestroy() {
  this.sub.unsubscribe();
}

  }
  
