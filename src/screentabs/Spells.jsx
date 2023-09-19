import React, { useContext } from 'react';
import { DnDContext } from '../store/store';

function Spells() {
  const {spells} = useContext(DnDContext);
  
  return <div>
    {spells.map((spell)=>
    <h1>{spell.name}</h1>)}
  </div>;
}

export default Spells;
