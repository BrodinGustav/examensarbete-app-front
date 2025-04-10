import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //Hamburgarmeny
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  //Visning av header-element
  @Input() showNavigation: boolean = true;


  constructor(private router: Router) {}

}
