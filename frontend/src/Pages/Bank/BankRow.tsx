import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BankModel } from './Models'
import { deleteBank } from './banksData';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface Props {
  bank: BankModel,
}

export default function BankRow({ bank }: Props) {

  const queryClient=useQueryClient();
  const { isLoading:isDeleting, mutate } = useMutation({
    mutationFn: (id: number) => deleteBank(id), 
    onSuccess: ()=>{queryClient.invalidateQueries({queryKey:['banks']})},
    onError: (error:AxiosError ) => {toast(error.message)},
    })
  
  const { id, DisplayName, BankName, BankAddress, AccountNumber, IFSCode, SWIFTCode, Branch, gstID, OpeningBalance, companyId } = bank;
  
  return (<tr key={id}>
    <td><input name="Display Name" value={DisplayName}/></td>
    <td>{BankName}</td>
    <td>{BankAddress} </td>
    <td>{AccountNumber}</td>
    <td><button onClick={() => mutate(id)} disabled={isDeleting}>Delete</button></td>
  </tr>
  )
}