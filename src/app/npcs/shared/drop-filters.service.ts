import { IDrop } from './../npc/drops/IDrop';
import { Injectable } from '@angular/core';

@Injectable()
export class DropFilters {
    rarityColorCollection: any = {
        'always': '#AFEEEE',
        'common': '#56E156',
        'uncommon': '#FFED4C',
        'rare': '#FF863C',
        'very rare': '#FF6262',
    };

    public getStyle(rarity: string): string {
        const _rarity = rarity.trim().toLocaleLowerCase();
        return this.rarityColorCollection[_rarity];
    }
}