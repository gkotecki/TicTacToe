import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainHeaderComponent } from "./main-header/main-header.component";
import { GameBoardComponent } from './game-board/game-board.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, MainHeaderComponent, GameBoardComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
