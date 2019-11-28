import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { RiddleComponent } from './riddle/riddle.component';
import { QuizComponent } from './quiz/quiz.component';
import { DanceComponent } from './dance/dance.component';
import { SharedModule } from './shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroductionModule } from './introduction/introduction.module';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MenuComponent,
    MenuItemComponent,
    RiddleComponent,
    QuizComponent,
    DanceComponent    
  ],
  imports: [
    SharedModule,
    IntroductionModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
