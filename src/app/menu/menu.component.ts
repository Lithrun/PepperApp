import { Component, OnInit } from '@angular/core';
// import { RobotUtilsJs } from 'src/lib/robotutilsjs.js';
import { MenuItem } from './menu-item/menu-item.component';
import { SpeechService } from 'src/services/speech.service';
import { SettingsService } from 'src/services/settings.service';

declare global {
  interface Window { RobotUtilsJs: any; }
}

window.RobotUtilsJs = window.RobotUtilsJs || {};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  private speechService: SpeechService;
  private settingsService: SettingsService;
  private pepperName: string;

  constructor(speechService: SpeechService, settingsService: SettingsService) {
    this.speechService = speechService;
    this.settingsService = settingsService;
    this.pepperName = this.settingsService.getPepperName();
    this.items = [
      {
        name: "Memory", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png", path: "memory"
      },
      {
        name: "Geluiden", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png", path: "sound"
      },
      {
        name: "Quiz", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png", path: "quiz"
      },
      {
        name: "Dansje", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png", path: "dance"
      },
    ]
  }

  ngOnInit() {
    this.welcome();   
    // console.log("OKAY");
    // console.log(window.RobotUtilsJs);
    // window.RobotUtilsJs.onServices(function(ALLeds, ALTextToSpeech) {
    //   ALLeds.randomEyes(20.0);
    // });
    // let speechService = this.speechService;
    // await this.speechService.setVolume(150, function() {
    //   speechService.getVolume(async function(volume: number) {
    //     console.log(volume);
    //     speechService.say(`Mijn volume is: ${~~volume}`)
    //   });
    // });

  }

  welcome() {
    const name = this.settingsService.getPepperName();
    this.speechService.say(`Hallo, ik ben ${name}. Welkom op de polikliniek!`);
  }

}
