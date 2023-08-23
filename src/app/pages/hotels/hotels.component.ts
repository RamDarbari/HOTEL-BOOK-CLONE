import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { hotels } from 'src/app/data';
import { HotelsState } from '../store/hotels.state';
import { selectHotels } from '../store/hotels.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/reusable-component/modal/modal.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent {
  hotels$: Observable<hotels[]>;

  constructor(private store: Store<HotelsState>, public dialog: MatDialog) {
    this.hotels$ = this.store.pipe(select(selectHotels));
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1050px',
    });
  }
}
