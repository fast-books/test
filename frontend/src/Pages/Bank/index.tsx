import { Toaster } from "react-hot-toast";
import BankTable from "./bankTable";
import { JSX } from "react/jsx-runtime";
import React from "react";

function Index(): JSX.Element {
  return (
    <div> {/* Wrap in a <div> */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: '16px',
            padding: '16px 24px'
          }
        }}
      />
      <BankTable />
    </div>
  );
}

export default Index;



  
// import * as React from 'react'
// import { BankModel } from './Models'
// import './index.css'

// import {
//   ColumnDef,
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
//   RowData
// } from '@tanstack/react-table'
// import getBanks from './makeData'
// declare module '@tanstack/react-table' {
//   interface TableMeta<TData extends RowData> {
//     updateData: (rowIndex: number, columnId: string, value: unknown) => void
//   }
// }

// const defaultColumn: Partial<ColumnDef<BankModel>> = {
//   cell: ({ getValue, row: { index }, column: { id }, table }) => {
//     const initialValue = getValue()
//     // We need to keep and update the state of the cell normally
//     const [value, setValue] = React.useState(initialValue)

//     // When the input is blurred, we'll call our table meta's updateData function
//     const onBlur = () => {
//       table.options.meta?.updateData(index, id, value)
//     }

//     // If the initialValue is changed external, sync it up with our state
//     React.useEffect(() => {
//       setValue(initialValue)
//     }, [initialValue])

//     return (
//       <input
//         value={value as string}
//         onChange={e => setValue(e.target.value)}
//         onBlur={onBlur}
//       />
//     )
//   },
// }
// console.log(getBanks());

// const defaultData: BankModel[] = getBanks();
// // const defaultData: Person[] = personData();

// const columnHelper = createColumnHelper<BankModel>()

// const columns = [
//   columnHelper.accessor('DisplayName', {
//     id: 'DisplayName', header: 'Display Name',
//   }),
//   columnHelper.accessor('BankName', {
//     id: 'BankName', header: 'Bank Name'
//   }),
//   columnHelper.accessor('BankAddress', {
//     id: 'BankAddress', header: 'Bank Address'
//   }),
//   columnHelper.accessor('AccountNumber', {
//     id: 'AccountNumber', header: 'Acc. Number'
//   }),
//   columnHelper.accessor('IFSCode', {
//     id: 'IFSCode', header: 'IFSC Code'
//   }),
//   columnHelper.accessor('Branch', {
//     id: 'Branch', header: 'Branch'
//   }),
//   columnHelper.accessor('gstID', {
//     id: 'gstID', header: 'GST ID'
//   }),
// ]


// export default function Bank() {
//   const [data, setData] = React.useState(() => [...defaultData])
//   const rerender = React.useReducer(() => ({}), {})[1]

//   const table = useReactTable({
//     data,
//     columns,
//     defaultColumn,
//     getCoreRowModel: getCoreRowModel(),
//   })

//   return (
//     <div className="p-2">
//       <table>
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map(header => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                       header.column.columnDef.header,
//                       header.getContext()
//                     )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map(row => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map(cell => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="h-4" />
//       <button onClick={() => rerender()} className="border p-2">
//         Refresh Data
//       </button>
//     </div>
//   )
// }