import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from 'src/services/settings.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor(private location: Location) { 
  }

  @Input() title: string;

  ngOnInit() {
  }

  return() {
    this.location.back();
  }

}
