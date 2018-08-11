/*un service permet de créer une fonction interne.Une sorte de classe.
  celle- dans ce cas est de faire un traitement Http ajax sur un fichier Json.
*/


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, tap } from "rxjs/operators";
import { Subject } from 'rxjs/Rx';

import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsSubject = new Subject();
  constructor(private http:Http) { }
  initialJobs=[];
  jobs= [];
  BASE_URL ='http://localhost:4201/';
  //récuparation des jobs qui son dans le fichier dans l'api
  getjobs(){
    return this.http.get(this.BASE_URL + 'api/jobs')
                    .pipe(map(res => res.json()));
  };

  //ajouté un job
  addJob(jobData){
;
    jobData.id= Date.now(); // l'id correspond au nombre de miliseconde depuis 1870
    // this.jobs = [jobData, ...this.jobs];
    // return this.jobsSubject.next(jobData); // la permet de pousser un nouveau job dans le fichier
    return this.http.post(this.BASE_URL +'api/jobs', jobData)
                    .pipe(map(res => {
                      console.log(res);
                      this.jobsSubject.next(jobData);
                    }));
  }

}
