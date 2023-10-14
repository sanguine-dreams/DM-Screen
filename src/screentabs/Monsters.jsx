import React, { useContext } from "react";
import { DnDContext } from "../store/store";
import MonsterCard from "../components/MonsterCard";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
  Pagination,
} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";

function Monsters() {
  const {
    monsters,
    pageMonster,
    count,
    setPageMonster,
    monsterFiltering,
    setMonsterFiltering,
  } = useContext(DnDContext);

  const pages = Math.ceil(2435/ 49);

  function controlCR() {
    monsterFiltering.CR
      ? setMonsterFiltering({ ...monsterFiltering, CR: false })
      : setMonsterFiltering({ ...monsterFiltering, CR: true });
    console.log(monsterFiltering.CR);
  }

  return (
    <div className="scale-x-[-1]">
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
              page={pageMonster}
              total={pages}
              onChange={(page) => setPageMonster(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader >
          <TableColumn>Monster Name</TableColumn>
          <TableColumn>
            <button onClick={controlCR}>CR</button>
          </TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Size</TableColumn>
        </TableHeader>

        <TableBody>
          {monsters?.map((i) => (
            <TableRow  key={i.slug} className="text-left">
              <TableCell>{i.name}</TableCell>
              <TableCell>{i.cr}</TableCell>
              <TableCell>{i.type}</TableCell>
              <TableCell>{i.size}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Monsters;
