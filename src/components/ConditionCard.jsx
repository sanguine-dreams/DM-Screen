function ConditionCard({condition}){
    return(<div className="condition-card flex flex-wrap border-double border-4 border-orange-800">
        <h1>{condition.name}</h1>
        <p>{condition.desc}</p>
    </div>);
}

export default ConditionCard;