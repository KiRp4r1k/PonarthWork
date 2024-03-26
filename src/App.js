import "./scss/app.scss";

import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Fonds from "./pages/Fonds";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/fonds" element={<Fonds />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
