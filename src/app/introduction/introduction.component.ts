import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/services/speech.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

  phaseOne() {
    this.speechService.say("Stap 2. Hier kun je mijn instellingen wijzigen. Zo kan je mijn naam wijzigen, mijn volume harder of zachter zetten en nog veel meer.")
  }

  finishSetup() {
    window.location.href = "/home";
  }

}
