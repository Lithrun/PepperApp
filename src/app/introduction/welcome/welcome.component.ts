import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/services/settings.service';
import { SpeechService } from 'src/services/speech.service';
import { PepperService } from 'src/services/pepper.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(private settingsService: SettingsService, private speechService: SpeechService, private pepperService: PepperService) { }

  greetWhenApproachedEvent: any = this.welcome();

  ngOnInit() {
  }

  ngOnDestroy() {
    try {
      this.greetWhenApproachedEvent.unsubscribe(function(callback) {
      });
    } catch (error) {
      
    }
  }
  
  welcome() {
    const self = this;

    self.pepperService.robotUtils.onServices(function(ALAudioPlayer) {
      ALAudioPlayer.playFile("/usr/share/naoqi/sounds/cow.wav");
    });

    return self.pepperService.robotUtils.subscribeToALMemoryEvent("GazeAnalysis/PersonStartsLookingAtRobot", function(value) {
      const name = self.settingsService.getPepperName();
      self.speechService.say(`Hallo, ik ben ${name}. Welkom op de polikliniek! Klik op mijn scherm om te beginnen.`);
    });  
  }

}
