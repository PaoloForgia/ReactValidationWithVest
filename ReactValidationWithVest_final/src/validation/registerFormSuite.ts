import { create, enforce, include, only, test, warn } from "vest";
import "vest/enforce/email";
import { doesUsernameExist } from "../mockApi/user";
import { User } from "../types/registrationForm";

export const suite = create(
  "registration_form",
  ({ username, email, password, passwordConfirmation }: User, fieldName: string) => {
    only(fieldName);

    include("passwordConfirmation").when("password");

    test("username", "username is required", () => {
      enforce(username).isNotBlank();
    });

    test("username", "must be at least 3 characters", () => {
      enforce(username).longerThanOrEquals(3);
    });

    test("username", "username already taken", () => {
      warn();
      const exists = doesUsernameExist(username);

      enforce(exists).isFalsy();
    });

    test("email", "email is not valid", () => {
      enforce(email).isEmail();
    });

    test("password", "must be at least 5 characters", () => {
      enforce(password).longerThanOrEquals(5);
    });

    test("passwordConfirmation", "must match password", () => {
      enforce(passwordConfirmation).equals(password);
    });
  },
);
