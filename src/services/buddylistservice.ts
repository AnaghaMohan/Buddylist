import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Buddies} from '../components/buddy-list/buddies';


@Injectable()
export class BuddylistService {
    constructor(private http: HttpClient) {}
    private serviceUrl = 'http://localhost:3000/buddies';


    //adds new buddy details to the existing data
    addbuddy(data) {
        return this.http.post(this.serviceUrl,data);
    }
    //Retrieves buddy info 
    fetchBuddyList(){
        return this.http.get<Buddies[]>(this.serviceUrl,
        { headers: new HttpHeaders().set('token','thisistoken')});
      }
      //Deletes selected buddy info
    deleteBuddyById(buddyId) {
        return this.http.delete(this.serviceUrl + '/' + buddyId);
    }

       
}
