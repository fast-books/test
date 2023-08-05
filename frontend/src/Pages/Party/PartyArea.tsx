import { Card, Col, Row } from 'antd';
import PartyCard from './PartyCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


const PartyArea = (props: {id: number}) => {
  const {id} = props;
  const [parties,setParties]=useState([]);
  
  useEffect(() => {
      axios.get(`/api/party/${id}`)
      .then(res  => {setParties(res.data);})
      .catch(error => {console.error(error);});
  }, [id]);

  return ( 
    <Row gutter={16}>
      <Col span={18}><PartyCard parties={parties}/></Col>
      <Col span={6}><Card title="Bhagalpur Machinery">Party details</Card></Col>
    </Row>
  );
};

export default PartyArea;
