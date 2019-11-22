import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MemoryComponent } from './memory/memory.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
   { path: 'home', pathMatch: 'full', component: MenuComponent},
   { path: 'memory', component: MemoryComponent },
   { path: 'settings', component: SettingsComponent},
   { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
