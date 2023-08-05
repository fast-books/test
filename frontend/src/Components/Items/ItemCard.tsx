import { Table } from 'antd';
import { ItemCardRow } from './Models';

interface ItemCardProps {
  transactions: never[];
}

export default function ItemCard  (props:ItemCardProps)  {
  const {transactions} = props;
  const originData: ItemCardRow[] = [];
  transactions.map((transaction:any) => {
    originData.push({
      id: transaction.id,
      party: transaction.invoice.party.name,
      quantity: transaction.quantity,
      price: transaction.price,
      address: transaction.invoice.party.address,
      date:transaction.invoice.dateInvoice,
    });
  });

  const columns = [
    {title: 'Date', dataIndex: 'date', width: '15%',},
    {title: 'Party', dataIndex: 'party', width: '25%',},
    {title: 'Quantity', dataIndex: 'quantity', width: '15%',},
    {title: 'Price', dataIndex: 'price',},
];

  return(
    <>
        <Table
          bordered
          dataSource={originData}
          columns={columns}
          size="small"
        />
    </>
  );
}