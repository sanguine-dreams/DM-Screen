import { useEffect } from "react";
import { DnDContext } from "../store/store";
import { useState } from "react";
import axios from "axios";

function DndProvider({children}){

    const [conditions, setConditions] = useState([]);
    const [spells, setSpells] = useState([]);
    const [monsters, setMonsters] = useState([]);
    const [equipments, setEquipments] = useState([]);

    useEffect(()=> {
        axios.get("https://api.open5e.com/v1/conditions/").then((response) => 
    {setConditions(response.data.results)})
    axios.get("https://api.open5e.com/v1/spells/").then((response) => 
    {setSpells(response.data.results)})
    axios.get("https://api.open5e.com/v1/monsters/").then((response) => 
    {setMonsters(response.data.results)})
    axios.get("https://www.dnd5eapi.co/api/Equipment").then((response) => 
    {setEquipments(response.data.results)})

}
    , [] );

    return(
        <DnDContext.Provider value={{conditions, spells,monsters, equipments}} >
    {children}
        </DnDContext.Provider>
    )
}

export default DndProvider;