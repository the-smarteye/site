import { useEffect } from "react";
import "./index.css";
import logo from "../../assets/logoHeader.png";
import backImage from "../../assets/KeepDistant.jpg"

const Menu = () => {
	useEffect(() => {
		var cabecalho = document.getElementById("cabecalho")
		window.onscroll = () => {
			if (window.scrollY > 0) {
				cabecalho.style.backgroundColor = "#006A71"
			} else {
				cabecalho.style.backgroundColor = "transparent"
			}

		}
	}, [])

	return (
		<div className="header" id="header">
			<div className="cabecalho" id="cabecalho">
				<img src={logo} alt="" className="logo" />
				<ul className="options">
					<li><a href="#about">Sobre</a></li>
					<li><a href="#services">Serviços</a></li>
					<li><a href="#members">Equipe</a></li>
					<li><a href="#contacts">Contatos</a></li>
				</ul>
			</div>
			<img src={backImage} alt="" className="background" />
			<div className="text">
				<span>Controle de aglomerações em ambientes da unidade de saúde;<br/>
					Monitoramento em tempo real distanciamento e fluxo de pessoas;<br/>
					Sistema de gestão ativos e controle de recursos.</span>
			</div>
		</div>
	);
}

export default Menu;