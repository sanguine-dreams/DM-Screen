import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import ConditionCard from '../components/ConditionCard';

function Conditions() {
  
const {conditions} = useContext(DnDContext);
  return <div className='conditions'>
    {conditions.map((condition)=>
    <ConditionCard condition={condition.name}/>)}
    </div>;
}

export default Conditions;
