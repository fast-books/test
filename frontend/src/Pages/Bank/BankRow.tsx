/* import { useMutation, useQueryClient } from '@tanstack/react-query';
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
} */


import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BankModel } from './Models';
import { deleteBank, updateBank } from './banksData';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useState } from 'react';
import React from 'react';

interface Props {
  bank: BankModel;
}

export default function BankRow({ bank }: Props) {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: (id: number) => deleteBank(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banks'] });
    },
    onError: (error: AxiosError) => {
      const errorMessage = (error as AxiosError).message; // Cast error to AxiosError
      toast.error(errorMessage);
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedBank, setEditedBank] = useState(bank);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateBank(editedBank);
      setIsEditing(false);
      queryClient.invalidateQueries(['banks']); // Update the query after successful update
    } catch (error) {
      const errorMessage = (error as AxiosError).message; // Cast error to AxiosError
      toast.error(errorMessage);
    }
  };

  return (
    <tr key={bank.id}>
      <td>
        {isEditing ? (
          <input
            name="Display Name"
            value={editedBank.DisplayName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedBank((prev) => ({
                ...prev,
                DisplayName: e.target.value,
              }))
            }
          />
        ) : (
          bank.DisplayName
        )}
      </td>
      {/* Render other table cells */}
      <td>{bank.BankName}</td>
      <td>{bank.BankAddress}</td>
      <td>{bank.AccountNumber}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button
              onClick={() => deleteMutate(bank.id)}
              disabled={isDeleting}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
