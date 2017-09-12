import { DropFilters } from './shared/drop-filters.service';
import { LootingbagService } from './npc/lootingbag/lootingbag.service';
import { LootingbagComponent } from './npc/lootingbag/lootingbag.component';
import { DropsComponent } from './npc/drops/drops.component';
import { NpcsService } from './npcs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpcsComponent } from './npcs.component';
import { NpcComponent } from './npc/npc.component';
import { Routes, RouterModule } from '@angular/router';
import { RenamePipe } from './rename.pipe';

const npcRoutes: Routes = [
  { path: 'npcs', children: [
    {path: ':id', component: NpcComponent},
    {path: '', component: NpcsComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(npcRoutes)
  ],
  declarations: [NpcsComponent, NpcComponent,
    RenamePipe, DropsComponent, LootingbagComponent
],
  exports: [NpcComponent, DropsComponent, LootingbagComponent],
  providers: [NpcsService, LootingbagService, DropFilters]
})
export class NpcsModule { }