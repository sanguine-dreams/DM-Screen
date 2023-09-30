import { useEffect } from "react";
import { DnDContext } from "../store/store";
import { useState } from "react";
import axios from "axios";

function DndProvider({children}){

    const [spellCount, setSpellCount] = useState();
    const [conditions, setConditions] = useState([]);
    const [spells, setSpells] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    const [monsters, setMonsters] = useState([]);
    const [equipments, setEquipments] = useState([]);

    useEffect(()=> {
        axios.get("https://api.open5e.com/v1/conditions/").then((response) => 
    {setConditions(response.data.results)})
    axios.get(`https://api.open5e.com/v1/spells/?limit=25&page=${pageNumber}`).then((response) => 
    {   setSpellCount(response.data.count);
        setSpells(response.data.results)})
    axios.get("https://api.open5e.com/v1/monsters/").then((response) => 
    {setMonsters(response.data.results)})
    axios.get("https://www.dnd5eapi.co/api/Equipment").then((response) => 
    {setEquipments(response.data.results)})

}
    , [pageNumber] );

    return(
        <DnDContext.Provider value={{conditions, spells, monsters, equipments,pageNumber, setPageNumber, spellCount}} >
    {children}
        </DnDContext.Provider>
    )
}

export default DndProvider;