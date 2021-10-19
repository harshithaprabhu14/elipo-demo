import { Component, OnInit } from '@angular/core';
// import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile:boolean=false;
  userName:string="Sneha";
  userRole:string="jj";
  grpname:string="gg";
  defaultImage: string = "assets/images/elipologo.png";


  constructor() { }

  ngOnInit(): void {
  }

}
