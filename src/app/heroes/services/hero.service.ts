import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Hero } from "src/classes/hero";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  //https://gateway.marvel.com/v1/public/characters?nameStartsWith=spi&limit=30&ts=1&apikey=89221094fd1961b61c00bf02088b49c0&hash=eb81393664c17bfe88d1986651cbc0a2
  APIKEY = "89221094fd1961b61c00bf02088b49c0";
  HASH = "eb81393664c17bfe88d1986651cbc0a2";
  URL_START = "https://gateway.marvel.com:443/v1/public/characters?";
  URL_END = `ts=1&apikey=${this.APIKEY}&hash=${this.HASH}`;

  searchTerm: string = "spi";

  constructor(private http: HttpClient) {}

  getHeroes(search: string, limit: number): Observable<any> {
    let args = `nameStartsWith=${search}&limit=${limit}&`;
    let heroesUrl = this.URL_START + args + this.URL_END;
    return this.http.get<any>(heroesUrl).pipe(map((data: any) => data.data.results));
  }

  player1Hero: Hero = new Hero();
  player2Hero: Hero = new Hero();
}
