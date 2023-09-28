import React, { useState } from 'react';

function SpellCard({spell}){

    const [cardState, setCardState] = useState("hidden");
   

    function onClick(){
        setCardState(cardState === "hidden" ? "block bg-orange-50" : "hidden");
    }

    return(<div className='w-full border-double border-4 border-orange-800'>
        <button className="spell-card w-full flex justify-between3" onClick={onClick}>
        <h1 className="m-4">{spell.name}</h1> 
        <h1 className="m-4">{spell.level}</h1>
        <h1 className="m-4">{spell.casting_time.substring(0,10)}</h1>
        <h1 className="m-4">{spell.duration}</h1>
        <h1 className="m-4">{spell.range}</h1>
        <h1 className="m-4">{spell.components}</h1>
    </button>
    <div className={cardState}>{spell.desc}</div>
        </div>);
}

export default SpellCard;