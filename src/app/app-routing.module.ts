import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { QuizComponent } from './quiz/quiz.component';
import { DanceComponent } from './dance/dance.component';
import { RiddleComponent } from './riddle/riddle.component';
import { WelcomeComponent } from './introduction/welcome/welcome.component';

const routes: Routes = [
   { path: 'home', pathMatch: 'full', component: MenuComponent},
   { path: 'settings', component: SettingsComponent},
  //  { path: 'memory', component: MemoryComponent },
   { path: 'memory', loadChildren: () => import(`./memory/memory.module`).then(m => m.MemoryModule)},
  //  { path: 'welcome', loadChildren: () => import(`./introduction/introduction.module`).then(m => m.IntroductionModule)},
  //  { path: 'welcome', component: WelcomeComponent},
   { path: 'riddle', component: RiddleComponent },
   { path: 'dance', component: DanceComponent },
   { path: 'quiz', component: QuizComponent },
   { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
