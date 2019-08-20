import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  //https://gateway.marvel.com/v1/public/characters?nameStartsWith=spi&limit=30&ts=1&apikey=89221094fd1961b61c00bf02088b49c0&hash=eb81393664c17bfe88d1986651cbc0a2
  APIKEY = "89221094fd1961b61c00bf02088b49c0";
  HASH = "eb81393664c17bfe88d1986651cbc0a2";

  searchTerm: string = "spi";

  arguments = `nameStartsWith=${this.searchTerm}&limit=30&`;

  heroesUrl = `https://gateway.marvel.com:443/v1/public/characters?${this.arguments}ts=1&apikey=${
    this.APIKEY
  }&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<any> {
    return this.http.get<any>(this.heroesUrl).pipe(map((data: any) => data.data.results));
  }
}
