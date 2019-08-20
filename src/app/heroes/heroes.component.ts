import { Component, OnInit } from "@angular/core";
import { HeroService } from "./hero/services/hero.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroSvc: HeroService) {}
  heroList: Observable<any>;

  ngOnInit() {
    this.heroList = this.heroSvc.getHeroes();
  }
}
