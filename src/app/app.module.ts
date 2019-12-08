import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { QuizComponent } from './quiz/quiz.component';
import { DanceComponent } from './dance/dance.component';
import { SharedModule } from './shared/shared.module';
import { IntroductionModule } from './introduction/introduction.module';
import { RiddleModule } from './riddle/riddle.module';
import { StoryModule } from './story/story.module';
import { MusicModule } from './music/music.module';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MenuComponent,
    MenuItemComponent,
    QuizComponent,
    DanceComponent,
  ],
  imports: [
    SharedModule,
    IntroductionModule,
    MusicModule,
    RiddleModule,
    StoryModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
