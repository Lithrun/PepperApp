import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {path: 'music', component: MusicComponent},
    ]),
  ],
  declarations: [
    MusicComponent
  ],
  providers: [],
  bootstrap: [],
  exports: [MusicComponent]
})
export class MusicModule { }
