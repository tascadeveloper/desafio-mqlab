import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/login" component={Login} />


        {/* Se nenhuma rota for encontrada, cair no componente de NotFound */}
        <Route path="/*" component={NotFound} />
    </Switch>
);

export default Main;
