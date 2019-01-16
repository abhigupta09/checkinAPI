import { Component, OnInit } from '@angular/core';
import { CheckinService } from './checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private checkinService: CheckinService) { }

  ngOnInit() {
      console.log(this.checkinService.getTables());
  }
}
