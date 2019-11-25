import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from 'src/services/settings.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  private settingsService: SettingsService;
  constructor(settingsService: SettingsService) { 
    this.settingsService = settingsService;
  }

  pepperName: string;

  ngOnInit() {
    this.pepperName = this.settingsService.getPepperName();
  }

}
