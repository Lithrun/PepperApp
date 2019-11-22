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

  ngOnInit() {
  }

  toggleAnimatedSpeech() {
    this.settingsService.toggleAnimatedSpeech();
  }

}
