import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
    providedIn: 'root',
  })

export class SpeechService extends PepperService {

    private settingsService: SettingsService;
    constructor(settingsService: SettingsService) {
      super();
      this.settingsService = settingsService;
    }

    public async setVolume(volume: number, callback = null) {
        if (volume > 100) {volume = 100};
        if (volume < 0) {volume = 0};
        await this.robotUtils.onServices(async function(ALTextToSpeech) {
            await ALTextToSpeech.setVolume(volume/100);
            callback();
          });
        return;
    }

    public getVolume(callback) {
      return this.robotUtils.onServices(async function(ALTextToSpeech) {
            callback(await ALTextToSpeech.getVolume()*100);
          });
    }

    public say(text: string): void {
      if (this.settingsService.isAnimatedSpeech()) {
        this.robotUtils.onServices(function(ALAnimatedSpeech) {
          ALAnimatedSpeech.say(text);
        });
      } else {
        this.robotUtils.onServices(function(ALTextToSpeech) {
          ALTextToSpeech.say(text);
        });
      }    
    }
}