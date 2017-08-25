import { NpcComponent } from './npcs/npc/npc.component';
import { NpcsModule } from './npcs/npcs.module';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/npcs', pathMatch: 'full' },
  { path: '**',   redirectTo: '/npcs', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NpcsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
