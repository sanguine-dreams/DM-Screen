import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Screen from "../pages/Screen";

function Routing(){
    return(<Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/screen" element={<Screen />}/>
    </Routes>)
}

export default Routing;