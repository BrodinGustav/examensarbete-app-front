import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutService } from '../services/log-out.service';

@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent {


  constructor (private logOutService: LogOutService) {}

  onlogout() {

        this.logOutService.logOut();
  }
}
