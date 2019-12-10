import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechService } from 'src/services/speech.service';
import { Riddle, RiddleService } from 'src/services/riddle.service';
import { SettingsService } from 'src/services/settings.service';
import { PepperService } from 'src/services/pepper.service';
import { RecognitionService } from 'src/services/recognition.service';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit, OnDestroy {

  constructor(
    private speechService: SpeechService, 
    private settingsService: SettingsService, 
    private riddleService: RiddleService,
    private pepperService: PepperService,
    private recognitionService: RecognitionService) { }

  items: Riddle[];
  correctAnswer: Riddle;
  textDoneMemoryEvent: any;
  canPlay: boolean = true;

  ngOnInit() {
    this.subcribeTextDoneEvent();
    this.shuffle();
    this.speechService.say(`Hallo ${this.settingsService.getFriendName()}, 
      welkom bij Dierenraadsels met ${this.settingsService.getPepperName()}. 
      Ik ga een dier na doen, als je weet welk dier het is, druk dan op de afbeelding van het dier.
    `);
  }

  ngOnDestroy() {
    this.speechService.stopAll();
    this.unsubcribeTextDoneEvent();
  }

  subcribeTextDoneEvent() {
    const self = this;
    this.textDoneMemoryEvent = this.pepperService.robotUtils.subscribeToALMemoryEvent("ALTextToSpeech/TextDone", function(value) {
      if (value === 1) {
        self.playAnimalSound(self.correctAnswer.soundFile);
      }
    });  
  }

  unsubcribeTextDoneEvent() {
    try {
      this.textDoneMemoryEvent.unsubscribe();
    } catch (error) {     
    }
  }

  private shuffle() {
    this.items = this.riddleService.getRiddlePlaySet();

    this.recognitionService.setWords([this.items[0].name, this.items[1].name, this.items[2].name, this.items[3].name]);
    const self = this;
    this.recognitionService.setWordRecognizedEvent(function(value) {
      const riddle = self.items.filter(x => x.name === value)[0];
      self.selectedOption(riddle);
    })

    this.correctAnswer = this.items[Math.floor(Math.random() * this.items.length)];
    this.canPlay = true;
  }

  private playAnimalSound(sound: string) {
    let audio = new Audio();
    audio.src = `assets/riddle/audio/${sound}`; // Pepper is allowed to play any sound, at any moment
    audio.load();
    audio.play();
  }

  selectedOption(riddle: Riddle) {
    if (this.canPlay === false) {
      return;
    }  
    if (this.canPlay === true) {
      this.canPlay = false;
    }
    
    this.recognitionService.deleteWordRecognizedEvent();
    const feedback = riddle === this.correctAnswer
      ? this.speechService.getPositiveFeedback()
      : this.speechService.getNegativeFeedback();
    this.speechService.say(`${feedback}.. Het was een ${this.correctAnswer.name}. Ik ga nu weer een ander dier na doen, luister goed.`);
    this.shuffle();
  }


}
