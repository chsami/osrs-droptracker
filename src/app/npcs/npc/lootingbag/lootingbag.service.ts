import { IDrop } from './../drops/IDrop';
import { Injectable, Input } from '@angular/core';

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
        const q = prompt('Amount of ' + item.name, item.quantity.toString());
        if (q) {
            if (drop != null) {
                drop.quantity += parseInt(q, 10);
            } else {
                const _item = item;
                _item.quantity = 0;
                _item.quantity += parseInt(q, 10);
                const index = this._drops.push(item);
            }
        }
    }
}

