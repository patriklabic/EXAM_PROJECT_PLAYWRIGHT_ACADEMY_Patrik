import { faker } from "@faker-js/faker";

export const testUser = {
  username: faker.internet.username(),
  password: faker.internet.password({ length: 10 }),
  email: faker.internet.email(),
};
