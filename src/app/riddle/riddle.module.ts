import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { RiddleComponent } from './riddle.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {path: 'riddle', component: RiddleComponent},
    ]),
  ],
  declarations: [
    RiddleComponent
  ],
  providers: [],
  bootstrap: [],
  exports: [RiddleComponent]
})
export class RiddleModule { }
