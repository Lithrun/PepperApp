import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../story';
import { StoryService } from 'src/services/story.service';
import { SpeechService } from 'src/services/speech.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {

  constructor(private storyService: StoryService, private speechService: SpeechService) {
    this.story = this.storyService.getAllStories()[0];
    this.createLines();
    console.log(this.lines);
  }

  story: Story;
  lines : StoryDetail[] = [];
  isPlaying: boolean;

  //"ALTextToSpeech/TextDone" this should be used, but uncertain how this works with callbacks
  
  ngOnInit() {
    // this.story = <Story>history.state.data.item;
  }

  play() {
    this.isPlaying = true;
    this.speechService.say(this.getSelectedLine().line);
    this.getNextLine();
  }

  pause() {
    this.speechService.stopAll();
    this.isPlaying = false;
  }

  private createLines() {
    this.story.fullStory.split(".").forEach((x) => {
      this.lines.push({
        line: x,
        isSelected: false
      })
    });
    this.lines[0].isSelected = true;
  }

  selectNewLine(line: StoryDetail) {
    this.getSelectedLine().isSelected = false;
    line.isSelected = true;
  }

  private getSelectedLine(): StoryDetail {
    return this.lines.filter(x => x.isSelected === true)[0];
  }

  private getNextLine(): StoryDetail {
    const currentLine = this.getSelectedLine();
    currentLine.isSelected = false;
    const index = this.lines.indexOf(currentLine);
    let newLine: StoryDetail;
    console.log(index);
    if (index + 1 < this.lines.length) {
      newLine = this.lines[index + 1];
      newLine.isSelected = true;
    } else {
      alert("laatste regel!");
    }

    return newLine;
  }


}

export class StoryDetail {
  public line: string;
  public isSelected: boolean;
}
