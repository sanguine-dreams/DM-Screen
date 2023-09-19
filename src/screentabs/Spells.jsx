import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import SpellCard from '../components/SpellCard';

function Spells() {
  const {spells} = useContext(DnDContext);
  
  return <div>
    {spells.map((spell)=>
    <SpellCard spell={spell.name}/>)}
  </div>;
}

export default Spells;
