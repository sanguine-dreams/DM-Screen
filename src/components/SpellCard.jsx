import React, { useState } from 'react';


function SpellCard({spell, i}){

    const [cardState, setCardState] = useState("hidden");
   

    function onClick(){
        setCardState(cardState === "hidden" ? "block bg-orange-50" : "hidden");
    }

    return(<div className='w-full border-double border-4 border-orange-800'>
        <button className="spell-card w-full flex justify-between3" onClick={onClick}>
        
    </button>
    <div className={cardState}>{spell.desc}</div>
        </div>);
}

export default SpellCard;

