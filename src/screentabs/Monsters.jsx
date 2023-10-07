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
  Chip, Pagination
} from "@nextui-org/react";

function Monsters() {
  const { monsters, page, rowsPerPage, setPage} = useContext(DnDContext);
  console.log(monsters);

  // const pages = Math.ceil(spellCount / rowsPerPage);

  return (
    <div className="scale-x-[-1]">
      {/* {monsters.map((monster)=>
    <MonsterCard monster={monster} />)} */}

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
            total={10}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
        <TableHeader>
          <TableColumn>Monster Name</TableColumn>
          <TableColumn>CR Rating</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Size</TableColumn>
        </TableHeader>

        <TableBody>
          {monsters?.map((i) => (
            <TableRow>
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
