import { Component, OnInit } from '@angular/core';
// import { RobotUtilsJs } from 'src/lib/robotutilsjs.js';
import { MenuItem } from '../menu-item/menu-item.component';
import { SpeechService } from 'src/services/speech.service';

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
  speechService: SpeechService;

  constructor(speechService: SpeechService) {
    this.speechService = speechService;
    this.items = [
      {
        name: "a", description: "b", gifUrl: "c", path: "d"
      },
    ]
  }

  async ngOnInit() {
    console.log("OKAY");
    console.log(window.RobotUtilsJs);
    // alert(window.RobotUtilsJs.robotIp);
    window.RobotUtilsJs.onServices(function(ALLeds, ALTextToSpeech) {
      ALLeds.randomEyes(20.0);
    });
    let speechService = this.speechService;
    await this.speechService.setVolume(75, function() {
      speechService.getVolume(async function(volume: number) {
        console.log(volume);
        speechService.say(`Mijn volume is: ${~~volume}`)
      });
    });

  }

  ALTextToSpeech() {
    window.RobotUtilsJs.onServices(function(ALTextToSpeech) {
      // ALTextToSpeech.say("D");
      // ALTextToSpeech.say(":");
    });
  }

}
