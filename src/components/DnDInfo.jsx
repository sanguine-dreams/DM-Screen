import { useEffect } from "react";
import { DnDContext } from "../store/store";
import { useState } from "react";
import { api } from "../lib/axios";

function DndProvider({ children }) {
  const [spellCount, setSpellCount] = useState();
  const [conditions, setConditions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(49);
  const [monsters, setMonsters] = useState([]);
  const [magicItems, setMagicItems] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [armor, setArmor] = useState([]);
  const [monsterFiltering, setMonsterFiltering] = useState({
    CR:false, search:""
  });

  useEffect(() => {
    api.get("/conditions/").then((response) => {
      setConditions(response.data.results);
    });
  }, []);
  useEffect(() => {
    api.get(`/spells/?page=${page}`).then((response) => {
      setSpellCount(response.data.count);
      setSpells(response.data.results);
    });
  }, [page, rowsPerPage]);
  useEffect(() => {
    api
      .get(
        `/monsters/${
          monsterFiltering.CR ? "?ordering=challenge_rating&" : ""
        }?page=${page}`
      )
      .then((response) => {
        setMonsters(response.data.results);
      });
  }, [monsterFiltering]);

  useEffect(() => {
    api.get("/armor/").then((response) => {
      setArmor(response.data.results);
    });

    api.get("/weapons/").then((response) => {
      setWeapons(response.data.results);
    });

    api.get("/magicitems/").then((response) => {
      setMagicItems(response.data.results);
    });
  }, []);

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
        magicItems,
        monsterFiltering,
        setMonsterFiltering,
      }}
    >
      {children}
    </DnDContext.Provider>
  );
}

export default DndProvider;
