import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BuddylistService } from '../../services/buddylistservice';

@Component({
  selector: 'app-add-buddy-component',
  templateUrl: './addbuddy.component.html',
  styleUrls: ['./addbuddy.component.css']
})

export class AddbuddyComponent {
    @Output()
    buddyAdded: EventEmitter<string> = new EventEmitter();
    constructor(private dataservice: BuddylistService) { }
    public str: String;
    public now: Date = new Date();
    statusarr = [
        {'id':1,'status':'Available'},
        {'id':2,'status':'Idle'},
        {'id':1,'status':'Offline'},
    ];
    public inputdata= {
        'username':'',
        'firstname': '',
        'lastname': '',
        'phone': '',
        'status': '',
        'email': '',
        'birthday': '',
        'favorites': '',
        'about': '',
        'lastseen': ''
    };
    public message = '';
    public forModal = '';

   addBuddy(newbdetails, form) {
      this.forModal = form;
      this.inputdata = {
          username:newbdetails.username,
          firstname: newbdetails.firstname,
          lastname: newbdetails.lastname,
          phone:newbdetails.phone,
          status: newbdetails.status,
          email: newbdetails.email,
          birthday: newbdetails.birthday,
          favorites: newbdetails.favorites,
          about: newbdetails.about,
          lastseen: this.now.getHours() + '.' + this.now.getMinutes()
      };
      this.dataservice.addbuddy(this.inputdata).subscribe(result => {
          if (result) {
              this.message = 'Buddy added Successfully';
          this.resetForm(this.forModal);
          this.buddyAdded.emit();
          } else {
              this.message = 'Error Cannot add Buddy';
          }
      });
  }
  resetForm(form) {
      form.resetForm();
  }
}
