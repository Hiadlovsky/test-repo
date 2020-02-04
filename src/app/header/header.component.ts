import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _adapter: DateAdapter<any>) {}

  french() {
    this._adapter.setLocale('ja-JP');
  }

  ngOnInit() {
  }

}
