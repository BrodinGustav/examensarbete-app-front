import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';


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

  name: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  userEmail: string | null = '';

  ngOnInit(): void {

    //Hämtar mail från localStorage
    this.userEmail = localStorage.getItem('email');

    console.log("Email från localStorage:", this.userEmail);

    this.http.get<any[]>('http://localhost:8080/api/users')
      .subscribe(data => {

        console.log("Data från API:", data);

        const currentUser = data.find(entry => entry.email === this.userEmail);

        if (currentUser) {
          this.name = currentUser.name;

          console.log("Inloggad användare:", this.name);

        } else {

          console.log("Ingen matchande användare hittades.");

        }
      });
  }

}
