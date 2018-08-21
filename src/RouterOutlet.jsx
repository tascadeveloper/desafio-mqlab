import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ProtectedRoute from './components/CustomRoutes/ProtectedRoute/ProtectedRoute';
import Logout from './components/Login/Logout';
import Usuario from './components/Usuario';
import Movimentacao from './components/Movimentacao';

const Main = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/usuario" component={Usuario} />
    <ProtectedRoute exact path="/movimentacao" component={Movimentacao} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    {/* Se nenhuma rota for encontrada, cair no componente de NotFound */}
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Main;
