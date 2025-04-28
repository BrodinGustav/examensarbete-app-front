import { Component, Input, Output } from '@angular/core';
import { DeleteActivityBtnService } from '../services/delete-activity-btn.service';
import { DeleteActivity } from '../models/delete-activity';
import { ActivitySummary } from '../models/profile-activities';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-delete-activity-btn',
  imports: [],
  templateUrl: './delete-activity-btn.component.html',
  styleUrl: './delete-activity-btn.component.css'
})
export class DeleteActivityBtnComponent {


  @Output()
  deleted: Subject<void> = new Subject();
  @Input()
  id!: number;

  constructor(private deleteActivityBtnService: DeleteActivityBtnService) { }

  onDelete(): void {
  this.deleteActivityBtnService.deleteActivity(this.id)
  .subscribe(() => this.deleted.next());

  }
}
