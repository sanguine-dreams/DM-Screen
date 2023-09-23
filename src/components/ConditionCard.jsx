function ConditionCard({condition}){
    return(<div className="condition-card border-double border-2 flex flex-wrap">
        <h1>{condition.name}</h1>
        <p>{condition.desc}</p>
    </div>);
}

export default ConditionCard;