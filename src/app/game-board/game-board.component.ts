import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.scss"]
})
export class GameBoardComponent implements OnInit {
  conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  cells: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  ticks: string[] = ["", "", "", "", "", "", "", "", ""];
  nextTick: string = "X";
  winner: string = "";

  constructor() {}

  ngOnInit() {
    // clear board on initialize
    for (let i = 0; i < 9; i++) this.ticks[i] = "";
    console.log(this.ticks);
  }

  cardClick(i: number) {
    // logic for user input
    if (this.ticks[i] == "" && this.winner == "") {
      this.ticks[i] = this.nextTick;
      this.nextTick = this.nextTick == "X" ? "O" : "X";
    }
    this.checkForWinner();
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

  // end
}
