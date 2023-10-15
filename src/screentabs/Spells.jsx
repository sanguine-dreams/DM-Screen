import * as React from 'react';
import { useContext, useState } from 'react';
import { DnDContext } from '../store/store';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";

import SpellCard from '../components/SpellCard';


export default function Spells() {
  const { spells, pageSpell, setPageSpell} =
    useContext(DnDContext);

    const pages = Math.ceil(1435 / 49);
    

  return (
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
            page={pageSpell}
            total={pages}
            onChange={(page) => setPageSpell(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>LEVEL</TableColumn>
        <TableColumn>CASTING TIME</TableColumn>
        <TableColumn>DURATION</TableColumn>
        <TableColumn>RANGE</TableColumn>
      </TableHeader>
      <TableBody items={spells}>
        {(spell) => (
          <TableRow key={spell.slug} className="text-left">
            <TableCell className="text-left">{spell.name}</TableCell>
            <TableCell>{spell.level}</TableCell>
            <TableCell>{spell.casting_time.slice(0, 10)}</TableCell>
            <TableCell>{spell.duration}</TableCell>
            <TableCell>{spell.range}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
