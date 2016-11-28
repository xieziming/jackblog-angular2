import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from '../Shared'

import AppDownloadsComponent  from './appdownloads.component'

@NgModule({
  imports: [ SharedModule,RouterModule ],
  declarations: [ AppDownloadsComponent ]
})
export class AppDownloadsModule {}