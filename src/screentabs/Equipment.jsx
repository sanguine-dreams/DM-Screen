import React, {useContext} from 'react';
import { DnDContext } from '../store/store';
import EquipmentCard from '../components/EquipmentCard';
import {Accordion, AccordionItem} from "@nextui-org/react";
import MagicItems from '../components/MagicItems';
import Weapons from '../components/Weapons';
import Armor from '../components/Armor';

function Equipment() {
  const {weapons, armor, magicItems} = useContext(DnDContext);

  return <div className='scale-x-[-1]'>

<Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Magic Items">
        <MagicItems magicItems={magicItems}/>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Weapons">
      <Weapons weapons={weapons}/>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Armor">
      <Armor armor={armor} />
      </AccordionItem>
    </Accordion>
  </div>;
}

export default Equipment;
