import { Hero } from "./hero";

export class Player {
  private points: number = 0;
  private hero: Hero = null;
  public tickType: string = "";

  constructor(_hero: Hero, _tickType: string) {
    this.hero = _hero;
    this.tickType = _tickType;
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
