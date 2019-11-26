import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopComponent } from './top/top.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      TopComponent     
    ],
    imports: [
      CommonModule
    ],
    exports: [
      TopComponent,
      CommonModule
      
    ]
  })
export class SharedModule { }