import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Screen from "../pages/Screen";
import WelcomePage from "../pages/WelcomePage";

function Routing(){
    return(<Routes>
              <Route path="/homepage" element={<HomePage />}/>
              <Route path="/screen" element={<Screen />}/>
              <Route path="/" element={<WelcomePage />}/>
    </Routes>)
}

export default Routing;