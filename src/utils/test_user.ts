/** @format */

import { faker } from "@faker-js/faker";

//List of test user available for test purposes.

export const testUserRegister = {
  username: faker.internet.username(),
  password: faker.internet.password({ length: 10 }),
  email: faker.internet.email(),
};

export const testUser24 = {
  username24: "Jerrell_Kreiger24",
  password24: "123456",
};

export const testUserPatrik = {
  usernamepatrik: "patriklabic",
  passwordpatrik: "123456",
};

//!Some balances needed to be changed upon documentations because of api call error with higher ammount
export const usersDDT = [
  { username: "User0", password: "123456", balance: "0.00 Kč" },
  { username: "User20", password: "123456", balance: "20000.00 Kč" },
  { username: "User12345", password: "123456", balance: "-12345.00 Kč" },
  { username: "User196000", password: "123456", balance: "196000.00 Kč" },
  { username: "User29800", password: "123456", balance: "29800.00 Kč" },
];
