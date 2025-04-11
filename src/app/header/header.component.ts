import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserNameInHeader } from '../models/user-name-in-header';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf, NgFor],
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






  //Variabel för att lagra namn från GET
  name: string = '';

  //Variabel för att lagra mail från GET
  userEmail: string | null = '';


  constructor(private router: Router, private http: HttpClient) {}


  ngOnInit(): void {

//GET för utskrift av namn till headerikon

    //Hämtar mail från localStorage
    this.userEmail = localStorage.getItem('email');

    console.log("Email från localStorage:", this.userEmail);

    //GET
    this.http.get<UserNameInHeader[]>('http://localhost:8080/api/users')

    //Sätter subscribe till observable
      .subscribe(data => {

        console.log("Data från API:", data);

        //Hitta mail
        const currentUser = data.find(entry => entry.email === this.userEmail);

        //Lagra namn till mail
        if (currentUser) {
          this.name = currentUser.name;

          console.log("Inloggad användare:", this.name);

        } else {

          console.log("Ingen matchande användare hittades.");

        }
      });
  }

}
