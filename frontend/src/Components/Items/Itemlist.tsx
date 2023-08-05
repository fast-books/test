import { useEffect, useState } from "react";
import {Input} from "antd";
import axios from "axios";
const { Search } = Input;

type Props = {
  reRenderStock: (id: number) => void
}

const Itemlist = (props:Props) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items.json')
      .then(res=>{setItems(res.data);
        setFilteredItems(res.data);
        })
      .catch(error => {console.error(error);});
  }, []);

  const filterBySearch = (event: { target: { value: any; }; }) => {
      const pattern = new RegExp([...event.target.value].join(".*"), "i");
      setFilteredItems([...items].filter((i:any) => pattern.test(i.name)))
  };

  const changeItem = (id:number) => {
    props.reRenderStock(id);
  }

  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <Search placeholder="input search text" onChange={filterBySearch}/>
      </div>
      <div className="item-container">
          {filteredItems.map((item: any) => (
            <div className="item-ind-block" key={item.id} onClick={()=>{changeItem(item.id)}}> {item.name} - {item.stock} </div>
          ))}
      </div>
    </div>
  );
}

export default Itemlist