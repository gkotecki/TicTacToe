import { Hero } from "./hero";

export class Player {
  private points: number = 0;
  private hero: Hero = null;

  constructor(_hero: Hero) {
    this.hero = _hero;
  }

  public incrementPoints() {
    this.points++;
  }

  public clearPoints() {
    this.points = 0;
  }

  public getPoints(): number {
    return this.points;
  }
}
