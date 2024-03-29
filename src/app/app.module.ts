import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './components/pages/initial-page/initial-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { ResultsComponent } from './pages/results/results.component';
import { ViewComponent } from './pages/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterByPipe } from './filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    HeaderComponent,
    FooterComponent,
    ApplicationFormComponent,
    ResultsComponent,
    ViewComponent,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
