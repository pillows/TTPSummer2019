// src/js/actions/index.js
import { UPDATE_BALANCE } from "../constant/index";
export function updateBalance(payload) {
  return { type: UPDATE_BALANCE, payload };
}
