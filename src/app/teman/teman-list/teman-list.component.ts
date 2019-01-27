import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teman} from '../teman.model';

@Component({
  selector: 'app-teman-list',
  templateUrl: './teman-list.component.html',
  styleUrls: ['./teman-list.component.css']
})
export class TemanListComponent implements OnInit {

  @Input() temanParent: Teman[];

  @Output() dariChildKeParent: EventEmitter<Teman> = new EventEmitter<Teman>();

  constructor() { }

  ngOnInit() {
  }

  showname(idx: number){
    this.dariChildKeParent.emit(this.temanParent[idx]);
  }

}
