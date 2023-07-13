import { Component } from '@angular/core';
import { ApplicationsServiceService } from 'src/app/services/applications-service.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  name = "";

  constructor(private applicationsService: ApplicationsServiceService) {}

  sendApplication() {
    console.log("asdlksdlkaj")
    this.applicationsService.create(this.name).subscribe();
  }
}
