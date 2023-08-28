import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { HotelsService } from 'src/app/pages/services/hotels.service';
import { HotelsState } from 'src/app/pages/store/hotels.state';
import { Observable } from 'rxjs';
import { bookedhotelsData } from 'src/app/data';
import {
  filterCheckInDate,
  filterCheckOutDate,
} from 'src/app/pages/store/hotels.selectors';
import { NgbNavLinkButton } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  booking = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    price: 0,
    city: '',
    name: '',
    cardHolderName: '',
    cardNumber: 0,
    cardCvv: 0,
  };
  selectedHotelName!: string;
  selectedHotelPrice!: number;
  selectedCheckInDate$!: Observable<any>;
  selectedCheckOutDate$!: Observable<any>;
  selectedCity!: string;
  selectedGuests: number | null = null;
  selectedCheckInDate: any;
  selectedCheckOutDate: any;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hotelsService: HotelsService,
    private store: Store<{ hotel: HotelsState }>
  ) {
    this.selectedHotelName = this.data.selectedHotelName;
    this.selectedHotelPrice = this.data.selectedHotelPrice;
    this.selectedCity = this.data.selectedCity;
    console.log(this.selectedCity);
  }

  ngOnInit(): void {
    this.selectedCheckInDate$ = this.store.select(filterCheckInDate);
    this.selectedCheckOutDate$ = this.store.select(filterCheckOutDate);
    this.selectedCheckInDate$.subscribe((checkInDate) => {
      this.selectedCheckInDate = checkInDate;
    });

    this.selectedCheckOutDate$.subscribe((checkOutDate) => {
      this.selectedCheckOutDate = checkOutDate;
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }

  submitBookingForm() {
    const formData: bookedhotelsData = {
      firstName: this.booking.firstName,
      lastName: this.booking.lastName,
      email: this.booking.email,
      phoneNumber: this.booking.phoneNumber,
      name: this.selectedHotelName,
      price: this.selectedHotelPrice,
      checkInDate: this.selectedCheckInDate,
      checkOutDate: this.selectedCheckOutDate,
      city: this.selectedCity,
      cardHolderName: this.booking.cardHolderName,
      cardNumber: this.booking.cardNumber,
      cardCvv: this.booking.cardCvv,
    };

    this._hotelsService.bookedHotels(formData).subscribe(
      (response) => {
        console.log('Booking successful!', response);
        this.closeDialog();
      },
      (error) => {
        console.error('Error while booking:', error);
        // Handle error scenario
      }
    );
  }
}
