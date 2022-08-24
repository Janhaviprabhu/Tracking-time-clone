import { Route, Routes } from "react-router-dom";
import { Blog } from "../Pages/Blog";
import Home from "../Pages/Home";
import { Integration}  from "../Pages/Integration";
import { Login } from "../Pages/Login";

export default function AllRoutes( ){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/integrations" element={<Integration/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}