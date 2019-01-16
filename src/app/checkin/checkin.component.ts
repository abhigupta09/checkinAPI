import {Component, OnInit} from '@angular/core';
import {CheckinService} from './checkin.service';

@Component({
    selector: 'app-checkin',
    templateUrl: './checkin.component.html',
    styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

    tableData: [] = [];
    private checkObjct: { tableId: string };

    constructor(private checkinService: CheckinService) {
    }

    ngOnInit() {
        this.getTables();
    }

    getTables(): void {
        this.checkinService.getTables().subscribe(tables => {
            this.tableData = tables;
            console.log('table', this.tableData);
        });
    }

    createCheck(tableId) {
        this.checkObjct = {
            'tableId': tableId
        }
        this.checkinService.createCheckForSelectedTable(this.checkObjct).subscribe();
    }

}
