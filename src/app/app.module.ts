import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; //Importer pour générer un formulaire
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; // a importer pour faire des routes
import { JobService } from './services/job.service';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToShortDatePipe } from './pipes/to-short-date.pipe';
import { ToMoneySymbolPipe } from './pipes/to-money-symbol.pipe';



//Permet de rajouter des routes attention l'ordre a sont importance 
const routes =[
  { path: '', component : HomeComponent},// la route de départ : http://localhost:4200 ce qui va afficher le component home
  { path:'jobs/add', component : JobAddFormComponent },
  { path:'jobs/:id', component : JobDetailsComponent },// un routage avec un di permet d'afficher le détail d'un job http://localhost:4200/jobs/1
  { path:'jobs', component : JobListComponent },// permet d'afficher la liste des jobs : http://localhost:4200/jobs
  { path:'about', component: AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent,
    JobAddFormComponent,
    DaysAgoPipe,
    HomeComponent,
    JobDetailsComponent,
    AboutComponent,
    ToShortDatePipe,
    ToMoneySymbolPipe,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot() // à importer pour faire des routes
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}