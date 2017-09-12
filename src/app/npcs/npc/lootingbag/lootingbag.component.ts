import { DropFilters } from './../../shared/drop-filters.service';
import { IDrop } from './../drops/IDrop';
import { LootingbagService } from './lootingbag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lootingbag',
  templateUrl: './lootingbag.component.html',
  styleUrls: ['./lootingbag.component.css']
})
export class LootingbagComponent implements OnInit {

  drops: IDrop[];

  constructor(private lootingBagService: LootingbagService, private dropFilters: DropFilters) { }

  ngOnInit() {
    this.drops = this.lootingBagService.drops;
  }

  getStyle(rarity: string): string {
    return this.dropFilters.getStyle(rarity);
  }

}
