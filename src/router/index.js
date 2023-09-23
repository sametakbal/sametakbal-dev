import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Videos from "../pages/Videos";
import Articles from "../pages/Articles";

export const pages = [
    {id: 1, path: "/", component: About},
    {id: 2, path: "/projects", component: Projects},
    {id: 3, path: "/videos", component: Videos},
    {id: 4, path: "/articles", component: Articles},
];

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {pages.map(({id, component: Component, path}) => {
                    return <Route key={id} element={<Component/>} path={path}/>;
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;