import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserNameInHeader } from '../models/user-name-in-header';
import { LogOutComponent } from "../log-out/log-out.component";
import { UserNameInHeaderService } from '../services/user-name-in-header.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf, LogOutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{




  //Hamburgarmeny
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



  //Visning av header-element
  @Input() showNavigation: boolean = true;


  //Variabler för UserNameInHeader
  name: string = '';
  userEmail: string | null = '';


  constructor(private router: Router, private userNameInHeaderService: UserNameInHeaderService) {}


  ngOnInit(): void {

//Utskrift av användarnamn till headern

    this.userEmail = localStorage.getItem('email');

    //GET
    this.userNameInHeaderService.  getAllUsers().subscribe(data => {
      const currentUser = data.find(entry => entry.email === this.userEmail);
      if (currentUser) {
        this.name = currentUser.name;
      } else {
        console.log("Ingen matchande användare hittades.");
      }
    });
  }

}
