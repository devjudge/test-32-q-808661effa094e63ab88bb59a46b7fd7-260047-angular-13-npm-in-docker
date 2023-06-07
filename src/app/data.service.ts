import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import {
    map,
} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() { }
    getData(filterText: string) {
        const timertTime = Math.floor(Math.random() * 10000);
        console.log(`SearchText: ${filterText},Time taken by API: ${timertTime} milliseconds`)
        return timer(timertTime).pipe(
            map((x) =>
                [
                    { id: 1, text: 'Andhra Pradesh' },
                    { id: 2, text: 'Arunachal Pradesh' },
                    { id: 3, text: 'Assam' },
                    { id: 4, text: 'Bihar' },
                    { id: 5, text: 'Chhattisgarh' },
                    { id: 6, text: 'Goa' },
                    { id: 7, text: 'Gujarat' },
                    { id: 8, text: 'Haryana' },
                    { id: 9, text: 'Himachal Pradesh' },
                    { id: 10, text: 'Jharkhand' },
                    { id: 11, text: 'Karnataka' },
                    { id: 12, text: 'Kerala' },
                    { id: 13, text: 'Madhya Pradesh' },
                    { id: 14, text: 'Maharashtra' },
                    { id: 15, text: 'Manipur' },
                    { id: 16, text: 'Meghalaya' },
                    { id: 17, text: 'Mizoram' },
                    { id: 18, text: 'Nagaland' },
                    { id: 19, text: 'Odisha' },
                    { id: 20, text: 'Punjab' },
                    { id: 21, text: 'Rajasthan' },
                    { id: 22, text: 'Sikkim' },
                    { id: 23, text: 'Tamil Nadu' },
                    { id: 24, text: 'Telangana' },
                    { id: 25, text: 'Tripura' },
                    { id: 26, text: 'Uttarakhand' },
                    { id: 27, text: 'Uttar Pradesh' },
                    { id: 28, text: 'West Bengal' },
                ].filter((state) =>
                    state.text
                        .toLocaleLowerCase()
                        .includes(filterText.toLocaleLowerCase())
                )
            )
        );
    }
}
