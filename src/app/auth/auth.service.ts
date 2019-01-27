import {Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedIn = false;
  constructor(private router: Router){ }

  login(username: string, password: string){
    this.loggedIn = (username === 'ABC' && password ==='123');
    if(this.loggedIn){
      alert('Autentifikasi sukses');
      this.router.navigate(['/anggota']);
    }else{
      alert('Autentifikasi gagal');
    } 
  }

  logout(){
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }

}
