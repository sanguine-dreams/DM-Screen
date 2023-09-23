import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import ConditionCard from '../components/ConditionCard';

function Conditions() {
  
const {conditions} = useContext(DnDContext);
  return <div className='conditions grid'>
    {conditions.map((condition)=>
    <ConditionCard condition={condition}/>)}
    </div>;
}

export default Conditions;
