import {
  BASE_URL
} from "../index";
import * as METHODS from "../methods";

const URL = `${BASE_URL}/obra`;

export const list = async () => {
  try {
    const response = await fetch(URL, METHODS.GETO());
    const data = await response.json();
   
    return data;
  } catch (error) {
    return error.message;
  }
};

export const uploadImage = async (body) => {
  try {
    const URL = "https://api.cloudinary.com/v1_1/teseo30/image/upload?upload_preset=porfafunciona&cloud_name=teseo30"
    const response = await fetch(URL, METHODS.POST_FORM_DATA(body));
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error.message);
    return error.message;
  }
};

export const enviar = async (body) => {
  try {

    const response = await fetch(URL, METHODS.POSTO(body));
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const eliminar = async (id) => {
  const URLID = `${URL}/${id}`;
  try {
    const response = await fetch(URLID, METHODS.DELETE(id));

    return response;
  } catch (error) {
    return error.message;
  }
};