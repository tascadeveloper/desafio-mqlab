import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const Main = (props) => (
    <Switch>
        <Route exact path='/' cookies={props.cookies} component={Home}/>
        <Route path="/login" component={Login} />


        {/* Se nenhuma rota for encontrada, cair no componente de NotFound */}
        <Route path="/*" component={NotFound} />
    </Switch>
);

export default Main;
