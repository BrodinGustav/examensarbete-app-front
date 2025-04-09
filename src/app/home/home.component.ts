import { Component } from '@angular/core';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [LeaderBoardComponent,  CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
