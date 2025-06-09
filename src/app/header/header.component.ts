import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
export class HeaderComponent implements OnInit {




  //Hamburgarmeny
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }



  //Visning av header-element
  @Input() showNavigation: boolean = true;


  //Variabler för UserNameInHeader
  name: string = '';
  userEmail: string | null = '';


  constructor(private router: Router, private userNameInHeaderService: UserNameInHeaderService) {

    //Uppdaterar användarnamnet i headern vid varje navigering för att säkerställa att rätt användare visas
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadUserNameInHeader();
      }
    });

  }


  ngOnInit(): void { }



  //Utskrift av användarnamn till headern
  loadUserNameInHeader() {
    this.userEmail = localStorage.getItem('email');

    //GET
    this.userNameInHeaderService.getAllUsers().subscribe(data => {
      const currentUser = data.find(entry => entry.email === this.userEmail);
      if (currentUser) {
        this.name = currentUser.name;
      } else {
        console.log("Ingen matchande användare hittades.");
      }
    });
  }

}
