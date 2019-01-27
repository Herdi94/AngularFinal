import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from "@angular/forms";
import {ContactUsModel} from "./contact-us.model";
import {bind} from "@angular/core/src/render3";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  //include contact formGroup
  contactForm: FormGroup;

  constructor() { }

  //psvm
  ngOnInit() {
    this.contactForm = new FormGroup({
      username: new FormControl(null,
        [Validators.required, this.cekIsEmpty ]),
      usermail: new FormControl(null,
        [Validators.required, this.cekIsEmpty]),
      usermsg: new FormControl(null,[])
    })
  }

  kirim(){
    const contactUsModel = new ContactUsModel();
    contactUsModel.userName = this.contactForm.get('username').value;
    contactUsModel.userMail = this.contactForm.get('usermail').value;
    contactUsModel.userMsg = this.contactForm.get('usermsg').value;

    console.log(contactUsModel);
  }

  cekIsEmpty(control: FormControl): {[s: string]: boolean}{
    //untuk === validasi dari tipe serta value
    if(control.value && control.value.trim().length === 0){
      return {'blank': true}
    }
    return null;
  }

}
