import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { QuizComponent } from './quiz/quiz.component';
import { DanceComponent } from './dance/dance.component';
import { SoundComponent } from './sound/sound.component';

const routes: Routes = [
   { path: 'home', pathMatch: 'full', component: MenuComponent},
   { path: 'settings', component: SettingsComponent},
  //  { path: 'memory', component: MemoryComponent },
   { path: 'memory', loadChildren: () => import(`./memory/memory.module`).then(m => m.MemoryModule)},
   { path: 'sound', component: SoundComponent },
   { path: 'dance', component: DanceComponent },
   { path: 'quiz', component: QuizComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
