import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class SpeechService extends PepperService {

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

    // function save_current_side(current_side, callback) {
    //   a.b({
    //     callback: function (a) {
    //       callback(a);
    //     }
    //   });
    // }
    
    // save_current_side(current_side, function(a){
    //   console.log(a);
    // });

    public say(text: string) {
      return this.robotUtils.onServices(function(ALTextToSpeech) {
        ALTextToSpeech.say(text);
      });
    }
}