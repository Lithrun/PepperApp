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
        {path: 'welcome', component: WelcomeComponent},
        {path: 'setup', component: IntroductionComponent}
    ]),
    ArchwizardModule,
  ],
  declarations: [
    IntroductionComponent,
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [],
  exports: [IntroductionComponent, WelcomeComponent]
})
export class IntroductionModule {}
