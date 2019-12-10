import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Story } from '../story';
import { SpeechService } from 'src/services/speech.service';
import { PepperService } from 'src/services/pepper.service';
import { SettingsService } from 'src/services/settings.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit, OnDestroy {

  constructor(
    private settingsService: SettingsService, 
    private pepperService: PepperService, 
    private speechService: SpeechService,
    private location: Location) {
  }

  story: Story;
  lines : StoryDetail[] = [];
  isPlaying: boolean;
  textDoneMemoryEvent: any;

  ngOnInit() {
    this.story = <Story>history.state.data.item;
    this.createLines();
  }

  ngOnDestroy() {
    this.speechService.stopAll();
    this.isPlaying = false;
    this.unsubcribeTextDoneEvent();
  }
  
  subcribeTextDoneEvent() {
    const self = this;
    this.textDoneMemoryEvent = this.pepperService.robotUtils.subscribeToALMemoryEvent("ALTextToSpeech/TextDone", function(value) {
      if (value === 1) {
        self.getNextLine();
        setTimeout(self.tellStory, 500, self);
      }
    });  
  }

  unsubcribeTextDoneEvent() {
    try {
      this.textDoneMemoryEvent.unsubscribe();
    } catch (error) {     
    }
  }
  

  play() {
    this.isPlaying = true;
    this.tellStory(this);
    this.subcribeTextDoneEvent();
  }

  pause() {
    this.speechService.stopAll();
    this.isPlaying = false;
    this.unsubcribeTextDoneEvent();
  }

  private tellStory(self: any) {
    self.speechService.say(self.getSelectedLine().line);
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
    if (index + 1 !== this.lines.length) {
      newLine = this.lines[index + 1];
      newLine.isSelected = true;
    } else {
      this.speechService.say(`En zo ${this.settingsService.getFriendName()}, dat was het einde van dit verhaaltje`);
      const location = this.location;
      setTimeout(function() {
        location.back();
      }, 5000);
      return;
    }
    return newLine;
  }


}

export class StoryDetail {
  public line: string;
  public isSelected: boolean;
}
