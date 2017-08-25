import { INpc } from './../INpc';
import { NpcsService } from './../npcs.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {
  @Input() npc: INpc;
  @Input() imgData: string;

  constructor() { }

  ngOnInit() {
  }

}
