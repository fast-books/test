import React, { useState } from "react";
import "./index.css";
import { Table } from "antd";

const intialData = [
  {
    key: "1",
    name: "John Brown",
    age: 35,
    country: "United States",
    email: "john.brown@example.com",
    phone: "123-456-7890"
  },
  {
    key: "2",
    name: "3123 123",
    age: 25,
    country: "Canada",
    email: "3123.123@example.com",
    phone: "987-654-3210"
  },
  {
    key: "3",
    name: "Jane Doe",
    age: 30,
    country: "United States",
    email: "jane.doe@example.com",
    phone: "123-456-7890"
  },
  {
    key: "4",
    name: "John Smith",
    age: 40,
    country: "Canada",
    email: "john.smith@example.com",
    phone: "987-654-3210"
  }
];

 export default function Sale(){
  const [data, setData] = useState(intialData);
  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>, index:  number, key: string|number) => {
    setData((prevData) => {
      const newData = [...prevData];
      const newItem = { ...newData[index] };
      newItem[key] = value;
      newData[index] = newItem;
      return newData;
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, _, index) => (
        <input value={text} onChange={(v) => onChange(v, index, "name")} />
      ),
      shouldCellUpdate: (record, prevRecord) => {
        console.log(record.name, prevRecord.name);
        return record.name !== prevRecord.name;
      }
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text: string | number | readonly string[] | undefined, _: any, index: number) => (
        <input value={text} onChange={(v) => onChange(v, index, "age")} />
      ),
      shouldCellUpdate: (record: { age: number; }, prevRecord: { age: number; }) => {
        console.log(record.age, prevRecord.age);
        return record.age !== prevRecord.age;
      }
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    }
  ];

  return <Table columns={columns} dataSource={data} />;
};
