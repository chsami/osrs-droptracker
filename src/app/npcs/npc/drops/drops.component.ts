import { DropFilters } from './../../shared/drop-filters.service';
import { LootingbagService } from './../lootingbag/lootingbag.service';
import { IDrop } from './IDrop';
import { Component, OnInit, Input } from '@angular/core';
import { Rarity } from './rarity.enum';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.css']
})
export class DropsComponent implements OnInit {
  @Input() drops: IDrop[];

  filterAlways: boolean = false;
  filterCommon: boolean = false;
  filterUncommon: boolean = false;
  filterRare: boolean = false;
  filterVeryRare: boolean = false;

  filterRarityCollection: any;
  rarityColorCollection: any;



  constructor(private lootingBagService: LootingbagService, private dropFilters: DropFilters) { }

  ngOnInit() {
    this.filterRarityCollection = {
      'always': this.filterAlways,
      'common': this.filterCommon,
      'uncommon': this.filterUncommon,
      'rare': this.filterRare,
      'very rare': this.filterVeryRare
    };
  }

  getFilteredRarity(rarity: string): boolean {
    const _rarity = rarity.trim().toLocaleLowerCase();
    for (const item in this.filterRarityCollection) {
      if (_rarity === item && this.filterRarityCollection[item]) {
        return true;
      }
    }
  }

  filterRarity(isChecked: any, rarity: string) {
    this.filterRarityCollection[rarity] = isChecked;
  }

  getStyle(rarity: string): string {
    return this.dropFilters.getStyle(rarity);
  }

  addDropToLootingBag(item: IDrop): void {
    const _item: IDrop = {
      'name' : item.name,
      'icon' : item.icon,
      'quantity': item.quantity,
      'rarity': item.rarity
    };
    this.lootingBagService.addDrop(_item);
  }

}
