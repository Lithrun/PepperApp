import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/services/settings.service';
import { SpeechService } from 'src/services/speech.service';
import { PepperService } from 'src/services/pepper.service';
import { RecognitionService } from 'src/services/recognition.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(
    private settingsService: SettingsService, 
    private speechService: SpeechService, 
    private pepperService: PepperService,
    private recognitionService: RecognitionService) { }

  greetWhenApproachedEvent: any = this.welcome();

  ngOnInit() {
    // this.recognitionService.setWords(["Ja", "Nee"]);
    // const service = this.speechService;
    // this.recognitionService.setWordRecognizedEvent(function(value) {
    //   service.say(value);
    // })
  }

  ngOnDestroy() {
    this.recognitionService.deleteWordRecognizedEvent();
    try {
      this.greetWhenApproachedEvent.unsubscribe(function(callback) {
      });
    } catch (error) {
      
    }
  }
  
  welcome() {
    const self = this;

    this.playAudio();

    return self.pepperService.robotUtils.subscribeToALMemoryEvent("GazeAnalysis/PersonStartsLookingAtRobot", function(value) {
      const name = self.settingsService.getPepperName();
      self.speechService.say(`Hallo, ik ben ${name}. Welkom op de polikliniek! Klik op mijn scherm om te beginnen.`);
    });  
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "assets/cow.wav"; // Pepper is allowed to play any sound, at any moment
    audio.load();
    audio.play();
  }

//var self = this;
// self.RobotUtilsJs.onServices(async function(ALSpeechRecognition) {
//     await ALSpeechRecognition.unsubscribe("ASR");
//     await ALSpeechRecognition.pause(true);
//     await ALSpeechRecognition.removeAllContext();
//     await ALSpeechRecognition.setVocabulary(["ja", "nee"], false);
//     await ALSpeechRecognition.pause(false); 
//   await ALSpeechRecognition.subscribe("ASR");
// });

//TODO ONLY SUBSCRIBE TO ALMEMORYEVENT ONCE, AS SUBMITTING IT MULTIPLE TIMES CAN CAUSE ISSUES
// self.RobotUtilsJs.subscribeToALMemoryEvent("WordRecognized", function(value) {
//             if (value[1] > 0.4) {
//                 console.log(value);
//                 self.RobotUtilsJs.onServices(function(ALTextToSpeech, ALSpeechRecognition) {
//                     ALTextToSpeech.say("Jij zij:" + value[0]);
//                     ALSpeechRecognition.pause(true);
//                 });
//             }
//     });

// RobotUtils.subscribeToALMemoryEvent returns a MemoryEventSubscription object, on which you can call .unsubscribe(), which takes as optional parameter a callback to be called when the ubsubscription is done.

}
