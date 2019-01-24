import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  msg = '';
  hideUpdate = true;
  hideTable = true;
  Hidebtn = true;
  Showbtn = false;
  myvalue;
  members = [
    {'name': 'Elmer', position: 'designer', email : 'gmail@gmail.com'},
    {'name': 'Cristhian', position: 'programmer' , email : 'gmail@gmail.com' },
    {'name': 'Mireya', position: 'manager' , email : 'gmail@gmail.com'}
  ];
  model: any = {};
  model2: any = {};
  addMember (): void {
    this.members.push(this.model);
    this.msg = 'User added';
    this.model = { };
    this.hideTable = false;
    this.Showbtn = true;
    this.Hidebtn = false;

  }

  deleteMember(i): void {
  let answer = confirm('are yo sure of delete?');
    if  (answer) {
      this.members.splice( i , 1 );
      this.msg = 'user deleted';
    }
  }

  editMember (i): void {
    this.model2.name = this.members[i].name;
    this.model2.position = this.members[i].position;
    this.model2.email = this.members[i].email;
    this.hideUpdate = false;
    this.myvalue = i;
  }

  updateMember(): void {
    let i = this.myvalue;
    for ( let j = 0; j < this.members.length; j++) {
      if ( 1 === j) {
        this.members[i] = this.model2;
        this.msg = ' User updated ' ;
        this.model2 = { };
        this.hideUpdate = true;
      }

    }
  }
  closeAlert (): void {
    this.msg  = '';
  }
  ShowTable (): void {
    this.hideTable = false;
    this.Hidebtn = false;
    this.Showbtn = true;
  }
  HideBtn(): void {
    this.hideTable = true;
    this.Hidebtn = true;
    this.Showbtn = false;
  }
}
