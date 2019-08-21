import { Component, OnInit, Input } from "@angular/core";
import { HeroService } from "../hero/services/hero.service";
import { Observable } from "rxjs";
import { Hero } from "src/classes/hero";
import { GameBoardComponent } from "src/app/game-board/game-board.component";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements OnInit {
  heroList: Observable<any>;

  constructor(private heroSvc: HeroService) {}

  ngOnInit() {
    this.onSearch("iron");
  }

  onSearch(value: string) {
    console.log("submitting " + value);
    this.heroList = this.heroSvc.getHeroes(value, 10);
  }

  setHero(_hero: Hero) {}
}
