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

  currentVolume: number = 100;
  pepperName: string;

  ngOnInit() {
    this.speechService.getVolume(function(volume) {
      this.currentVolume = volume;
    });
    this.pepperName = this.settingsService.getPepperName();
  }

  toggleAnimatedSpeech() {
    this.settingsService.toggleAnimatedSpeech();
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
