import { NgModule } from '@angular/core'

import { ReduxConfigModule } from './store'

import { MemoryComponent } from './memory.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LogoComponent } from './dashboard/logo.component'
import { InfoComponent } from './dashboard/info.component'
import { ChessboardComponent } from './chessboard/chessboard.component'
import { CardComponent } from './chessboard/card.component'
import { StatusComponent } from './status/status.component'

import { GameActions } from './store/action'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { MemoryRoutingModule } from './memory-routing.module'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    SharedModule,
    MemoryRoutingModule,
    ReduxConfigModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MemoryComponent}
    ])
  ],
  declarations: [
    MemoryComponent,
    DashboardComponent,
    LogoComponent,
    InfoComponent,
    ChessboardComponent,
    CardComponent,
    StatusComponent
  ],
  providers: [GameActions],
  bootstrap: [MemoryComponent]
})
export class MemoryModule {}
