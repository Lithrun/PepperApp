import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopComponent } from './top/top.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
    declarations: [
      TopComponent,
      ConfigurationComponent     
    ],
    imports: [
      CommonModule
    ],
    exports: [
      TopComponent,
      ConfigurationComponent,
      CommonModule
      
    ]
  })
export class SharedModule { }