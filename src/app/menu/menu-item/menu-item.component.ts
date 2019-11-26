import { Component, OnInit, Input } from '@angular/core';
import { SpeechService } from 'src/services/speech.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

  explainItem() {
    const text = `${this.menuItem.name}. ${this.menuItem.description}`;
    console.log(text);
    this.speechService.say(text);
  }

}

export class MenuItem {
  public name: string;
  public description: string;
  public image: string;
  public path?: string;
}
