import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CheckinComponent} from './checkin/checkin.component';
import {AppRoutingModule} from './app-routing.module';
import { CreateCheckComponent } from './create-check/create-check.component';

@NgModule({
    declarations: [
        AppComponent,
        CheckinComponent,
        CreateCheckComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
