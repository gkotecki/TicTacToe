import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainHeaderComponent } from "./main-header/main-header.component";
import { GameBoardComponent } from "./game-board/game-board.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchBoxComponent } from './heroes/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GameBoardComponent,
    FooterComponent,
    HeroComponent,
    HeroesComponent,
    SearchBoxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
