// import api from "../api";
import { login_fake_error } from "../../shared/errors";

export type User = {
  name: string;
  token: string;
};

/**
 * POST/login
 * @param {String} email
 * @param {String} password
 */
export const login = (
  email: String,
  password: String,
  loginAttempt: number
) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (loginAttempt % 2) {
        resolve({
          name: "Hard coded user",
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjgwNGE1MGVlZjk5YjAwMjN",
        });
      } else {
        reject(login_fake_error);
      }
    }, 1000);
  });
  //   return api.post("/signin", { email, password });
};
