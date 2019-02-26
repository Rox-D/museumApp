import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Artwork } from './artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ArtworksListService {
  key = 'xW30nU1N';
  searchUrl = 'https://www.rijksmuseum.nl/api/en/collection?key=xW30nU1N&format=json&imgonly=True&culture=en&';
  detailsUrl = 'https://www.rijksmuseum.nl/api/en/collection/';
  constructor(private http: HttpClient) { }

  searchArtworks(keyword: string): Observable<any[]> {
    console.log(this.searchUrl + `q=${keyword}`);
    return this.http.get(this.searchUrl + `q=${keyword}`).pipe(
        map((res: any) => res.artObjects)
    );
  }
  showDetails(id) {
    console.log(this.detailsUrl + `${id}` + '?key=xW30nU1N&format=json');
    return this.http.get(this.detailsUrl + `${id}` + '?key=xW30nU1N&format=json').pipe(map((res: any) => res.artObject));
  }
}
