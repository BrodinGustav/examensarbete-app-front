import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DeleteProfileBtnService } from '../services/delete-profile-btn.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-profile-btn',
  imports: [],
  templateUrl: './delete-profile-btn.component.html',
  styleUrl: './delete-profile-btn.component.css'
})
export class DeleteProfileBtnComponent {

  loading: boolean = true;

  @Output()
  deleted: Subject<void> = new Subject();
  @Input()
  id!: number;

  constructor(private deleteProfileBtnService: DeleteProfileBtnService,  private router: Router) { }


  onDelete(): void {

    this.loading = true;

    this.deleteProfileBtnService.deleteProfile(this.id).subscribe({
      next: () => {
        this.deleted.next();
        localStorage.clear();
        this.router.navigate(['/register']);
      },
      error: (error) => {
        console.error('Fel vid borttagning av profil:', error);
        this.loading = false;
    }
  });
}
}
