import "./index.css";
import blured from "../../assets/blured.png";
import Group from "./Group";
import knowledge from "../../assets/inteligencia.png";
import safety from "../../assets/seguranca-de-dados.png";
import distance from "../../assets/mantenha-distancia.png";
import smartCity from "../../assets/cidade-inteligente.png";

const About = () => {
	return (
		<div className="about" id="about">
			<h1>O SmartEye</h1>
			<div className="info">
				<img src={blured} alt="" className="blured" />
				<span className="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</span>
			</div>
			<div className="groups">
				<Group
					icon={distance} title="Controle de Espaços"
					text="Em meio à pandemia de COVID-19, evitar aglomerações é a melhor maneira de prevenção." />
				<Group
					icon={knowledge}
					title="Gestão Inteligente"
					text="Uso de tecnologias de cidades inteligentes voltado para tomada de decisão 
					em mobilidade urbana pode transformar esse cenário."
				/>
				<Group
					icon={smartCity}
					title="Plataforma RT"
					text="Tecnologias de Cidades Inteligentes são úteis dentro e fora de crises como essa." />
				<Group
					icon={safety}
					title="Confiabilidade"
					text="Acesso fácil, rápido com segurança, confiabilidade e integridade."
				/>
			</div>
		</div>
	);
}

export default About;