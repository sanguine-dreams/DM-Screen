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
    <div>
      <Button onClick={() => updatePlayers(newPlayer)}
        isIconOnly color="" aria-label="Like">
          <RiQuillPenFill />
        </Button>
        <Button 
        onClick={() => deletePlayer(newPlayer.id)}
        isIconOnly color="" aria-label="Take a photo">
          <RiChatDeleteFill />
        </Button>
      <div>
        <Input
          variant="underlined"
          type="text"
          label="Name"
          defaultValue={newPlayer.Name}
          className="max-w-xs"
          onValueChange={(e) =>
            setNewPlayer({ ...newPlayer, Name: e })
          }
        />
        <div className="flex flex-row">
          <Input
            variant="underlined"
            type="text"
            label="Race"
            defaultValue={newPlayer.Race}
            className="w-2/12"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, Race: e })
            }
          />
          <Input
            variant="underlined"
            type="text"
            label="Class"
            defaultValue={newPlayer.Class}
            className="w-2/12"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, Class: e })
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
            defaultValue={newPlayer.WalkSpeed}
            className="max-w-xs"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, WalkSpeed: e })
            }
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
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <Input
            variant="underlined"
            type="text"
            label="Wis"
            defaultValue={newPlayer.wis}
            className="w-1/2"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, wis: e })
            }
          />
          <Input
            variant="underlined"
            type="text"
            label="Int"
            defaultValue={newPlayer.int}
            className="w-1/2"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, int: e })
            }
          />
          <Input
            variant="underlined"
            type="text"
            label="Cha"
            defaultValue={newPlayer.cha}
            className="w-1/2"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, cha: e })
            }
          />
          <Input
            variant="underlined"
            type="text"
            label="Con"
            defaultValue={newPlayer.con}
            className="w-1/2"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, con: e })
            }
          />
          <Input
            variant="underlined"
            type="text"
            label="Str"
            defaultValue={newPlayer.str}
            className="w-1/2"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, str: e })
            }
          />
          <Input
            variant="underlined"
            type="text"
            label="Dex"
            defaultValue={newPlayer.dex}
            className="w-1/2"
            onValueChange={(e) =>
              setNewPlayer({ ...newPlayer, dex: e })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerCharacter;
