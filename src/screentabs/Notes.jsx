import React, { useContext, useEffect, useState } from "react";

import { Textarea, Input, Button } from "@nextui-org/react";
import { getNotes, postNotes } from "../services/services";
import EachNote from "../components/EachNote";
import { DnDContext } from "../store/store";
import { keys } from "../utils/keys";

function Notes() {
const [newNote, setNewNote] = useState({Title: '', Content:'', CampaignHead: window.localStorage.getItem(keys.cId)})
  const [notes, setNotes ] = useState([]);


  async function handleCreate() {
    if(!newNote.Content || !newNote.Title){
      alert('some data are empty')
      return
    }
   const result = await postNotes(newNote);
    setNotes([...notes, result]);
  
    setNewNote({Title: '', Content:'', CampaignHead: window.localStorage.getItem(keys.cId)});
  }

  useEffect(() => {
    async function fnn() {
      const result = await getNotes(window.localStorage.getItem(keys.cId));
      setNotes(result);
    
    }
    fnn();
    console.log(`cid: ${window.localStorage.getItem(keys.cId)}`)
  }, []);
  return (
    <div className="scale-x-[-1]">
      <h1 className="py-3">DM Notes</h1>

      {notes.map((note,i) => {
        return <EachNote value={note}  key={i}/>;
      })}

      <div className={`m-4 border-2 border-brown rounded-md`}>
     
        <Input
          type="text"
          variant="underlined"
          value={newNote.Title}
          placeholder="Title"
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
               <button onClick={handleCreate}> confirm add</button>
      </div>
    </div>
  );
}

export default Notes;
