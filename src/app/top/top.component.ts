import { Component, OnInit, Input } from '@angular/core';
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

  @Input() title: string;

  ngOnInit() {
  }

}
