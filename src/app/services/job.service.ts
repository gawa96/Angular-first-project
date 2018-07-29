/*un service permet de créer une fonction interne.Une sorte de classe.
  celle- dans ce cas est de faire un traitement Http ajax sur un fichier Json.
*/


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:Http) { }
  getjobs(){    
    return this.http.get('../../data/jobs.json')
            .pipe(map(res => res.json())) 

  }
}
