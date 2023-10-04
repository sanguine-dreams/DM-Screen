import { useEffect } from 'react';
import { DnDContext } from '../store/store';
import { useState } from 'react';
import { api } from '../lib/axios';

function DndProvider({ children }) {
  const [spellCount, setSpellCount] = useState();
  const [conditions, setConditions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const [monsters, setMonsters] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    api.get('/conditions/').then((response) => {
      setConditions(response.data.results);
    });
    api
      .get(
        `/spells/?page=${
          page + 1
        }&limit=${rowsPerPage}`
      )
      .then((response) => {
        setSpellCount(response.data.count);
        setSpells(response.data.results);
      });
    api.get('/monsters/').then((response) => {
      setMonsters(response.data.results);
    });
    api.get('/magicitems/').then((response) => {
      setEquipments(response.data.results);
    });
  }, [page, rowsPerPage]);

  return (
    <DnDContext.Provider
      value={{
        conditions,
        spells,
        monsters,
        equipments,
        page,
        rowsPerPage,
        setRowsPerPage,
        setPage,
        spellCount,
      }}
    >
      {children}
    </DnDContext.Provider>
  );
}

export default DndProvider;
