import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu-item/menu-item.component';
import { DanceService } from 'src/services/dance.service';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrls: ['./dance.component.scss']
})
export class DanceComponent implements OnInit {

  items: MenuItem[];

  constructor(private danceService: DanceService) { }

  ngOnInit() {
    this.setDanceItems();
  }

  private setDanceItems() {
    const path = "assets/dance/"
    this.items = [
      {
        name: "Robot", description: "De robot dans", image: `${path}robot.png`
      },
      {
        name: "Saluut", description: "De saluut", image: `${path}salute.png`
      },
      {
        name: "De Floss", description: "De Floss", image: `${path}floss.png`
      },
      {
        name: "Dab", description: "De Dab", image: `${path}dab.png`
      },
    ]
  }

  robot() {
    this.danceService.dance();
  }

}
