import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { persons } from '../mocks/json_data';
import { Person, Persons, PersonsXML } from '../models/models';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(public utilityService: UtilityService) {

    }

    getJson(): Observable<Persons> {
        // set arbitrary time delay between 5 and 10 seconds
        const randTime = this.utilityService.getRandomInt(5000, 10000);
        return of(persons).pipe(
            delay(randTime)
        );
    }

    getXML(): Observable<Persons> {
        // set arbitrary time delay between 5 and 10 seconds
        const randTime = this.utilityService.getRandomInt(5000, 10000);

        // get xml document data
        const xmlData: string = this.utilityService.stringToXML();

        // convert xml document data to JSON obj
        const res: PersonsXML = this.utilityService.xmlToJSON(xmlData);

        // ensuring typescript knows data is not undefined
        return of(res.persons!).pipe(
            delay(randTime)
        );
    }
}