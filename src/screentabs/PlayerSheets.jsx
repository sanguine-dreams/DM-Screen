import React from "react";
import { useState } from "react";
import { keys } from "../utils/keys";
import { useEffect } from "react";
import { Textarea, Input, Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { LuEyeOff } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import {
  deletePlayer,
  getPlayers,
  postPlayers,
  updatePlayers,
} from "../services/services";
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
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [toggle, setToggle] = useState(false);

  async function handleDelete(id) {
    deletePlayer(id);
    alert('Player Deleted');
    setPlayers((prev) => prev.filter((x) => x.id !== id));
  }

  function handleUpdate(body) {
    updatePlayers(body);
    fetchPlayers();
  }

  async function handleCreate() {
    await postPlayers(newCharacter);

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
fetchPlayers();
    onClose();
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    console.log("calls service");
    const result = await getPlayers(window.localStorage.getItem(keys.cId));
    console.log("finishes service");
    setPlayers(result);
  };
  return (
    <>
      <div className="flex flex-row justify-end  px-2 pt-3 pb-1 items-center">
        <Button
          className="text-beige "
          variant="solid"
          color="danger"
          onPress={onOpen}
        >
          Add new Player Character
        </Button>
      </div>

      {players.map((player, i) => {
        return (
          <PlayerCharacter
            player={player}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            key={i}
          />
        );
      })}

      <Modal
        className="bg-orange-100 "
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Character
              </ModalHeader>
              <ModalBody>
                <div className=" flex flex-row ">
                  <div>
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Name"
                      defaultValue={newCharacter.Name}
                      className="max-w-xs "
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, Name: e })
                      }
                    />
                    <div className="flex flex-row justify-start">
                      <Input
                        color="danger"
                        variant="underlined"
                        type="text"
                        label="Race"
                        defaultValue={newCharacter.Race}
                        className="w-6/12"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, Race: e })
                        }
                      />
                      <Input
                        color="danger"
                        variant="underlined"
                        type="text"
                        label="Class"
                        defaultValue={newCharacter.Class}
                        className="w-6/12"
                        onValueChange={(e) =>
                          setNewCharacter({ ...newCharacter, Class: e })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col content-between gap-4">
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Walk Speed"
                      defaultValue={newCharacter.WalkSpeed}
                      className="max-w-xs my-align-right"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, WalkSpeed: e })
                      }
                    />

                    <Button
                      className="text-brown"
                      variant="light"
                      onClick={() =>
                        setNewCharacter({
                          ...newCharacter,
                          DarkVision: !newCharacter.DarkVision,
                        })
                      }
                    >
                      {newCharacter.DarkVision
                        ? "Dark Vision"
                        : "No Dark Vision"}
                    </Button>
                  </div>

                  <div className="grid grid-rows-2 grid-flow-col place-items-center ">
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Wis"
                      defaultValue={newCharacter.WIS}
                      className="w-1/2 "
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, wis: e })
                      }
                    />
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Int"
                      defaultValue={newCharacter.INT}
                      className="w-1/2"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, int: e })
                      }
                    />
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Cha"
                      defaultValue={newCharacter.CHA}
                      className="w-1/2"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, cha: e })
                      }
                    />
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Con"
                      defaultValue={newCharacter.CON}
                      className="w-1/2"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, con: e })
                      }
                    />
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Str"
                      defaultValue={newCharacter.STR}
                      className="w-1/2"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, str: e })
                      }
                    />
                    <Input
                      color="danger"
                      variant="underlined"
                      type="text"
                      label="Dex"
                      defaultValue={newCharacter.DEX}
                      className="w-1/2"
                      onValueChange={(e) =>
                        setNewCharacter({ ...newCharacter, dex: e })
                      }
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  className="text-beige"
                  onPress={handleCreate}
                >
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
