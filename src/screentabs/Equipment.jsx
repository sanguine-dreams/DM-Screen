import React, {useContext} from 'react';
import { DnDContext } from '../store/store';
import EquipmentCard from '../components/EquipmentCard';
import {Accordion, AccordionItem} from "@nextui-org/react";

function Equipment() {
  const {weapons, armor, magicItems} = useContext(DnDContext);

  return <div className='scale-x-[-1]'>

<Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Magic Items">
        <EquipmentCard equipment={magicItems}/>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Weapons">
      <EquipmentCard equipment={weapons}/>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Armor">
      <EquipmentCard equipment={armor}/>
      </AccordionItem>
    </Accordion>
  </div>;
}

export default Equipment;
