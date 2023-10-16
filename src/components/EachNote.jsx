import React, { useEffect, useState } from "react";

import { Textarea, Input, Button } from "@nextui-org/react";
import { RiQuillPenFill } from "react-icons/ri";
import { RiChatDeleteFill } from "react-icons/ri";
import { updateNotes, deleteNote } from "../services/services";

function EachNote({ value }) {
  const [newNote, setNewNote] = useState(value);

  return (
    <div>
      <div className="m-4 border-2 border-brown rounded-md">
        <div className="flex flex-row justify-end">
          <Button
            onClick={() => updateNotes(newNote)}
            isIconOnly
            color="danger"
            variant="light"
    
          >
            <RiQuillPenFill />
          </Button>
          <Button
            onClick={() => deleteNote(newNote.id)}
            isIconOnly
            color="danger"
            variant="light"
          >
            <RiChatDeleteFill />
          </Button>
        </div>

        <Input
          type="text"
          variant="underlined"
          value={newNote.Title}
          onValueChange={(e) => setNewNote({ ...newNote, Title: e })}
        />

        <Textarea
          variant="underlined"
          placeholder="Enter your description"
          value={newNote.Content}
          onValueChange={(e) => setNewNote({ ...newNote, Content: e })}
        />
      </div>
    </div>
  );
}

export default EachNote;
