import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryComponent } from './memory.component';

const routes: Routes = [
    {path: '', component: MemoryComponent},
    { path: 'home3', loadChildren: () => import(`../app.module`).then(m => m.AppModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryRoutingModule { }
