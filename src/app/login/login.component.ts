import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public Username: string;
  public Password: string;
  public loginForm: FormGroup;

  constructor(public dialog: MatDialog) {
    this.loginForm = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  OnLogin() {
    console.log(1);
    console.log(this.Username);
    console.log(this.Password);
    //this.dialog.open()

  }

}
