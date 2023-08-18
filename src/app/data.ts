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
  password: number;
}

export interface User {
  id: number;
  name: string;
}

export interface hotels {
  id: number;
  city: string;
  name: string;
  price: number;
  description: string;
  amenities: string;
  capacity: number;
  beds: number;
  bathrooms: number;
}
