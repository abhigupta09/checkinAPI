import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CheckinService} from './checkin.service';

@Component({
    selector: 'app-checkin',
    templateUrl: './checkin.component.html',
    styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

    constructor(private checkinService: CheckinService) {
    }

    tableData: [] = [];
    private checkObjct: { tableId: string };
    tableId: any;
    checksByTableId: any;
    alreadyCalledForCheck = [];

    @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;

    ngOnInit() {
        this.getTables();
    }

    getTables(): void {
        this.checkinService.getTables().subscribe(tables => {
            this.tableData = tables;
        });
    }

    createCheck(tableId) {
        if (!this.alreadyCalledForCheck.includes(tableId)) {
            this.checkObjct = {
                'tableId': tableId
            };
            this.checkinService.createCheckForSelectedTable(this.checkObjct).subscribe(createdChecks => {
            });
            this.alreadyCalledForCheck.push(tableId);
        }
    }

    getCheckByTableId(table) {
        let checkIndex: number;
        this.checksByTableId = undefined;
        this.checkinService.getCheckByTableId().subscribe(checks => {
            this.tableId = table;
            for (checkIndex = 0; checkIndex < checks.length; checkIndex++) {
                if (checks[checkIndex].tableId !== table.id) {
                    checks.splice(checkIndex, 1);
                    checkIndex--;
                }
            }
            this.checksByTableId = checks;
        });
    }

    closeCheckById(checkId) {
        this.checkinService.closeCheck(checkId).subscribe(closeCheckResponse => {
            this.checksByTableId = [closeCheckResponse];
        });
    }

    deleteAllChecks() {
        this.tableId = undefined;
        this.alreadyCalledForCheck = [];
        this.uncheckAll();
        this.checkinService.deleteAllChecks().subscribe(deleteChecks => {
            console.log('delete checks', deleteChecks);
        });
    }

    uncheckAll() {
        this.checkboxes.forEach((element) => {
            element.nativeElement.checked = false;
        });
    }

}
