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

@NgModule({
  imports: [
    SharedModule,
    ReduxConfigModule,
    RouterModule.forChild([
      {path: 'memory', component: MemoryComponent}
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
  bootstrap: []
})
export class MemoryModule {}
