import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public Username: string;
  public Password: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OnLogin() {
    console.log(1);
    console.log(this.Username);
    console.log(this.Password);
    //this.dialog.open()

  }

}
