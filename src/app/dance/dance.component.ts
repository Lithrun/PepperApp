import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu-item/menu-item.component';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrls: ['./dance.component.scss']
})
export class DanceComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.setDanceItems();
  }

  private setDanceItems() {
    this.items = [
      {
        name: "Memory", description: "Speel memory met mij!", image: "assets/memory/back.png"
      },
      {
        name: "Geluiden", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png"
      },
      {
        name: "Quiz", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png"
      },
      {
        name: "Dansje", description: "Speel memory met mij!", image: "https://i.imgur.com/jVuCj9V.png"
      },
    ]
  }

}
