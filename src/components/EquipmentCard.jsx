import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function EquipmentCard({ equipment }) {
  return (
    <div className="equipment-card flex flex-wrap ">
      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Rarity</TableColumn>
        </TableHeader>

        <TableBody>
          {equipment.map((eq) => (
            <TableRow className="text-left">
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

export default EquipmentCard;
