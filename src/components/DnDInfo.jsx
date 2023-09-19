import { useEffect } from "react";
import { DnDContext } from "../store/store";
import { useState } from "react";
import axios from "axios";

function DndProvider({children}){

    const [conditions, setConditions] = useState([]);
    const [spells, setSpells] = useState([]);

    useEffect(()=> {
        axios.get("https://www.dnd5eapi.co/api/conditions").then((response) => 
    {setConditions(response.data.results)})
    axios.get("https://www.dnd5eapi.co/api/spells").then((response) => 
    {setSpells(response.data.results)})

}
    , [] );

    return(
        <DnDContext.Provider value={{conditions, spells}} >
    {children}
        </DnDContext.Provider>
    )
}

export default DndProvider;