import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class SpeechService extends PepperService {

    public async setVolume(volume: number) {
        if (volume > 100) {volume = 100};
        if (volume < 0) {volume = 0};
        this.robotUtils.onServices(async function(ALTextToSpeech) {
            await ALTextToSpeech.setVolume(volume/100);
          });
    }

    public getVolume(): number {
      let volume: number = 50;
        this.robotUtils.onServices(async function(ALTextToSpeech) {
            volume = await ALTextToSpeech.getVolume()*100;
          });
      return volume;
    }

    public async say(text: string) {
      return this.robotUtils.onServices(async function(ALTextToSpeech) {
        await ALTextToSpeech.say(text);
      });
    }
}