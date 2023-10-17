import React, { useEffect, useState } from "react";

import { Textarea, Input } from "@nextui-org/react";
import {
  deleteNote,
  getNotes,
  postNotes,
  updateNotes,
} from "../services/services";
import EachNote from "../components/EachNote";
import { keys } from "../utils/keys";

function Notes() {
  const [newNote, setNewNote] = useState({
    Title: "",
    Content: "",
    CampaignHead: window.localStorage.getItem(keys.cId),
  });
  const [notes, setNotes] = useState([]);

  async function handleDelete(id) {
    deleteNote(id);
    alert("Note Deleted");
    setNotes((prev) => prev.filter((x) => x.id !== id));
  }

  function handleUpdate(body) {
    updateNotes(body);
    fetchNotes();
  }

  async function handleCreate() {
    if (!newNote.Content || !newNote.Title) {
      alert("some data are empty");
      return;
    }
    await postNotes(newNote);
    fetchNotes();
    setNewNote({
      Title: "",
      Content: "",
      CampaignHead: window.localStorage.getItem(keys.cId),
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const result = await getNotes(window.localStorage.getItem(keys.cId));
    setNotes(result);
  };

  return (
    <div className="scale-x-[-1]">
      <h1 className="py-3">DM Notes</h1>

      {notes.map((note, i) => {
        return (
          <EachNote
            value={note}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            key={i}
          />
        );
      })}

      <div className={`m-4 border-2 border-brown rounded-md`}>
        <Input
          type="text"
          variant="underlined"
          value={newNote.Title}
          placeholder="Title"
          onValueChange={(e) => setNewNote({ ...newNote, Title: e })}
          required
        />
        <Textarea
          variant="underlined"
          placeholder="Enter your description"
          value={newNote.Content}
          onValueChange={(e) => setNewNote({ ...newNote, Content: e })}
          required
        />
        <button onClick={handleCreate}> confirm add</button>
      </div>
    </div>
  );
}

export default Notes;
