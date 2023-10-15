import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import ConditionCard from '../components/ConditionCard';
import {Accordion, AccordionItem} from "@nextui-org/react";

function Conditions() {

  const {conditions} = useContext(DnDContext);
  return (
    <div className='h-full text-left'>

      {conditions.map((condition,i) => <Accordion>
   
      <AccordionItem key={i} aria-label="Accordion 1" title={`${condition.name}`}>
      {condition.desc}
      </AccordionItem>
    </Accordion>) }

    </div>
  )
}

export default Conditions;
