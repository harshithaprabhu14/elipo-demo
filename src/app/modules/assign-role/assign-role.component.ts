import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {

  constructor() { }

  // public openCustomizeTable() {
  //   // this.service.isLoader = true;
  //   const dialogRef = this.dialog.open(CustomizeAssignRoleComponent, {
  //     width : "750px",
  //     data : {headerData:this.header ,userRole:this.userRoleArray}
  //   });
  //   this.service.isLoader = false;

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result) {
  //       this.header = JSON.parse(JSON.stringify(result));
  //     }
  //   })
  // }

  ngOnInit(): void {
  }

}
