import { IDrop } from './npc/drops/IDrop';
import { INpc } from './INpc';
import { Subscription, Observable } from 'rxjs/Rx';
import { NpcsComponent } from './npcs.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NpcsService {

    constructor(private http: HttpClient) { }

    findNpc(npcName: string, npcs: string): INpc {
        for (let i = 0; i < Object.keys(npcs).length; i++) {
            const npc: INpc = Object.values(npcs)[i];
            if (npc.name && npc.name.toLocaleLowerCase().includes(npcName.toLocaleLowerCase())) {
                return npc;
            }
        }
        return null;
    }

    searchNpc(npcName: string): Observable<INpc> {
        return this.http.get('assets/npcDefinitions.json').map((res: string) => {
            return this.findNpc(npcName, res);
        });
    }

    loadDrops(npcName: string): Observable<IDrop[]> {
        return this.http.get('http://localhost:8081/scrape/' + npcName).map((res: IDrop[]) => {
            return res;
        });
    }

}

