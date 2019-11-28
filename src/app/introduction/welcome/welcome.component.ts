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

  constructor(private settingsService: SettingsService, private speechService: SpeechService) { }

  greetWhenApproachedEvent: any = this.welcome();

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.greetWhenApproachedEvent.unsubscribe();
  }
  
  welcome() {
    // this.pepperService.robotUtils.subscribeToALMemoryEvent("EngagementZones/PersonApproached", function(value) {
    //   const name = this.settingsService.getPepperName();
    //   this.speechService.say(`Hallo, ik ben ${name}. Welkom op de polikliniek!`);
    // });  
  }

}
