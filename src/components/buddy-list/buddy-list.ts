import {Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LocalDataSource } from 'ng2-smart-table';
import { BuddylistService } from '../../services/buddylistservice';
import {Buddies} from './buddies';
import { empty } from 'rxjs/Observer';
import { NgStyle } from '@angular/common';


@Component({
    selector: 'app-buddy-list',
    templateUrl: './buddy-list.html',
    styleUrls: ['./buddy-list.css']
})
export class BuddyListComponent implements OnInit {
    constructor(private buddylistservice: BuddylistService) {}
    buddies: Buddies[];
    buddyData = {
        'username':'',
        'firstname': '',
        'lastname': '',
        'status': '',
        'email': '',
        'phone':'',
        'birthday': '',
        'about': '',
        'lastseen': '',
         id: 0, 
        'favorites': 0
    };
    buddyId: number;
    buddyDeleteConfirmation: any;
    source: LocalDataSource;

    settings = {
        actions: {
            columntitle:'Actions',
            add: false,
            edit: false,
            position: 'right'
        },
        delete: {
            confirmDelete: true
        },
        columns: {
            username: {
                title: 'User Name',
                filter: true
              },
           firstname: {
            title: 'First Name',
            filter: true
          },
          lastname: {
            title: 'Last Name',
            filter: true
          },
          phone: {
            title: 'Phone',
            filter: true
          },
          status: {
            title: 'Status',
            filter: true
          },
          favorites: {
            title: 'Favorites',
            filter: true
          }
        },
        pager: {
            display: true,
            perPage: 5
        }
    };

    ngOnInit(): void {
        this.getBuddyList();
    }

    getBuddyList(): void {
        this.buddylistservice.fetchBuddyList()
        .subscribe(buddies => {
            this.buddies = buddies;
            this.source = new LocalDataSource(this.buddies);
            this.source.setSort([{ field: 'favorites', direction: 'asc' }]);
        });
    }

     actionOnOpen(buddyData) {
        this.buddyData = buddyData[0].data;
    }

    deleteUserData() {
        this.buddylistservice.deleteBuddyById(this.buddyId)
        .subscribe(data => {
            this.buddyDeleteConfirmation[0].confirm.resolve();
        });
    }

    onDeleteModalOpen(buddyData) {
        this.buddyDeleteConfirmation = buddyData;
        this.buddyId = buddyData[0].data.id;
    }

     }

