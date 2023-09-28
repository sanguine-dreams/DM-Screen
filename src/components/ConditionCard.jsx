import { useState } from "react";

function ConditionCard({ condition }) {
    const [cardState, setCardState] = useState("hidden");
   

    function onClick(){
        setCardState(cardState === "hidden" ? "block bg-orange-100 m-2 h-full font-['Modesto expanded']" : "hidden");
    }

  return (
      <button className="condition-card flex flex-wrap justify-around content-center border-double border-4 border-orange-800 h-[20rem] overflow-y-scroll " onClick={onClick}>
        <h1 className="font-['Modesto Condesed']">{condition.name}</h1>
        <p className={cardState}>{condition.desc}</p>
      </button>
  );
}

export default ConditionCard;
