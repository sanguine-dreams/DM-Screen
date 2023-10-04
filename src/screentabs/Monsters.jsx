import React, {useContext} from 'react';
import { DnDContext } from '../store/store';
import MonsterCard from '../components/MonsterCard';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/react";

function Monsters() {
  const {monsters} = useContext(DnDContext);
  console.log(monsters);

  return <div className='scale-x-[-1]'> 

    {/* {monsters.map((monster)=>
    <MonsterCard monster={monster} />)} */}


<Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Monster Name</TableColumn>
          <TableColumn>CR Rating</TableColumn>
        </TableHeader>

        <TableBody>
          {monsters?.map((i) => (
            <TableRow>
              <TableCell>{i.name}</TableCell>
              <TableCell>
              {i.cr}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


  </div>;
}

export default Monsters;

