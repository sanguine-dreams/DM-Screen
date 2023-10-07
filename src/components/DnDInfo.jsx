import { useEffect } from "react";
import { DnDContext } from "../store/store";
import { useState } from "react";
import { api } from "../lib/axios";

function DndProvider({ children }) {
  const [spellCount, setSpellCount] = useState();
  const [conditions, setConditions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [monsters, setMonsters] = useState([]);
  const [magicItems, setMagicItems] = useState([])
  const [weapons, setWeapons] = useState([])
  const [armor, setArmor] = useState([])     
 

  useEffect(() => {
    api.get("/conditions/").then((response) => {
      setConditions(response.data.results);
    });

    api.get(`/spells/?page=${page}`).then((response) => {
      setSpellCount(response.data.count);
      setSpells(response.data.results);
    });

    api.get("/monsters/").then((response) => {
      setMonsters(response.data.results);
    });

    api.get("/armor/").then((response) => {
      setArmor(response.data.results);
    });

    api.get("/weapons/").then((response) => {
      setWeapons(response.data.results);
    });

    api.get("/magicitems/").then((response) => {
      setMagicItems(response.data.results);
    });    
  }, [page, rowsPerPage]);

  return (
    <DnDContext.Provider
      value={{
        conditions,
        spells,
        monsters,
        page,
        rowsPerPage,
        setRowsPerPage,
        setPage,
        spellCount,
        weapons,
        armor,
        magicItems
      }}
    >
      {children}
    </DnDContext.Provider>
  );
}

export default DndProvider;
