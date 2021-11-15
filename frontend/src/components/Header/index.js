import { useEffect } from "react";
import "./index.css";
import logo from "../../assets/logoFooter.png";
import backImage from "../../assets/KeepDistant.jpg"

const Menu = () => {
	useEffect(() => {
		var cabecalho = document.getElementById("cabecalho")
		window.onscroll = () => {
			if (window.scrollY > 0) {
				cabecalho.style.backgroundColor = "#006A71"
				cabecalho.style.height = "100px"
				cabecalho.style.boxShadow = "1px 1px 2px"
			} else {
				cabecalho.style.backgroundColor = "transparent"
				cabecalho.style.height = "125px"
				cabecalho.style.boxShadow = "0px 0px 0px"
			}

		}
	}, [])

	return (
		<div className="header" id="header">
			<div className="cabecalho" id="cabecalho">
				<img src={logo} alt="" className="logo" />
				<ul className="options">
					<li><a href="#about">Sobre</a></li>
					<li><a href="#">Serviços</a></li>
					<li><a href="#">Equipe</a></li>
					<li><a href="#contacts">Contatos</a></li>
				</ul>
			</div>
			<img src={backImage} alt="" className="background" />
			<div className="text">
				<span>Controle de aglomerações em ambientes da unidade de saúde;
					Monitoramento em tempo real distanciamento e fluxo de pessoas;
					Sistema de gestão ativos e controle de recursos.</span>
				<button>Veja Mais</button>
			</div>
		</div>
	);
}

export default Menu;