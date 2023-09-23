import React, {useContext} from 'react';
import { DnDContext } from '../store/store';
import MonsterCard from '../components/MonsterCard';

function Monsters() {
  const {monsters} = useContext(DnDContext);
  console.log(monsters);
  return <div>
    {monsters.map((monster)=>
    <MonsterCard monster={monster} />)}
  </div>;
}

export default Monsters;
