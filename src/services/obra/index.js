import { BASE_URL } from "../index";
import * as METHODS from "../methods";

const URL = `${BASE_URL}/obra`;

export const list = async () => {
  try {
    const response = await fetch(URL, METHODS.GETO());
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
