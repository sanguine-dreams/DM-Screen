function ConditionCard({condition}){
    return(<div className="condition-card flex flex-wrap">
        <h1>{condition.name}</h1>
        <p>{condition.desc}</p>
    </div>);
}

export default ConditionCard;