import { NgModule } from '@angular/core';
import { StoryComponent } from './story.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoryItemComponent } from './story-item/story-item.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {path: 'story', component: StoryComponent},
        {path: 'story-detail', component: StoryDetailComponent}
    ]),
  ],
  declarations: [
    StoryComponent,
    StoryItemComponent,
    StoryDetailComponent
  ],
  providers: [],
  bootstrap: [],
  exports: [StoryComponent, StoryItemComponent, StoryDetailComponent]
})
export class StoryModule { }
