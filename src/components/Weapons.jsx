import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
  import { useContext, useState } from 'react';
import { DnDContext } from '../store/store';
  
  function Weapons({ weapons }) {
    const { spells, pageWeapons, setPageWeapons, rowsPerPage, setRowsPerPage, spellCount } =
    useContext(DnDContext);

    return (
      <div className="equipment-card flex flex-wrap "
      >
        <Table
        isStriped
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={pageWeapons}
              total={2}
              onChange={(page) => setPageWeapons(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Damage</TableColumn>
            <TableColumn>Properties</TableColumn>
            <TableColumn>Cost</TableColumn>
          </TableHeader>
  
          <TableBody>
            {weapons.map((eq) => (
              <TableRow className="text-left">
                <TableCell>{eq.name}</TableCell>
                <TableCell>{eq.category}</TableCell>

                <TableCell>{eq.damage_dice} {eq.damage_type}</TableCell>
                <TableCell> {eq.properties} </TableCell>
                

                <TableCell>{eq.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  export default Weapons;
  