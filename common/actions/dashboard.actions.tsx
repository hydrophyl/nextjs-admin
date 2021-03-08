import axios from 'axios';
import { CAT_BACKEND_SERVER } from '../contants/contants';

export const getCats = async () => {
  try {
    const res = await axios.get(`${CAT_BACKEND_SERVER}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCatById = async (id) => {
  try {
    const res = await axios.delete(`${CAT_BACKEND_SERVER}/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const findCatById = async (id) => {
  try {
    const res = await axios.get(`${CAT_BACKEND_SERVER}/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateCatById = async (id, name, age, breed) => {
  const body = {
    name: name,
    age: age,
    breed: breed
  };
  try {
    const res = await axios.patch(`${CAT_BACKEND_SERVER}/${id}`, body);
    console.log(res);
  } catch (error) {
    throw error;
  }
};

export const addNewCat = async (name, age, breed) => {
  const body = {
    name: name,
    age: age,
    breed: breed
  };
  try {
    const res = await axios.post(`${CAT_BACKEND_SERVER}`, body);
    console.log(res);
  } catch (error) {
    throw error;
  }
};
