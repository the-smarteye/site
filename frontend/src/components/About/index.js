import "./index.css";
import blured from "../../assets/sobre/blured.png";
import Group from "./Group";
import knowledge from "../../assets/sobre/inteligencia.png";
import safety from "../../assets/sobre/seguranca-de-dados.png";
import distance from "../../assets/sobre/mantenha-distancia.png";
import smartCity from "../../assets/sobre/cidade-inteligente.png";

const About = () => {
	return (
		<div className="about" id="about">
			<h1>O SmartEye</h1>
			<div className="info">
				<img src={blured} alt="" className="blured" />
				<span className="text">
					O SmartEye é uma solução integrada de hardware e software com o intuito de monitorar o ambiente no qual está inserido, através 
					de sensores e Inteligência Artificial (IA), gerando relatórios inteligentes e transparência para as atividades que ali estão 
					sendo executadas. O sensoriamento é baseado em sistemas embarcados usando Arduino, e isso faz com que um grande número de 
					variáveis possa ser observado a depender do que for interessante para o usuário final.
				</span>
			</div>
			<div className="groups">
				<div>
					<Group
						icon={distance} title="Controle de Espaços"
						text="Em meio à pandemia de COVID-19, evitar aglomerações é a melhor maneira de prevenção." />
					<Group
						icon={knowledge}
						title="Gestão Inteligente"
						text="Uso de tecnologias de cidades inteligentes voltado para tomada de decisão 
					em mobilidade urbana pode transformar esse cenário."
					/>
				</div>
				<div>
					<Group
						icon={smartCity}
						title="Plataforma em Tempo Real"
						text="Tecnologias de Cidades Inteligentes são úteis dentro e fora de crises como essa." />
					<Group
						icon={safety}
						title="Confiabilidade"
						text="Acesso fácil, rápido com segurança, confiabilidade e integridade."
					/>
				</div>
			</div>
		</div>
	);
}

export default About;