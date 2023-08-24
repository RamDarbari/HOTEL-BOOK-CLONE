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
  selectedHotelName!: string;
  selectedHotelPrice!: number;
  selectedCheckInDate!: number;
  selectedCheckOutDate!: number;

  constructor(private store: Store<HotelsState>, public dialog: MatDialog) {
    this.hotels$ = this.store.pipe(select(selectHotels));
  }

  openDialog(hotel: hotels) {
    const selectedCheckInDate = hotel.checkInDate
      ? new Date(hotel.checkInDate)
      : null;
    const selectedCheckOutDate = hotel.checkOutDate
      ? new Date(hotel.checkOutDate)
      : null;

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1050px',
      data: {
        selectedHotelName: hotel.name,
        selectedHotelPrice: hotel.price,
        selectedCheckInDate: selectedCheckInDate,
        selectedCheckOutDate: selectedCheckOutDate,
      },
    });
  }
}
