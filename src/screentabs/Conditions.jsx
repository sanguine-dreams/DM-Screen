import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import ConditionCard from '../components/ConditionCard';
import {Accordion, AccordionItem} from "@nextui-org/react";

function Conditions() {

  const {conditions} = useContext(DnDContext);
  return (
    <div className='h-full'>

      {conditions.map((condition) => <Accordion>
   
      <AccordionItem key="1" aria-label="Accordion 1" title={`${condition.name}`}>
      {condition.desc}
      </AccordionItem>
    </Accordion>) }

    </div>
  )
}

export default Conditions;
