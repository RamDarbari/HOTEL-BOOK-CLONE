export interface signUp {
  userName: string;
  emailAddress: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
}

export interface login {
  // username: string;
  emailAddress: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
}

export interface hotels {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  id: number;
  image: string;
  city: string;
  name: string;
  price: number;
  description: string;
  amenities: [];
  capacity: number;
  beds: number;
  bathrooms: number;
}

export interface bookedhotelsData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  city: string;
  name: string;
  price: number;
  cardHolderName: string;
  cardNumber: number;
  cardCvv: number;
}
