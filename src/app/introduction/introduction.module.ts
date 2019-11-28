import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { IntroductionComponent } from './introduction.component'
import { ArchwizardModule } from 'angular-archwizard';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {path: '', pathMatch: 'full', component: WelcomeComponent},
        {path: 'setup', component: IntroductionComponent}
    ]),
    ArchwizardModule,
  ],
  declarations: [
    IntroductionComponent,
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class IntroductionModule {}
