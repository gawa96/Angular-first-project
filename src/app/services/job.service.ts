/*un service permet de créer une fonction interne.Une sorte de classe.
  celle- dans ce cas est de faire un traitement Http ajax sur un fichier Json.
*/


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsSubject = new Subject();
  constructor(private http:Http) { }
  //récuparation des jobs qui son dans le fichier jobs.json
  getjobs(){    
    return this.http.get('../../data/jobs.json')
            .pipe(map(res => res.json())) 

  }
  //ajouté un job
  addJob(jobData){
    jobData.id= Date.now(); // l'id correspond au nombre de miliseconde depuis 1870
    return this.jobsSubject.next(jobData); // la permet de pousser un nouveau job dans le fichier

  }

}
