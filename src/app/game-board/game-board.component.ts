import { Component, OnInit } from "@angular/core";
import { Hero } from "../../classes/hero";
import { Player } from "../../classes/player";
import { BrowserStack } from "protractor/built/driverProviders";
import { HeroService } from "../heroes/hero/services/hero.service";
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.scss"]
})
export class GameBoardComponent implements OnInit {
  conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  cells: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  ticks: string[] = ["", "", "", "", "", "", "", "", ""];
  nextTick: string = "X";
  winner: string = "";

  heroTest: Hero = new Hero();
  player1: Player = new Player(this.heroSvc.player1Hero, "X");
  player2: Player = new Player(this.heroSvc.player2Hero, "O");

  constructor(private heroSvc: HeroService) {}

  ngOnInit() {
    // clear board on initialize
    for (let i = 0; i < 9; i++) this.ticks[i] = "";
    console.log(this.ticks);
  }

  cardClick(i: number) {
    // logic for user input
    if (this.ticks[i] == "" && this.winner == "") {
      console.log(`ticks[${i}] = ${this.ticks[i]} && this.winner = ${this.winner}`);

      this.ticks[i] = this.nextTick;
      this.nextTick = this.nextTick == "X" ? "O" : "X";

      this.checkForWinner();

      //console.log("hero1 name = " + this.heroSvc.player1Hero.name);
    }
  }

  checkForWinner() {
    // check for victory conditions
    for (let condition of this.conditions)
      if (
        this.ticks[condition[0]] != "" &&
        this.ticks[condition[0]] == this.ticks[condition[1]] &&
        this.ticks[condition[1]] == this.ticks[condition[2]]
      ) {
        this.winner = this.nextTick == "X" ? "O" : "X";
        if (this.player1.tickType == this.winner) this.player1.incrementPoints();
        else this.player2.incrementPoints();
        return;
      }

    // check if board is full
    for (const tick of this.ticks)
      if (tick == "") {
        return;
      }

    // if the execution reaches here, its a draw
    this.winner = "Draw";
  }

  replayGame() {
    for (let i = 0; i < 9; i++) this.ticks[i] = "";
    this.winner = "";
    this.player1.tickType = this.player1.tickType == "X" ? "O" : "X";
    this.player2.tickType = this.player2.tickType == "X" ? "O" : "X";
    this.nextTick = "X";
  }
}
