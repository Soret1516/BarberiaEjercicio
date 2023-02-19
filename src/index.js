import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BarberiaApp} from "./componentes/BarberiaApp";
import {BrowserRouter, Link} from "react-router-dom";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

<div>
<BarberiaApp/>
      
</div>
       
</>
);
