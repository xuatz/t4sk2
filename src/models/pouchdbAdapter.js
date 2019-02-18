export const DB_URL = process.env.DB_URL || "http://localhost:12002";

export const CONSTANTS = Object.freeze({
  DB_URL
});

export function coolFunctionYo() {
  return true;
}

export const coolArrow = () => {
  return true;
};

export default {
  CONSTANTS
};
