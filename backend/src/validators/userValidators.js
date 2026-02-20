import { body } from "express-validator";

export const registerValidator = [

  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3, max: 50 }).withMessage("Name must be 3 to 50 characters")
    .matches(/^[a-zA-Z\s]+$/).withMessage("Name must contain only letters"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(),

  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isStrongPassword({
      minLength: 5,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
    .withMessage("Password must be strong (uppercase, lowercase, number, symbol)"),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone is required")
    .isMobilePhone("bn-BD") // for Bangladesh
    .withMessage("Invalid phone number"),

  body("address")
    .notEmpty().withMessage("Address is required")
    // .isInt({min:5, max: 200 }).withMessage("Address must be between 5 and 200")
    .isLength({ min: 3, max: 200 }).withMessage("Name must be 3 to 200 characters")
];