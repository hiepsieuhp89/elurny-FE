import { isValidPhoneNumber } from "react-phone-number-input";

export const isValidPhoneNumberWithCountryCode = (phoneNumber: string) => {
  if (phoneNumber === "+84") return true;

  return isValidPhoneNumber(phoneNumber);
};
