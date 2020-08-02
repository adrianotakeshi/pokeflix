import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './page/Home';
import CadastroVideo from './page/cadastro/video'
import CadastroCategoria from './page/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
//    <React.StrictMode>
//      <App/>
//    </React.StrictMode>,
  <BrowserRouter>
   <Switch>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route path="/" component={Home} exact/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


