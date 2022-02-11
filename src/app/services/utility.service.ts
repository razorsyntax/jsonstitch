import { Injectable } from '@angular/core';
import { xml_data } from '../mocks/xml_data';
// Using a simple js library to handle the xml to json conversion

import * as fxpParse from 'fast-xml-parser';
import { Person, Persons, PersonsXML } from '../models/models';
// const { XMLParser, XMLBuilder, XMLValidator} = require("fxp");

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    

    stringToXML(): string {
        return xml_data;
    }

    xmlToJSON(xml: string): PersonsXML {
        const parser = new fxpParse.XMLParser();
        return parser.parse(xml);
    }

    getRandomInt(min: number, max: number): number {
        const minimum: number = Math.ceil(min);
        const maximum: number = Math.floor(max);
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    sort(a: Person, b: Person) {
        // added bang to let Typescript know that data will be returning
        return a.id! - b.id!;
    }

}