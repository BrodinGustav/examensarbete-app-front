import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DeleteProfileBtnService } from '../services/delete-profile-btn.service';


@Component({
  selector: 'app-delete-profile-btn',
  imports: [],
  templateUrl: './delete-profile-btn.component.html',
  styleUrl: './delete-profile-btn.component.css'
})
export class DeleteProfileBtnComponent {


  @Output()
  deleted: Subject<void> = new Subject();
  @Input()
  id!: number;

  constructor(private deleteProfileBtnService: DeleteProfileBtnService) { }

  /* OBS! Avkommenterad då error för return i deleteProfileBtn.service
  onDelete(): void {
    this.deleteProfileBtnService.deleteProfile(this.id)
    .subscribe(() => this.deleted.next());
  } */
}
