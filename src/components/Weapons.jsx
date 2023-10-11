import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
  import { useContext, useState } from 'react';
import { DnDContext } from '../store/store';
  
  function Weapons({ weapons }) {
    const { spells, page, setPage, rowsPerPage, setRowsPerPage, spellCount } =
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
              page={page}
              total={2}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Rarity</TableColumn>
          </TableHeader>
  
          <TableBody>
            {weapons.map((eq) => (
              <TableRow>
                <TableCell>{eq.name}</TableCell>
                <TableCell>{eq.type}</TableCell>
                <TableCell>{eq.rarity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  export default Weapons;
  