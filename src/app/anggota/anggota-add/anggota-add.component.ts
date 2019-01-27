import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AnggotaModel} from "../anggota.model";
import {AnggotaService} from "../anggota.service";
import {Teman} from "../../teman/teman.model";

@Component({
  selector: 'app-anggota-add',
  templateUrl: './anggota-add.component.html',
  styleUrls: ['./anggota-add.component.css']
})
export class AnggotaAddComponent implements OnInit {

  //include contact formGroup
  anggotaForm: FormGroup;
  private idx : string;
  parentTalk: string;

  constructor(private anggotaService: AnggotaService) { }

  //psvm
  ngOnInit() {

    if(this.idx) {
      console.log(this.idx);
      this.anggotaService.getAnggota(this.idx).subscribe(data => {
        this.anggotaForm = new FormGroup({
          nama: new FormControl(data.nama, [Validators.required]),
          nomorKtp: new FormControl(data.nomorKtp, [Validators.required]),
          alamat: new FormControl(data.alamat, [Validators.required])
        });
      });
    }

    this.anggotaForm = new FormGroup({
      nama: new FormControl(null,
        [Validators.required, this.cekIsEmpty ]),
      nomorKtp: new FormControl(null,
        [Validators.required, this.cekIsEmpty]),
      alamat: new FormControl(null,[])
    })

  }

  kirim(){
    const anggotaModel = new AnggotaModel();
    anggotaModel.nama = this.anggotaForm.get('nama').value;
    anggotaModel.nomorKtp = this.anggotaForm.get('nomorKtp').value;
    anggotaModel.alamat = this.anggotaForm.get('alamat').value;

    console.log(anggotaModel);

    this.anggotaService.simpanKontak(anggotaModel).subscribe( data=>{
      alert(data.nama + ' Berhasil disimpan'+' dengan id '+data.id);
      this.parentTalk = data.id;
    })
  }

  cekIsEmpty(control: FormControl): {[s: string]: boolean}{
    //untuk === validasi dari tipe serta value
    if(control.value && control.value.trim().length === 0){
      return {'blank': true}
    }
    return null;
  }

  anggotaList: AnggotaModel[] = [];

  onAnggotaEdit(ide : string) {
    this.idx = ide;
    this.ngOnInit();
  }

}
