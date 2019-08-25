import { Component, OnInit, Input } from "@angular/core";
import { HeroService } from "../services/hero.service";
import { Observable } from "rxjs";
import { Hero } from "src/classes/hero";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements OnInit {
  @Input() playerIndex: number;

  heroList: Observable<any>;

  constructor(private heroSvc: HeroService) {}

  ngOnInit() {}

  onSearch(value: string) {
    console.log("submitting " + value);
    this.heroList = this.heroSvc.getHeroes(value, 15);
  }

  setHero(_playerNum: number, _hero: Hero) {
    if (_playerNum == 1) {
      this.heroSvc.player1Hero = _hero;
      this.heroList = null;
    } else if (_playerNum == 2) {
      this.heroSvc.player2Hero = _hero;
      this.heroList = null;
    } else console.log("playerNum can only be 1 or 2");
  }
}
