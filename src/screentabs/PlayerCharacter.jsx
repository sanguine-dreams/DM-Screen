import { RiQuillPenFill } from "react-icons/ri";
import { RiChatDeleteFill } from "react-icons/ri";
import React, { useState } from "react";

import { Input, Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { LuEyeOff } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { updatePlayers, deletePlayer } from "../services/services";

function PlayerCharacter({ player }) {
  const [newPlayer, setNewPlayer] = useState(player);

  return (
    <div className="characters m-2 p-2 border-double border-2 border-brown rounded-md ">
      <div className="flex flex-row justify-end">
        <Button
          onClick={() => updatePlayers(newPlayer)}
          isIconOnly
          color="danger"
          variant="light"
        >
          <RiQuillPenFill />
        </Button>
        <Button
          onClick={() => deletePlayer(newPlayer.id)}
          isIconOnly
          color="danger"
          variant="light"
        >
          <RiChatDeleteFill />
        </Button>
      </div>
      <div className=" flex flex-row ">
        <div>
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Name"
            defaultValue={newPlayer.Name}
            className="max-w-xs "
            onValueChange={(e) => setNewPlayer({ ...newPlayer, Name: e })}
          />
          <div className="flex flex-row justify-start">
            <Input
              color="danger"
              variant="underlined"
              type="text"
              label="Race"
              defaultValue={newPlayer.Race}
              className="w-6/12"
              onValueChange={(e) => setNewPlayer({ ...newPlayer, Race: e })}
            />
            <Input
              color="danger"
              variant="underlined"
              type="text"
              label="Class"
              defaultValue={newPlayer.Class}
              className="w-6/12"
              onValueChange={(e) => setNewPlayer({ ...newPlayer, Class: e })}
            />
          </div>
        </div>
        <div className="flex flex-col content-between">
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Walk Speed"
            defaultValue={newPlayer.WalkSpeed}
            className="max-w-xs my-align-right"
            onValueChange={(e) => setNewPlayer({ ...newPlayer, WalkSpeed: e })}
          />
          <Switch
            size="lg"
            color="success"
            isSelected={newPlayer.DarkVision}
            thumbIcon={({ isSelected, className }) =>
              newPlayer.DarkVision ? (
                <LuMoon className={className} />
              ) : (
                <LuEyeOff className={className} />
              )
            }
          >
            Darkvision
          </Switch>
        </div>

        <div className="grid grid-rows-2 grid-flow-col place-items-center ">
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Wis"
            defaultValue={newPlayer.WIS}
            className="w-1/2 "
            onValueChange={(e) => setNewPlayer({ ...newPlayer, wis: e })}
          />
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Int"
            defaultValue={newPlayer.INT}
            className="w-1/2"
            onValueChange={(e) => setNewPlayer({ ...newPlayer, int: e })}
          />
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Cha"
            defaultValue={newPlayer.CHA}
            className="w-1/2"
            onValueChange={(e) => setNewPlayer({ ...newPlayer, cha: e })}
          />
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Con"
            defaultValue={newPlayer.CON}
            className="w-1/2"
            onValueChange={(e) => setNewPlayer({ ...newPlayer, con: e })}
          />
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Str"
            defaultValue={newPlayer.STR}
            className="w-1/2"
            onValueChange={(e) => setNewPlayer({ ...newPlayer, str: e })}
          />
          <Input
            color="danger"
            variant="underlined"
            type="text"
            label="Dex"
            defaultValue={newPlayer.DEX}
            className="w-1/2"
            onValueChange={(e) => setNewPlayer({ ...newPlayer, dex: e })}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerCharacter;
