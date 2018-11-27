import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manager';
  user;
  supplier;
  customer;
  stockItem;
  reports;
  hideNavBar;


  constructor( private router: Router) { }

  ngOnInit() {
    setInterval(() => {
			if (this.router.url == '/login') {
				this.hideNavBar = false;
			} else {
				this.hideNavBar = true;
			}
    }, 1000); // calling to get notification count 
    
  }

  
  userBtn() {
    this.user = 'activeclass';
    this.supplier = '';
    this.customer = '';
    this.stockItem = '';
    this.reports = '';
  }
  supplierBtn() {
    this.user = '';
    this.supplier = 'activeclass';
    this.customer = '';
    this.stockItem = '';
    this.reports = '';
  }
  customerBtn() {
    this.user = '';
    this.supplier = '';
    this.customer = 'activeclass';
    this.stockItem = '';
    this.reports = '';
  }
  stockItemBtn() {
    this.user = '';
    this.supplier = '';
    this.customer = '';
    this.stockItem = 'activeclass';
    this.reports = '';
  }
  reportsBtn() {
    this.user = '';
    this.supplier = '';
    this.customer = '';
    this.stockItem = '';
    this.reports = 'activeclass';
  }

}
