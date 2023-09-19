import React, {useContext} from 'react';
import { DnDContext } from '../store/store';
import EquipmentCard from '../components/EquipmentCard';

function Equipment() {
  const {equipments} = useContext(DnDContext);
  console.log(equipments);
  return <div>
    {equipments.map((equipment)=>
    <EquipmentCard equipment={equipment.name} />)}
  </div>;
}

export default Equipment;
