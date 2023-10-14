import { useEffect } from "react";
import { DnDContext } from "../store/store";
import { useState } from "react";
import { api } from "../lib/axios";
import db from "../lib/Pocketbase";

function DndProvider({ children }) {
  const [count, setCounts] = useState({
    Monster: 0,
    Spell: 0,
    MagicItems: 0,
  });



  const [conditions, setConditions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [pageSpell, setPageSpell] = useState(1);
  const [pageMonster, setPageMonster] = useState(1);
  const [pageMagicItems, setPageMagicItems] = useState(1);
  const [pageWeapons, setPageWeapons] = useState(1);
  const [monsters, setMonsters] = useState([]);
  const [magicItems, setMagicItems] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [armor, setArmor] = useState([]);
  const [monsterFiltering, setMonsterFiltering] = useState({
    CR: false,
    search: "",
  });
  const [armorFiltering, setArmorFiltering] = useState(false);
  const [notes, setNotes] = useState([]);
  const [signInCreds, setSignInCreds] = useState({
    email: "",
    password: "",
    username: "",
    id: "",
  });

  useEffect(() => {
    api.get("/conditions/").then((response) => {
      setConditions(response.data.results);
    });
  }, []);
  useEffect(() => {
    api.get(`/spells/?page=${pageSpell}`).then((response) => {
      setCounts({ ...count, Spell: response.data.count });
      setSpells(response.data.results);
    });
  }, [pageSpell]);
  useEffect(() => {
    api
      .get(
        `/monsters/${
          monsterFiltering.CR ? "?ordering=challenge_rating&" : ""
        }?page=${pageMonster}`
      )
      .then((response) => {
        setCounts({ ...count, Monster: response.data.count });
        setMonsters(response.data.results);
      });
  }, [monsterFiltering, pageMonster]);

  useEffect(() => {
    api
      .get(`/armor/${armorFiltering ? "?ordering=category" : ""}`)
      .then((response) => {
        setArmor(response.data.results);
      });

    api.get(`/weapons/?page=${pageWeapons}`).then((response) => {
      setWeapons(response.data.results);
    });

    api.get(`/magicitems/?page=${pageMagicItems}`).then((response) => {
      setCounts({ ...count, MagicItems: response.data.count });
      setMagicItems(response.data.results);
    });
  }, [pageMagicItems, armorFiltering, pageWeapons]);


  return (
    <DnDContext.Provider
      value={{
        conditions,
        spells,
        monsters,
        count,
        weapons,
        armor,
        magicItems,
        monsterFiltering,
        setMonsterFiltering,
        armorFiltering,
        setArmorFiltering,
        notes,
        setNotes,
        signInCreds,
        setSignInCreds,
        pageWeapons,
        setPageWeapons,
        pageSpell,
        setPageSpell,
        pageMonster,
        setPageMonster,
        pageMagicItems,
        setPageMagicItems,
      }}
    >
      {children}
    </DnDContext.Provider>
  );
}

export default DndProvider;
