/** @format */

import { faker } from "@faker-js/faker";

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
