import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/services/speech.service';
import { SettingsService } from 'src/services/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(
    private speechService: SpeechService, 
    private settingsService: SettingsService,
    private router: Router) { }

  ngOnInit() {
    const pepperName: string = this.settingsService.getPepperName();
    const friendName: string = this.settingsService.getFriendName();
    this.speechService.say(`Hallo. Ik ben ${pepperName}, wat leuk om jou te zien! Vul je naam in, of vraag het aan je ouders als je wilt dat ik je bij je naam aanspreek. 
      Anders noem ik je gewoon ${friendName}, want dat zijn wij toch? 
      Druk op de grote groene knop als je klaar bent. Als de mijn tablet niet reageert, probeer het dan opnieuw.
      Ik ben een beetje langzaam vandaag, sorry.`)
  }

  finishSetup() {
    this.speechService.say(`Hallo ${this.settingsService.getFriendName()}, dit is het hoofdmenu. Hier kunnen wij samen een hoop leuken dingen doen. Als je zelf niet kan kiezen, geen zorgen, dan geef ik jou zo een suggestie`);
    this.router.navigate(['/home']);
  }

  setFriendName(keyCode: number, name: string) {

    if (keyCode != 13) return;

    this.settingsService.setFriendName(name);
    this.speechService.say(`Jouw naam is ${name}. Wat een leuke naam`);
  }

}
