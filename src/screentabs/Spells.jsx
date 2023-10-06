import * as React from 'react';
import { useContext, useState } from 'react';
import { DnDContext } from '../store/store';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";

import SpellCard from '../components/SpellCard';


export default function Spells() {
  const { spells, page, setPage, rowsPerPage, setRowsPerPage, spellCount } =
    useContext(DnDContext);

    const pages = Math.ceil(spellCount / rowsPerPage);

  return (
    <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name">NAME</TableColumn>
        <TableColumn key="role">ROLE</TableColumn>
        <TableColumn key="status">STATUS</TableColumn>
      </TableHeader>
      <TableBody items={spells}>
        {(spell) => (
          <TableRow key={spell.name}>
            <TableCell>{spell.name}</TableCell>
            <TableCell>{spell.name}</TableCell>
            <TableCell>{spell.name}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
