import { Component, OnInit } from '@angular/core';
import { RobotUtils } from 'src/lib/robotutils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Ok');
    const smh = new RobotUtils();
    smh.onServices(function(ALLeds){
      console.log('Lets do some eyes!');
      ALLeds.randomEyes(2.0);
    }, function(error){
      console.log(error);
    });
  }

}
