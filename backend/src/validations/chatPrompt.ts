import { body } from "express-validator";
import { VALIDATION_CONSTANTS } from "../constants/validateContants";

export const validatePrompt = () => [
  body("prompt").notEmpty().withMessage(VALIDATION_CONSTANTS.PROMPT.MESSAGE),
];
