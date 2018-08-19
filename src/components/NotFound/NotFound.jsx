import React from 'react';

const NotFound = () => (
  <div className="app-content container grid-xl">
    <div className="column col-12 col-gapless px-0">
      <div className="empty">
        <div className="empty-icon"><i className="icon icon-3x icon-stop" /></div>
        <p className="empty-title h5">Erro! </p>
        <p className="empty-title subtitle">página não encontrada... entre em contato com o administrador do sistema</p>
      </div>
    </div>
  </div>
);

export default NotFound;
