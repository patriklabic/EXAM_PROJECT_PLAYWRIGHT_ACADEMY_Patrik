/** @format */

import { expect, test } from "@playwright/test";

test("1.API Login EP test", async ({ request }) => {
  await request.post("https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login", {
    data: {
      username: "patriklabic",
      password: "123456",
    },
  });
});

test("2.API check status code 201 & token in response test", async ({ request }) => {
  const response = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
    {
      data: {
        username: "patriklabic",
        password: "123456",
      },
    }
  );
  expect(response.status()).toBe(201);
});
