import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from 'ng2-modal';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { BuddyListComponent } from '../components/buddy-list/buddy-list';
import { AddbuddyComponent } from '../components/add-buddy/addbuddy.componenet';
import {BuddylistService } from '../services/buddylistservice';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    BuddyListComponent,
    AddbuddyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  providers: [BuddylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
