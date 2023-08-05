import { useState } from 'react';
import ItemArea from '../../Components/Items/ItemArea';
import Itemlist from '../../Components/Items/Itemlist';
import './Stock.css';

export default function Stock (){
  const [id, setId]=useState(1);
  const reRenderStock = (id:number) =>  setId(id);

  return (
    <div className='inventory'>
      <div className="itemarea"><ItemArea id={id}/></div>
      <div className="stockItems"><Itemlist reRenderStock={reRenderStock}/></div>
    </div>
  )
}
