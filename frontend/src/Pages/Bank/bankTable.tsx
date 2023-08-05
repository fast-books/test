import { useQuery } from "@tanstack/react-query";
import { banksData } from "./banksData";
import { BankModel } from "./Models";
import BankRow from "./BankRow";
import { GridLoader } from "react-spinners";
import { useState } from "react";

export default function BankTable(): any {
  const { isLoading, data: banks, error } = useQuery(
    {
      queryKey: ['banks'],
      queryFn: banksData
    })
  if (isLoading) return (<GridLoader color= "#36d7b7" />)
  if (error) return "Error found " + error
  const [tableData, setTableData]=useState(banks);
  return (
    <table><tbody>
    {banks.map((one: BankModel) => <BankRow bank={one} key = {one.id} />)}
    </tbody></table>
)}
