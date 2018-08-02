import { Pipe, PipeTransform } from '@angular/core';
import  * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now'; // importé la librérie pour transformer une date en phrase 'il y a 1jour'
import * as frLocale from 'date-fns/locale/fr'; // importé la libraire qui permet de transformer la phrase en français

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any { //permet de transformer une date en durée genre publié il y a 1 j... la premier value est le la date de publication 
    return distanceInWordsToNow(new Date(value), {locale: frLocale}); //on retourne de la fonction la valeur sous forme de string et en français (paramêtre1 est la value et lautre paramêtre un string)
  }

}
// voir l'affichage dans le fichier job-list.component.html
