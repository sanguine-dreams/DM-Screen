import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useContext } from "react";
import { DnDContext } from "../store/store";

function Armor({ armor }) {
  const { armorFiltering, setArmorFiltering } = useContext(DnDContext);

  function controlCategory() {
    armorFiltering ? setArmorFiltering(false) : setArmorFiltering(true);
  }

  return (
    <div className="equipment-card flex flex-wrap ">
      <Table
        aria-label="Example table with client side pagination"
        classNames={{
          wrapper: "min-h-[222px] table-wrapper",
        }}
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>
            Category
            <button onClick={controlCategory}>Category</button>
          </TableColumn>
          <TableColumn>Cost</TableColumn>
        </TableHeader>

        <TableBody>
          {armor.map((eq) => (
            <TableRow className="text-left" key={eq.slug}>
              <TableCell>{eq.name}</TableCell>
              <TableCell>{eq.ac_string}</TableCell>
              <TableCell>{eq.category}</TableCell>
              <TableCell>{eq.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Armor;
