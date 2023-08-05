import { useState } from 'react';
import PartyArea from './PartyArea';
import PartyList from './PartyList';
// import './Stock.css';

export default function Party (){
  const [id, setId]=useState(1);
  const reRenderParty = (id:number) =>  setId(id)

  return (
    <div className='party'>
      <div className="partyArea"><PartyArea id={id}/></div>
      <div className="partyItems"><PartyList reRenderParty={reRenderParty}/></div>
    </div>
  )
}
