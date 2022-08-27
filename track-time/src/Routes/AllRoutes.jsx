import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import { Integration}  from "../Pages/Integration";
import { Login } from "../Pages/Login";
import { Tryitforfree } from "../Pages/Tryitforfree";

export default function AllRoutes( ){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/integrations" element={<Integration/>}/>
                <Route path="/tryforfree" element={<Tryitforfree/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}