import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AnggotaService} from "./anggota.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Teman} from "../teman/teman.model";
import {AnggotaModel} from "./anggota.model";

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css'],
  providers: [AnggotaService]
})
export class AnggotaComponent implements OnInit {


  constructor(){}


  ngOnInit() {
  }
}
