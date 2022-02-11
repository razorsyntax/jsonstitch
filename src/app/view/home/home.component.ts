import { Component } from '@angular/core';
import { forkJoin, map, Observable, of, tap } from 'rxjs';
import { Person, Persons } from 'src/app/models/models';
import { RestService } from 'src/app/services/rest.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public personArr: Observable<Person[]> = of();

    // Mock loader
    public loading: string = 'Loading...';

    constructor(
        public restService: RestService,
        public utilityService: UtilityService
    ) {
        this.getData();
    }


    getData(): void {

        const dataCalls: Observable<Persons>[] = [
            this.restService.getJson(),
            this.restService.getXML()
        ];

        this.personArr = forkJoin(dataCalls).pipe(
            // shut off loader when data returns
            tap(() => this.loading = ''),
            // combine and then sort
            map(([jsonMock, xmlMock]) => [...jsonMock.person!, ...xmlMock.person!].sort((a: Person, b: Person) => (a.id! > b.id!) ? 1 : -1)),
        );
    }

}
