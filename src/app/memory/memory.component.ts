import { Component, OnInit, OnDestroy } from '@angular/core'

import { GameActions } from './store/action'
import { STATUS } from './store/interface'
import { SpeechService } from 'src/services/speech.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit, OnDestroy {


  private speechService: SpeechService;
  constructor(private actions: GameActions, speechService: SpeechService, private location: Location) {
    this.speechService = speechService;
  }

  ngOnInit() {
    this.speechService.say("Welkom bij memory. Kan jij herinneren waar alle plaatjes zijn? Als je ze allemaal kan vinden, dan krijg je een belooning");
    this.actions.updateStatus(STATUS.READY)
    this.actions.reset()
  }

  ngOnDestroy() {
    this.speechService.stopAll();
  }
}
