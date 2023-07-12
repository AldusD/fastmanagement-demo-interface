import { Component } from '@angular/core';
import { Application } from 'src/app/models/Application';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent {
  applications: Application[] = [
    { name: "john", status: "Recebido", id: 1 }, { name: "Maria", status: "Aprovado", id: 2 }, { name: "Carlos", status: "Qualificado", id: 2 }
  ];

  constructor() {}
}
