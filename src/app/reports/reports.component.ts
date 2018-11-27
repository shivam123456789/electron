import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reports = this.fb.group({
      'stockReports': "",
      'fromDate': "",
      'toDate': "",
      'supplier': "",
      'customer': "",
      'salesman': "",
    });
  }

}
