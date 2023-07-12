import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './components/pages/initial-page/initial-page.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { ResultsComponent } from './pages/results/results.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: InitialPageComponent },
  { path: 'application/new', component: ApplicationFormComponent, children: [
    { path: 'results', component: ResultsComponent },
    { path: 'view', component: ViewComponent },
  ]},
  { path: '**', redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

