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

function MagicItems({ magicItems }) {
  const { pageMagicItems, setPageMagicItems } = useContext(DnDContext);

  const pages = Math.ceil(1072 / 49);

  return (
    <div className="equipment-card flex flex-wrap ">
      <Table
      aria-label="Magic Items table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={pageMagicItems}
              total={pages}
              onChange={(page) => setPageMagicItems(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px] table-wrapper",
        }}
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Rarity</TableColumn>
          <TableColumn>Attunement</TableColumn>
        </TableHeader>

        <TableBody>
          {magicItems.map((eq) => (
            <TableRow className="text-left" key={eq.slug}>
              <TableCell>{eq.name}</TableCell>
              <TableCell>{eq.type}</TableCell>
              <TableCell>{eq.rarity}</TableCell>
              <TableCell>{eq.requires_attunement}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MagicItems;
