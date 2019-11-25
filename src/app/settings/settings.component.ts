import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/services/settings.service';
import { SpeechService } from 'src/services/speech.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private settingsService: SettingsService;
  private speechService: SpeechService;
  constructor(settingsService: SettingsService, speechService: SpeechService) {
    this.settingsService = settingsService;
    this.speechService = speechService;
  }

  currentVolume: number = 50;
  pepperName: string;

  ngOnInit() {
    const self = this;
    this.speechService.getVolume(function(volume) {
      self.currentVolume = volume;
    });
    this.pepperName = this.settingsService.getPepperName();
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

  setPepperName(name: string) {
    this.settingsService.setPepperName(name);
    this.pepperName = name;
  }

}
