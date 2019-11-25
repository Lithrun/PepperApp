import { Component, OnInit } from '@angular/core'

import { GameActions } from './store/action'
import { STATUS } from './store/interface'
import { SpeechService } from 'src/services/speech.service';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {


  private speechService: SpeechService;
  constructor(private actions: GameActions, speechService: SpeechService) {
    this.speechService = speechService;
  }

  ngOnInit() {
    this.speechService.say("Welkom bij memory. Kan jij herinneren waar alle plaatjes zijn? Als je ze allemaal kan vinden, dan krijg je een belooning");
    this.actions.updateStatus(STATUS.READY)
    this.actions.reset()
  }
}
