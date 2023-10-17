import React from "react";

function MonsterModal({ monster }) {
  return (
    <div className="flex flex-col">
      <div>
        <h1>{monster.name}</h1>
        <h2>
          {monster.size} {monster.type}, {monster.alignment}
        </h2>
      </div>
      <div className="taper"></div>
      <div>
        <h2>
          Armor Class {monster.armor_class} {monster.armor_desc}
        </h2>
        <h2>
          Hit Points {monster.hit_points} ({monster.hit_dice})
        </h2>
      </div>
      <div>{}</div>
    </div>
  );
}

export default MonsterModal;
