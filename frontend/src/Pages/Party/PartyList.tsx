import { useEffect, useState } from "react";
import {Input} from "antd";
import axios from "axios";
const { Search } = Input;


const PartyList = (props: {reRenderParty:((id: number) => void)}) => {
  const [parties, setParties] = useState([]);
  const [filteredParties, setFilteredParties] = useState([]);

  useEffect(() => {
    axios.get('/api/parties.json')
      .then(res=>{setParties(res.data);
        setFilteredParties(res.data);
        })
      .catch(error => {console.error(error);}); 
  }, []);

  const filterBySearch = (event: { target: { value: any; }; }) => {
    const query = event.target.value;
    if(parties != null)
    {
      var updatedParties= [...parties];
      updatedParties=updatedParties.filter((party: any)=>{
        return party.name.toLowerCase().indexOf(query.toLowerCase())!==-1;
      });
      setFilteredParties(updatedParties);
    }
  };

  const changeParty = (id:number) => {
    props.reRenderParty(id);
  }

  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <Search placeholder="input search text" onChange={filterBySearch}/>
      </div>
      <div className="party-container">
          {filteredParties.map((party: any) => (
            <div className="party-ind-block" key={party.id} onClick={()=>{changeParty(party.id)}}> {party.name}  </div>
          ))}
      </div>
    </div>
  );
};

export default PartyList;