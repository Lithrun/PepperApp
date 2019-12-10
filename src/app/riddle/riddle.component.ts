import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechService } from 'src/services/speech.service';
import { Riddle, RiddleService } from 'src/services/riddle.service';
import { SettingsService } from 'src/services/settings.service';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit, OnDestroy {

  constructor(private speechService: SpeechService, private settingsService: SettingsService, private riddleService: RiddleService) { }

  items: Riddle[];
  correctAnswer: Riddle;

  ngOnInit() {
    this.shuffle();
    this.speechService.say(`Hallo ${this.settingsService.getFriendName()}, 
      welkom bij Dierenraadsels met ${this.settingsService.getPepperName()}. 
      Ik ga een dier na doen, als je weet welk dier het is, druk dan op de afbeelding van het dier.
    `);
    this.playAnimalSound();
  }

  ngOnDestroy() {
    this.speechService.stopAll();
  }

  private shuffle() {
    this.items = this.riddleService.getRiddlePlaySet();
    this.correctAnswer = this.items[Math.floor(Math.random() * this.items.length)];
  }

  private playAnimalSound() {
    let audio = new Audio();
    audio.src = `assets/riddle/audio/${this.correctAnswer.soundFile}`; // Pepper is allowed to play any sound, at any moment
    audio.load();
    audio.play();
  }

  private selectedOption(riddle: Riddle) {
    riddle === this.correctAnswer
      ? this.speechService.sayPositive()
      : this.speechService.sayNegative();
    this.speechService.say(`Het was een ${this.correctAnswer.name}. Ik ga nu weer een ander dier na doen, luister goed.`);
    this.shuffle();
    this.playAnimalSound();
  }


}
