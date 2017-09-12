import { IDrop } from './../drops/IDrop';
import { Injectable } from '@angular/core';

@Injectable()
export class LootingbagService {

    private _drops: IDrop[] = [];

    get drops(): IDrop[] {
        return this._drops;
    }

    findDropByName(name: string): IDrop {
        for (let i = 0; i < this._drops.length; i++) {
            if (this._drops[i].name === name) {
                return this._drops[i];
            }
        }
        return null;
    }

    dropExist(name: string): IDrop {
        const drop = this.findDropByName(name);
        return drop;
    }

    addDrop(item: IDrop): void {
        const drop = this.dropExist(item.name);
        if (drop != null) {
            drop.quantity += 1;
        } else {
            this._drops.push(item);
        }
    }
}

