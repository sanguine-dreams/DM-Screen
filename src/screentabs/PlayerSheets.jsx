import React from "react";
import { useState } from "react";
import { keys } from "../utils/keys";
import { useEffect } from "react";
import { Textarea, Input, Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { LuEyeOff } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { getPlayers, postPlayers } from "../services/services";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import PlayerCharacter from "./PlayerCharacter";
import { useContext } from "react";
import { DnDContext } from "../store/store";

function Player() {
  const [newCharacter, setNewCharacter] = useState({
    Name: "",
    Race: "",
    Class: "",
    dex: "",
    cha: "",
    int: "",
    wis: "",
    str: "",
    con: "",
    DarkVision: false,
    WalkSpeed: "",
    Notes: "",
  });
  const [players, setPlayers] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  async function handleCreate() {
    const result = await postPlayers(newCharacter);

    setNewCharacter({
      Name: "",
      Race: "",
      Class: "",
      dex: "",
      cha: "",
      int: "",
      wis: "",
      str: "",
      con: "",
      DarkVision: false,
      WalkSpeed: "",
      Notes: "",
    });
    onOpen();
  }

  const toggleDarkVision = () => {
    setNewCharacter({
      ...newCharacter,
      DarkVision: !newCharacter.DarkVision, // Toggle the value
    });
  };

  useEffect(() => {
    async function fnn() {
      const result = await getPlayers(window.localStorage.getItem(keys.cId));
      setPlayers(result);
    }
    fnn();
    console.log(players);
  }, []);
  return (
    <>
      <div className="flex flex-row justify-end p-2" >
        <Button className="text-beige " variant="solid" color="danger" onPress={onOpen}>Add new Player Character</Button>
      </div>

      {players.map((player, i) => {
        return <PlayerCharacter player={player} key={i} />;
      })}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
                  <div>
                    <Input
                  
                      variant="underlined"
                      type="text"
                      label="Name"
                      value={newCharacter.Name}
                      className="max-w-xs"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, Name: e })
                      }
                    />
                    <div className="flex flex-row">
                      <Input
                        variant="underlined"
                        type="text"
                        label="Race"
                        value={newCharacter.Race}
                        className="w-2/12"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, Race: e })
                        }
                      />
                      <Input
                        variant="underlined"
                        type="text"
                        label="Class"
                        value={newCharacter.Class}
                        className="w-2/12"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, Class: e })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <Input
                        variant="underlined"
                        type="text"
                        label="Walk Speed"
                        value={newCharacter.WalkSpeed}
                        className="max-w-xs"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, WalkSpeed: e })
                        }
                      />
                      <Switch
                        isSelected={newCharacter.DarkVision}
                        onValueChange={toggleDarkVision}
                      >
                        Darkvision
                      </Switch>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                      <Input
                        variant="underlined"
                        type="text"
                        label="Wis"
                        value={newCharacter.wis}
                        className="w-1/2"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, wis: e })
                        }
                      />
                      <Input
                        variant="underlined"
                        type="text"
                        label="Int"
                        value={newCharacter.int}
                        className="w-1/2"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, int: e })
                        }
                      />
                      <Input
                        variant="underlined"
                        type="text"
                        label="Cha"
                        value={newCharacter.cha}
                        className="w-1/2"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, cha: e })
                        }
                      />
                      <Input
                        variant="underlined"
                        type="text"
                        label="Con"
                        value={newCharacter.con}
                        className="w-1/2"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, con: e })
                        }
                      />
                      <Input
                        variant="underlined"
                        type="text"
                        label="Str"
                        value={newCharacter.str}
                        className="w-1/2"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, str: e })
                        }
                      />
                      <Input
                        variant="underlined"
                        type="text"
                        label="Dex"
                        value={newCharacter.dex}
                        className="w-1/2"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, dex: e })
                        }
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleCreate}>
                  Create Character
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Player;
