import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from './menu-item/menu-item.component';
import { SpeechService } from 'src/services/speech.service';
import { SettingsService } from 'src/services/settings.service';
import { PointsService } from 'src/services/points.service';

declare global {
  interface Window { RobotUtilsJs: any; }
}

window.RobotUtilsJs = window.RobotUtilsJs || {};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  items: MenuItem[];
  pepperName: string;
  points: number;
  timerId: any;

  constructor(
    private speechService: SpeechService, 
    private settingsService: SettingsService,
    private pointsService: PointsService
  ) {
      this.speechService = speechService;
      this.settingsService = settingsService;
      this.pepperName = this.settingsService.getPepperName();
      const path = "assets/menu/";
      this.points = this.pointsService.get();
      this.items = [
        {
          name: "Memory", description: "Kan jij onthouden waar alle plaatjes zijn?", image: `${path}/memory.png`, path: "memory", color: "primary"
        },
        {
          name: "Raadsel", description: "Kan jij raden welk dierengeluid ik na doe?", image: `${path}/riddle.png`, path: "riddle", color: "success"
        },
        {
          name: "Quiz", description: "Weet jij het antwoord op mijn vragen?", image: `${path}/quiz.png`, path: "quiz", color: "info"
        },
        {
          name: "Dansen", description: "Wil je samen met mij een dansje doen?", image: `${path}/dance.png`, path: "dance", color: "danger"
        },
        {
          name: "Verhaaltjes", description: "Zal ik je een leuk verhaaltje voorlezen?", image: `${path}/story.png`, path: "story", color: "warning"
        },
        {
          name: "Muziek", description: "Wil jij met mij samen naar muziek luisteren?", image: `${path}/music.png`, path: "music", color: "purple"
        },
      ]
      this.invokeUserInteraction();
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearInterval(this.timerId);
    this.speechService.stopAll();
  }

  invokeUserInteraction() {
    const self = this;
    this.timerId = setInterval(this.recommendMenuItem, 25000, this.items, self);
  }

  recommendMenuItem(items: MenuItem[], self: any) {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const speech = `${randomItem.description} Druk dan op ${randomItem.name}`;
    self.speechService.say(speech);
  }

}
