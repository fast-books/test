import { AutoComplete } from 'antd';
const options = [
  { value: 'Burns Bay Road', key:1 },
  { value: 'Downing Street', key:2 },
  { value: 'Wall Street', key:3 },
];

const InputItems = () => {
  return (
    <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
  )
}

export default InputItems;