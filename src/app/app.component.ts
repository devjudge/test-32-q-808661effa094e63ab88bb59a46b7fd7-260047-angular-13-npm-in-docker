import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, mergeMap, switchMap } from 'rxjs/operators';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('search', { static: true }) search!: ElementRef;

  states: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        switchMap((searchText: string) => this.dataService.getData(searchText))
      )
      .subscribe((res) => {
        this.states = res;
        console.log(res)
      });
  }

}
