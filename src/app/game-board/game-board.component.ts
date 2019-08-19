import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.scss"]
})
export class GameBoardComponent implements OnInit {
  cells: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  ticks: string[] = ["", "", "", "", "", "", "", "", ""];
  nextTick: string = "X";

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 9; i++) this.ticks[i] = "";
    console.log(this.ticks);
  }

  cardClick(i: number) {
    if (this.ticks[i] == "") {
      this.ticks[i] = this.nextTick;
      console.log("card " + (i + 1) + " = " + this.nextTick);
      this.nextTick = this.nextTick == "X" ? "O" : "X";
    }
    this.checkForWinner();
  }

  checkForWinner() {}
}
