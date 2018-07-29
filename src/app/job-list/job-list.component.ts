import { Component, OnInit } from '@angular/core';
import { JobService} from '../services/job.service';
@Component({
  selector: 'cc-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private jobService: JobService) { }
    jobs =[];
    error = '';
  ngOnInit() {
    this.jobService.getjobs()
                    .subscribe(
                      data => this.jobs = data,
                      error => { console.error(error);
                                  this.error = error;
                                }
                    );/*subscribe comprend 3 paramêtre  1. les donné si cela c'est bien passée. 
                                                        2. l'error qui aura été généré en cas d'erreur. 
                                                        3. un flag pour signalé qu'il à fini la tache*/
  }

}
