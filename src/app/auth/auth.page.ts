import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover');
  }

>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a
}
