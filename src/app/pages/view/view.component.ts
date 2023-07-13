import { Component } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { ApplicationsServiceService } from 'src/app/services/applications-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent {
  applications: Application[] = [];

  constructor(private applicationsService: ApplicationsServiceService) {}
  
  filterByStatus: string = "";

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications() {
    this.applicationsService.list().subscribe((res) => {
      this.applications = res.application;
    })
  }

  advance(app: Application) {
    if (app.status === "APROVADO") return;
    if (app.status === "RECEBIDO") {
      this.applicationsService.schedule(app.id).subscribe(() => this.getApplications());
      return;
    }
    if (app.status === "QUALIFICADO") {
      this.applicationsService.approve(app.id).subscribe(() => this.getApplications());
    }
    return;
  }

  end(app: Application) {
    this.applicationsService.disqualify(app.id).subscribe(() => this.getApplications());
  }

  selectFilter(option?: string) {
    this.filterByStatus = option || "";
  }
}
