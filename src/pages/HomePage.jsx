import { Link } from "react-router-dom";
import { Login } from "../components/LogIn";

function HomePage() {
    return (
        <div className="home-page">
            <Link to="/screen">
                <button id="screen-button">Campaign</button>
            </Link>


        </div>
    )
}

export default HomePage;