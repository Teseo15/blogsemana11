import { BASE_URL } from "../index";
import * as METHODS from "../methods";

const URL = `${BASE_URL}/user`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpbmRlcjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiJsaW5kZXIxMjM0NTYiLCJpYXQiOjE2MzcyNTE2MTJ9.y08bt0alwrFzWHLwhJff_Vtk_UTGEESkfMcyniIhjZg";

export const list = async () => {
  try {
    const response = await fetch(`${URL}/users`, METHODS.GET(token));
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
