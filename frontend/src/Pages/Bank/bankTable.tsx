import { useQuery, useQueryClient } from "@tanstack/react-query";
import { banksData,AddBankRow } from "./banksData";
import { BankModel } from "./Models";
import BankRow from "./BankRow";
import { GridLoader } from "react-spinners";
import { useEffect, useState } from "react";

export default function BankTable(): any {

  const queryClient = useQueryClient(); // Get the queryClient instance

  const { isLoading, data: banks, error } = useQuery({
    queryKey: ['banks'],
    queryFn: banksData,
  });

  async function handleNewRow() {
    await AddBankRow();
    queryClient.invalidateQueries(['banks']); // Trigger a refetch of the 'banks' query
  }
  if (isLoading) return (<GridLoader color="#36d7b7" />);
  if (error) return "Error found " + error;

  return (
    <>
    <table>
      <tbody>
      <tr>
      <td>
        <label htmlFor="DisplayName">DisplayName</label>
      </td>
      <td>
        <label htmlFor="BankName">BankName</label>
      </td>
      <td>
        <label htmlFor="BankAddress">BankAddress</label>
      </td>
      <td>
        <label htmlFor="AccountNumber">AccountNumber</label>
      </td>
      <td>
        <label htmlFor="IFSCode">IFSCode</label>
      </td>
      <td>
        <label htmlFor="OpeningBalance">OpeningBalance</label>
      </td>
      <td>
        <label htmlFor="Delete">Delete</label>
      </td>
      
      </tr>
        {banks.map((one: BankModel) => (
          <BankRow bank={one} key={one.id} />
        ))}
      </tbody>
    </table>
    <button onClick={handleNewRow}>New Row</button>
    </>
  );
}
