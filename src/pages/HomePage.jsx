import { Link } from "react-router-dom";

function HomePage(){
    return (
        <div className="home-page">
            <Link to="/screen">
            <button id="screen-button">Campaign</button>
            <h1>BOOOO</h1>
          </Link>
        </div>
    )
}

export default HomePage;