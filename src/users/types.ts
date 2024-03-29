export enum ESex {
  M = 'm',
  F = 'f',
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  birthDate: Date;
  email: string;
  password: string;
  phoneNumber: string;
  sex?: ESex;
}
