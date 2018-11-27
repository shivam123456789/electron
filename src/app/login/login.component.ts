import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, Router, RouterModule } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.login = this.fb.group({
      'userName': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    })
  }

}
