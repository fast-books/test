import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BankModel } from './Models';
import { updateBank,deleteBank } from './banksData'; // You need to create these functions for update and add
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface Props {
  bank: BankModel;
}

export default function BankRow({ bank }: Props) {
  const queryClient = useQueryClient();

  const updateMutation = useMutation(updateBank, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banks'] });
    },
    onError: (error: AxiosError) => {
      toast(error.message);
    },
  });

  const deleteMutation = useMutation(deleteBank, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banks'] });
    },
    onError: (error: AxiosError) => {
      toast(error.message);
    },
  });

  const { id } = bank;

  const handleUpdate = (updatedBank: BankModel) => {
    updateMutation.mutate(updatedBank);
  };

  const handleDelete = () => {
    deleteMutation.mutate(bank.id);
  };


  const handleInputChange = (fieldName: keyof BankModel) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBank: BankModel = {
      ...bank,
      [fieldName]: e.target.value,
    };
    handleUpdate(updatedBank);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <tr key={id}>
      <td>
        <form onSubmit={handleSubmit}>
          <input
          id="DisplayName"
            name="DisplayName"
            value={bank.DisplayName}
            onChange={handleInputChange('DisplayName')}
          />
        </form>
      </td>
      <td>
        <form onSubmit={handleSubmit}>
          <input
          id="Bankname"
            name="BankName"
            value={bank.BankName}
            onChange={handleInputChange('BankName')}
          />
        </form>
      </td>
      <td>
        <form onSubmit={handleSubmit}>
          <input
          id="BankAddress"
            name="BankAddress"
            value={bank.BankAddress}
            onChange={handleInputChange('BankAddress')}
          />
        </form>
      </td>
      <td>
        <form onSubmit={handleSubmit}>
          <input
          id="AccountNumber"
            name="AccountNumber"
            value={bank.AccountNumber}
            onChange={handleInputChange('AccountNumber')}
          />
        </form>
      </td>
      <td>
        <form onSubmit={handleSubmit}>
          <input
          id="IFSCode"
            name="IFSCode"
            value={bank.IFSCode}
            onChange={handleInputChange('IFSCode')}
          />
        </form>
      </td>
      <td>
        <form onSubmit={handleSubmit}>
          <input
          id="OpeningBalance"
            name="OpeningBalance"
            value={bank.OpeningBalance}
            onChange={handleInputChange('OpeningBalance')}
          />
        </form>
      </td>

      {/* Repeat for other fields */}
      <td>
        <button id="Delete" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
