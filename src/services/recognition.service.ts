import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class RecognitionService extends PepperService {

    constructor() {
      super();
    }

    private wordRecognizedEvent: any;

    public setWords(words: string[]) {
        this.robotUtils.onServices(async function(ALSpeechRecognition) {
            await ALSpeechRecognition.pause(true);
            await ALSpeechRecognition.removeAllContext();
            await ALSpeechRecognition.setVocabulary(words, false);
            await ALSpeechRecognition.pause(false); 
            await ALSpeechRecognition.subscribe("ASR");
        });
    }

    public setWordRecognizedEvent(callback) {
        this.wordRecognizedEvent = this.robotUtils.subscribeToALMemoryEvent("WordRecognized", function(value) {
            if (value[1] > 0.4) {
                callback(value[0]);
            }
        });
    }

    public deleteWordRecognizedEvent() {
        try {
            this.wordRecognizedEvent.unsubscribe();
        } catch (error) { }

        try {
            this.robotUtils.onServices(async function(ALSpeechRecognition) {
                await ALSpeechRecognition.unsubscribe("ASR");
            });
        } catch (error) {}
    }
}
