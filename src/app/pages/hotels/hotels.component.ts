import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { hotels } from 'src/app/data';
import { HotelsState } from '../store/hotels.state';
import { selectHotels } from '../store/hotels.selectors';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  hotels$: Observable<hotels[]>;

  constructor(private store: Store<HotelsState>) {
    this.hotels$ = this.store.pipe(select(selectHotels));
  }

  ngOnInit() {}
}
