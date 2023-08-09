/* import axios from "axios";
export async function banksData() {
  const data = axios.get('/api/banks.json')
    .then(res => { return (res.data) },
    )
    .catch(error => { return (error); });
  return data
}

export async function deleteBank(id: number) {
  const data = await axios.delete('/api/banks/' + id)
  if (data.status === 200) { return data.data; }
  else { throw new Error(data.statusText); }
} */

import axios from "axios";
import { AxiosError } from "axios"; 
import { BankModel } from "./Models";

export async function banksData() {
  try {
    const res = await axios.get('/api/banks.json');
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch banks data");
  }
}

export async function deleteBank(id: number) {
  const data = await axios.delete('/api/banks/' + id)
  if (data.status === 200) { return data.data; }
  else { throw new Error(data.statusText); }
}

export async function updateBank(updatedBank: BankModel) {
  try {
    const response = await axios.put(`/api/banks/${updatedBank.id}`, updatedBank);
    return response.data;
  } catch (error) {
    return error as AxiosError; // Cast error as AxiosError
  }
}
