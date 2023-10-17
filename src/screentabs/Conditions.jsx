import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import ConditionCard from '../components/ConditionCard';
import {Accordion, AccordionItem} from "@nextui-org/react";

function Conditions() {

  const {conditions} = useContext(DnDContext);
  return (
    <div className='px-4 h-full text-left font-[Modesto-expanded]'>

      {conditions.map((condition,i) => <Accordion>
   
      <AccordionItem  key={i}  title={`${condition.name}`}>
        <div className='taper'></div>
      {condition.desc.slice(1, condition.desc.length)}
      </AccordionItem>
    </Accordion>) }

    </div>
  )
}

export default Conditions;
