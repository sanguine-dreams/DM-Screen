import React, { useContext, useState } from "react";
import { DnDContext } from "../store/store";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  Button,
} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import MonsterModal from "../components/MonsterModal";

function Monsters() {
  const {
    monsters,
    pageMonster,
    count,
    setPageMonster,
    monsterFiltering,
    setMonsterFiltering,
  } = useContext(DnDContext);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [renderMonster, setRenderMonster] = useState({});

  function handleModal(m) {
    setRenderMonster(m);
    onOpen()
  }

  const pages = Math.ceil(2435 / 49);

  function controlCR() {
    monsterFiltering.CR
      ? setMonsterFiltering({ ...monsterFiltering, CR: false })
      : setMonsterFiltering({ ...monsterFiltering, CR: true });
    console.log(monsterFiltering.CR);
  }

  return (
    <div className="scale-x-[-1]">
      <Table
      
       
        bottomContent={
          <div className="flex w-full justify-center bg-red-200">
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
          wrapper: "min-h-[222px] table-wrapper",
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
            <TableRow key={i.slug} className="text-left">
              <TableCell>
                <Button variant="light" className="text-brown" onPress={() =>handleModal(i)}>{i.name}</Button>
              </TableCell>
              <TableCell>{i.cr}</TableCell>
              <TableCell>{i.type}</TableCell>
              <TableCell>{i.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal className="bg-orange-100 " isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Details</ModalHeader>
              <ModalBody>
              <MonsterModal monster={renderMonster} />
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Monsters;
