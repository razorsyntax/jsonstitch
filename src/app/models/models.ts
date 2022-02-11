export interface Persons {
    person?: Person[];
}

export interface PersonsXML {
    persons?: Persons;
}

export interface Person {
    id?: number;
    firstName?: string;
    lastName?: string;
}