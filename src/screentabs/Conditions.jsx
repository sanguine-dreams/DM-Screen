import React, { useContext } from 'react';
import { DnDContext } from '../store/store';
import ConditionCard from '../components/ConditionCard';
import {Accordion, AccordionItem} from "@nextui-org/react";

function Conditions() {

  const {conditions} = useContext(DnDContext);
  return (
    <div className='h-full grid grid-cols-3'>
      { conditions.map((condition) => <Accordion>
        <ConditionCard condition={condition}/>
      {/* <AccordionItem key="1" aria-label="Accordion 1" title={`${condition}`}>
      </AccordionItem> */}
    </Accordion>) }
    </div>
  )
}

export default Conditions;
