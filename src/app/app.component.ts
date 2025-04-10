import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'examensarbete-app';

  showNavigation: boolean = true; //Flagga för att visa/dölja navigationen


  constructor(private router: Router) {}

  ngOnInit(): void {

    //Lyssnar på router-events och ändrar flaggan beroende på rutt
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {

      //Sätter showNavigation till false om användaren är på register- eller login-sidan
      this.showNavigation = !this.router.url.includes('/register') && !this.router.url.includes('/login');
    });

  }
}
