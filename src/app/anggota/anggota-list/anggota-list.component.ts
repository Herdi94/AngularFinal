import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AnggotaService} from "../anggota.service";
import {AnggotaModel} from "../anggota.model";
import {Teman} from "../../teman/teman.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit, OnChanges {

  constructor(private anggotaService: AnggotaService) { }
  private idx: string;

  @Input() childListen: string;

  @Output() dariChildKeParent: EventEmitter<AnggotaModel> = new EventEmitter<AnggotaModel>();
  inputInfo: AnggotaModel = new AnggotaModel();

  anggotaList: AnggotaModel[];

  anggotaForm : FormGroup;

  ngOnInit() {
    this.anggotaService.getListAnggota()
      .subscribe(data => {
        this.anggotaList = data
      });
  }

  edit(idx: string){
    // @ts-ignore
    this.dariChildKeParent.emit(idx);
  }

  ngOnChanges(){
    console.log(this.childListen);
    this.ngOnInit();
  }

}

