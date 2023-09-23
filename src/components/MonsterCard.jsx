function MonsterCard({monster}){
    return(<div className="monster-card border-double border-2 flex flex-wrap">
        <h1 className="m-4">{monster.name}</h1>
        <h1 className="m-4">{monster.size}</h1>
        <h1 className="m-4">CR: {monster.cr}</h1>
        <h1 className="m-4">Type: {monster.type}</h1>
    </div>);
}

export default MonsterCard;