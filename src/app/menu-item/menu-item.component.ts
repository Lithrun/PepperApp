import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}

export class MenuItem {
  public name: string;
  public description: string;
  public image: string;
  public path: string;
}
