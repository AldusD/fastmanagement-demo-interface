import { Component, OnInit } from '@angular/core';
import { ApplicationsServiceService } from 'src/app/services/applications-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public approved: String[] = []

  constructor(private applicationsService: ApplicationsServiceService) {}
  
  ngOnInit(): void {
    this.getApplications();
  }

  getApplications() {
    this.applicationsService.listApproved().subscribe((res) => {
      this.approved = res.approved;
    })
  }
}
