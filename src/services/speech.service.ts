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
            callback(Math.round(await ALTextToSpeech.getVolume()*100));
          });
    }

    public say(text: string) {
      if (this.settingsService.isAnimatedSpeech()) {
        return this.robotUtils.onServices(function(ALAnimatedSpeech) {
          ALAnimatedSpeech.say(text);
        });
      } else {
        return this.robotUtils.onServices(function(ALTextToSpeech) {
          ALTextToSpeech.say(text);
        });
      }    
    }

    public sayPositive() {
      this.say(this.getPositiveFeedback());
    }

    public sayNegative() {
      this.say(this.getNegativeFeedback());
    }

    public getPositiveFeedback() {
      return this.positivePhrases[Math.floor(Math.random() * this.positivePhrases.length)];
    }

    public getNegativeFeedback() {
      return this.negativePhrases[Math.floor(Math.random() * this.negativePhrases.length)];
    }

    public stopAll() {
      this.robotUtils.onServices(function(ALTextToSpeech) {
        ALTextToSpeech.stopAll();
      });
    }

    private positivePhrases: string[] = [
      "Goed gedaan! Dat was het juiste antwoord!",
      "Dat is juist.",
      "Dat klopt"
    ];

    private negativePhrases: string[] = [
      "Dat is niet het juiste antwoord, maar je was dicht bij!",
      "Helaas",
    ];

}