import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Teman } from '../teman.model';
import  {TemansService} from "../temans.service";

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers : [TemansService]
})
export class TemanAddComponent implements OnInit {

  @ViewChild('inputContact') inputContact: ElementRef;

  @Output() temanAdded: EventEmitter<Teman> = new EventEmitter<Teman>();

  @Input() temanChild: Teman;

  inputInfo: Teman = new Teman();
  constructor(private temans: TemansService) { }

  ngOnInit() {
  }

  tambahTeman(inputEmail: HTMLInputElement) {
    console.log(this.inputInfo);
    console.log(inputEmail.value);
    console.log(this.inputContact.nativeElement.value);

    this.temanAdded.emit(this.temans.convertTeman(this.inputInfo));
    this.inputInfo = new Teman();
  }

}
