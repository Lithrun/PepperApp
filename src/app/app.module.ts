import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { TopComponent } from './top/top.component';
import { RiddleComponent } from './riddle/riddle.component';
import { QuizComponent } from './quiz/quiz.component';
import { DanceComponent } from './dance/dance.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SettingsComponent,
    MenuItemComponent,
    RiddleComponent,
    QuizComponent,
    DanceComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TopComponent]
})
export class AppModule { }
