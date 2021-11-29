import React, { useEffect } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logoHeader from '../../assets/imagens/logos/logoHeader.png';
import Burger from './parts/Burguer';
import Slide from './slide'
import "./index.css";

const Cabecalho = () => {

  useEffect(() => {
		let cabecalho = document.getElementById("header");
    
		window.onscroll = () => {
			if (window.scrollY > 0) {
				cabecalho.style.backgroundColor = "#006A71";

			} else {
				cabecalho.style.backgroundColor = "transparent";
			}

		}
	}, []);

  return (
    <div>
      <Navbar container expand="lg" fixed="" light id="header">
        <NavbarBrand href="/">
          <img src={logoHeader} alt="Logo SmartEye" id="logoCabecalho" />
        </NavbarBrand>
        
        <Burger />
      </Navbar>
      <Slide />
    </div>
  );
}

export default Cabecalho;