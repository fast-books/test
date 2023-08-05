import { Card, Col, Row, message } from 'antd';
import ItemCard from './ItemCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ItemAreaProps } from './Models';

const ITEM_CARD_SPAN = 18;
const DETAILS_CARD_SPAN = 6;
const GUTTER=16;//gives the spacing between the columnns

function ItemArea(props:ItemAreaProps) {
  const { id } = props;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`/api/items/${id}.json`)
      .then(res => {
        setTransactions(res.data);
      })
      .catch(error => {
        console.error(error);
        message.error('An error occurred while fetching items.');
      });
  }, [id]);

  return (
    <Row gutter={GUTTER}>
      <Col span={ITEM_CARD_SPAN}>
        <ItemCard transactions={transactions} />
      </Col>
      <Col span={DETAILS_CARD_SPAN}>
        <Card title="Kanaflex 1">Items details</Card>
      </Col>
    </Row>
  );
};

export default ItemArea;
