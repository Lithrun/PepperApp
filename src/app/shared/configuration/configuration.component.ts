import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/services/settings.service';
import { SpeechService } from 'src/services/speech.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  private settingsService: SettingsService;
  private speechService: SpeechService;
  constructor(settingsService: SettingsService, speechService: SpeechService) {
    this.settingsService = settingsService;
    this.speechService = speechService;
  }

  currentVolume: number = 50;
  pepperName: string;
  friendName: string;


  ngOnInit() {
    const self = this;
    this.speechService.getVolume(function(volume) {
      self.currentVolume = volume;
    });
    this.pepperName = this.settingsService.getPepperName();
    this.friendName = this.settingsService.getFriendName();
  }

  toggleAnimatedSpeech() {
    this.settingsService.toggleAnimatedSpeech();
  }

  testVolume() {
    this.speechService.say(`Mijn volume is ${this.currentVolume}`);
  }

  setVolume(volume: number) {
    this.speechService.setVolume(volume);
    this.currentVolume = volume;
  }

  setPepperName(keyCode: number, name: string) {

    if (keyCode != 13) return;

    this.settingsService.setPepperName(name);
    this.pepperName = name;
    this.speechService.say(`Mijn naam is nu ${name}`);
  }

  setFriendName(keyCode: number, name: string) {

    if (keyCode != 13) return;

    this.settingsService.setFriendName(name);
    this.friendName = name;
    this.speechService.say(`Jouw naam is ${name}. Wat een leuke naam`);
  }

  reset(): void {
    localStorage.clear();
    this.ngOnInit();
  }

}
