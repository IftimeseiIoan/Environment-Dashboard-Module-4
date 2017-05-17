import { Component, OnInit } from '@angular/core';
import {User} from '../User'

@Component({
  selector: 'display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  auxUser:User={id:1,firstName:'John Abruzzi'};
  auxUser2:User={id:2,firstName:'Michael Scofield'};
  auxUser3:User={id:3,firstName:"Marius Cretu"};
  private userVector:User[]=[];
  private selectedUser:User;

  constructor() {this.userVector.push(this.auxUser);this.userVector.push(this.auxUser2);this.userVector.push(this.auxUser3);}
  ngOnInit() {}

  editClicked(user:User){
    this.selectedUser=user;
  }

  deleteClicked(user:User){
    if(user==this.selectedUser) this.selectedUser=null;
    this.userVector.splice(this.userVector.indexOf(user),1);
  }

  cancelClicked(){
    this.selectedUser=null;
  }

  saveClicked(user:User,value){
    user.firstName=value;
    this.selectedUser=null;
  }

}
