import { Component, OnInit } from '@angular/core';
import { Story } from './story';
import { StoryService } from 'src/services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor(private storyService: StoryService) { 
    this.items = this.storyService.getAllStories();
  }

  items: Story[];


  ngOnInit() {
  }

}
