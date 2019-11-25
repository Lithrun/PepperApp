import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TopComponent } from './top/top.component';
import { MemoryComponent } from './memory/memory.component';
import { SoundComponent } from './sound/sound.component';
import { QuizComponent } from './quiz/quiz.component';
import { DanceComponent } from './dance/dance.component';
import { DanceItemComponent } from './dance-item/dance-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SettingsComponent,
    MenuItemComponent,
    TopComponent,
    MemoryComponent,
    SoundComponent,
    QuizComponent,
    DanceComponent,
    DanceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
