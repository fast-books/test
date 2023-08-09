import axios from "axios";
import { BankModel } from './Models';

export async function banksData() {
  const data = axios.get('/api/banks.json')
    .then(res => { return (res.data) },
    )
    .catch(error => { return (error); });
  return data
}

export async function updateBank (updatedBankValue:BankModel){
  console.log(updatedBankValue);
  try {
    const response = await axios.put(`/api/banks/edit/${updatedBankValue.id}`, { 
      DisplayName:updatedBankValue.DisplayName,
      BankName:updatedBankValue.BankName,
      BankAddress:updatedBankValue.BankAddress,
    AccountNumber:updatedBankValue.AccountNumber,
      IFSCode:updatedBankValue.IFSCode,
      SWIFTCode:updatedBankValue.SWIFTCode,
      Branch:updatedBankValue.Branch,
      gstID:updatedBankValue.gstID,
  OpeningBalance:updatedBankValue.OpeningBalance,
  companyId:updatedBankValue.companyId
    });
    
    return response.data; // Return the updated bank data
  } catch (error) {
    throw error;
  }
};

export async function AddBankRow(){
  const response =await axios.post("/api/banks/add",{
    DisplayName:"xyz",
      BankName:"xyz",
      BankAddress:"xyz",
    AccountNumber:"0000",
      IFSCode:"ABC00",
      SWIFTCode:null,
      Branch:null,
      gstID:null, 
  OpeningBalance:"1000.00",
  companyId:2

  })
  .then(res => { return (res.data)})
  .catch(error => { return (error); });
 return response
}

export async function deleteBank(id: number) {
  const data = await axios.delete('/api/banks/' + id)
  if (data.status === 200) { return data.data; }
  else { throw new Error(data.statusText); }
}