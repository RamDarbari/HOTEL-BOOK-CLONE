import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { HotelsService } from 'src/app/pages/services/hotels.service';
import { HotelsState } from 'src/app/pages/store/hotels.state';
import { selectHotels } from 'src/app/pages/store/hotels.selectors'; // Update with your actual path

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  booking = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    city: '',
    price: 0,
    name: '',
    cardHolderName: '',
    cardNumber: 0,
    cardCvv: 0,
  };
  selectedHotelName: string;
  selectedHotelPrice: number;
  selectedCheckInDate!: Date | null;
  selectedCheckOutDate!: Date | null;

  selectedCity: string | null = null; // Initialize to null
  selectedGuests: number | null = null; // Initialize to null

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hotelsService: HotelsService,
    private store: Store<{ hotel: HotelsState }> // Use your actual store structure
  ) {
    this.selectedHotelName = data.selectedHotelName;
    this.selectedHotelPrice = data.selectedHotelPrice;

    if (data.selectedCheckInDate) {
      this.selectedCheckInDate = new Date(data.selectedCheckInDate);
    }

    if (data.selectedCheckOutDate) {
      this.selectedCheckOutDate = new Date(data.selectedCheckOutDate);
    }

    console.log('Check-in Date:', this.selectedCheckInDate);
    console.log('Check-out Date:', this.selectedCheckOutDate);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitBookingForm() {
    if (this.selectedCity !== null) {
      this._hotelsService
        .bookedHotels({
          firstName: this.booking.firstName,
          lastName: this.booking.lastName,
          email: this.booking.email,
          phoneNumber: this.booking.phoneNumber,
          checkInDate: this.selectedCheckInDate,
          checkOutDate: this.selectedCheckOutDate,
          city: this.selectedCity,
          name: this.booking.name,
          price: this.selectedHotelPrice,
          cardHolderName: this.booking.cardHolderName,
          cardNumber: this.booking.cardNumber,
          cardCvv: this.booking.cardCvv,
        })
        .subscribe(
          (response) => {
            console.log('Booking successful!', response);
            this.closeDialog();
          },
          (error) => {
            console.error('Error while booking:', error);
            // Handle error scenario
          }
        );
    } else {
      console.log('Please select a city.');
    }
  }
}
