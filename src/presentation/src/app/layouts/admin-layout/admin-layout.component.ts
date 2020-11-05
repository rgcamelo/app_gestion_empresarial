import { Component, OnInit } from '@angular/core';
import {JwtAuthService} from '../../services/auth/jwt-auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor = 'red';

  constructor(private jwtAuth: JwtAuthService) {
     // this.jwtAuth.checkTokenIsValid();
  }
  changeSidebarColor(color){
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar !== undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel !== undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    const body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
  }
}