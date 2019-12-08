import { Component, OnInit, Input } from '@angular/core';
import { SpeechService } from 'src/services/speech.service';
import { Story } from '../story';
import { StoryService } from 'src/services/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {

  @Input() storyItem: Story;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    const item = this.storyItem;
    this.router.navigate(['/story-detail'], {state: {data: {item}}});
  }

}

