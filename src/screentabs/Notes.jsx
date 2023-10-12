import React, { useContext, useEffect, useState } from "react";

import { Textarea, Input, Button } from "@nextui-org/react";
import { getNotes, postNotes } from "../services/services";
import EachNote from "../components/EachNote";
import { DnDContext } from "../store/store";

function Notes() {
  const { notes, setNotes } = useContext(DnDContext);
  const [newNote, setNewNote] = useState({ Title: "", Content: "" });

  async function handleCreate() {
    await postNotes(newNote);
    setNewNote({ Title: '', Content:''});
  }

  useEffect(() => {
    async function fnn() {
      const result = await getNotes();
      setNotes(result);
    }
    fnn();
  }, [notes]);
  return (
    <div className="scale-x-[-1]">
      <h1>Notesss</h1>

      {notes.map((note) => {
        return <EachNote value={note} />;
      })}

      <div className={`m-4 border-2 border-red-900 rounded-md`}>
        <button onClick={handleCreate}> confirm</button>
        <Input
          type="text"
          variant="underlined"
          value={newNote.Title}
          onValueChange={(e) => setNewNote({ ...newNote, Title: e})}
          required
        />
        <Textarea
          variant="underlined"
          placeholder="Enter your description"
          value={newNote.Content}
          onValueChange={(e) =>
            setNewNote({ ...newNote, Content: e })
          }
          required
        />
      </div>
    </div>
  );
}

export default Notes;
