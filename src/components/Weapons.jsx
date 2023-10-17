import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { useContext } from "react";
import { DnDContext } from "../store/store";

function Weapons({ weapons }) {
  const { pageWeapons, setPageWeapons } = useContext(DnDContext);

  return (
    <div className="equipment-card flex flex-wrap ">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="default"
              page={pageWeapons}
              total={2}
              onChange={(page) => setPageWeapons(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px] table-wrapper",
        }}
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Category</TableColumn>

          <TableColumn>Properties</TableColumn>
          <TableColumn>Damage</TableColumn>
          <TableColumn>Cost</TableColumn>
        </TableHeader>

        <TableBody>
          {weapons.map((eq) => (
            <TableRow className="text-left" key={eq.slug}>
              <TableCell>{eq.name}</TableCell>
              <TableCell>{eq.category}</TableCell>

              <TableCell>
                {" "}
                {eq.properties?.map((e, i ) => (
                  <p key={i}>{e}</p>
                ))}{" "}
              </TableCell>
              <TableCell>
                {eq.damage_dice} {eq.damage_type}
              </TableCell>

              <TableCell>{eq.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Weapons;
