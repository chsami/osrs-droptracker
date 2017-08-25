import { IDrop } from './npc/drops/IDrop';
import { INpc } from './INpc';
import { Subscription } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { NpcsService } from './npcs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.css']
})
export class NpcsComponent implements OnInit {

  drops: IDrop[];
  npc: INpc;
  imgData: string;


  constructor(private npcService: NpcsService, private http: HttpClient) { }

  ngOnInit() {
  }

  getNpc(npcName: string): void {
    this.npcService.searchNpc(npcName).subscribe((res: INpc) => {
      this.npc = res;
    });
  }

  getDrops(npcName: string): void {
    this.npcService.loadDrops(npcName).subscribe(
      (res: IDrop[]) => {
        this.drops = res['drops'];
        this.imgData = res['imgData'];
        console.log(this.imgData);
      }, (error: Error) => {
      if (error.name === 'HttpErrorResponse') {
        alert(error.name + ' error: It was not possible to reach the server.');
      }
    });
  }

}
