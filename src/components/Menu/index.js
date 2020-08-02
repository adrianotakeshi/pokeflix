import React from 'react';
import Logo  from '../../assets/img/logopoke.png';
import './Menu.css';
import { Link } from 'react-router-dom';

import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PokeFlix Logo" />
            </Link>
           <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo Vídeo
           </Button>
        </nav>
    );
}

export default Menu;