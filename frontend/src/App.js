import "./App.css";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Menu from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import BackToStart from "./components/BackToStart";
import setup from "./assets/undraw_Website_setup_re_d4y9.svg";
import circuit from "./assets/undraw_circuit_board_4c4d.svg";
import VictoriaIris from "./assets/Victoria Íris.jpg";
import LeonardoCasillo from "./assets/Leonardo Casillo.jpg";
import LeonardoFranca from "./assets/Leonardo França.jpg";
import MiltonMendes from "./assets/Milton Mendes.jpg";
import RogerioFernandes from "./assets/Rogério Fernandes.jpg";
import setas from "./assets/Setas.png";
import data from "./assets/undraw_Data_trends_re_2cdy.svg";
import collaboration from "./assets/undraw_real_time_collaboration_c62i.svg";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <About />
        <h1>Serviços</h1>
        <div className="__line" id="services">
          <Card
            imgA={setup}
            imgB={circuit}
            title="A plataforma SmartEye"
            description="A plataforma SmartEye é um software web
        acoplado a um conjunto de sensores ligados a Cidades Inteligentes
        que captura a quantidade de pessoas em determinados locais."
          />
          <Card
            imgA={data}
            title="Monitoramento e Recursos"
            description="Atualmente o SmartEye pode contar com dados
          de câmeras, sensores infra-vermelhos, sinais de celular e
          redes de internet para contar pessoas."
          />
          <Card
            imgA={collaboration}
            title="Visualização em Tempo Real"
            description="Visualização em tempo real da quantidade de pessoas
          Média de pessoas por hora durante o dia."
          />
        </div>
        <button className="_button">Mais</button>
        <h1>Equipe</h1>
        <p className="_p" id="members">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="__line">
          <Avatar
            avatar={VictoriaIris}
            name="Victoria Íris"
            description="Lorem Ipsum"
          />
          <Avatar
            avatar={LeonardoCasillo}
            name="Leonardo Casillo"
            description="Lorem Ipsum"
          />
          <Avatar
            avatar={LeonardoFranca}
            name="Leonardo França"
            description="Lorem Ipsum"
          />
          <Avatar
            avatar={MiltonMendes}
            name="Milton Mendes"
            description="Lorem Ipsum"
          />
          <Avatar
            avatar={RogerioFernandes}
            name="Rogério Fernandes"
            description="Lorem Ipsum"
          />
        </div>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            width: 124,
            cursor: "pointer",
            marginBottom: 120,
            marginTop: 30,
          }}
        >
          <img src={setas} alt="" />
        </button>
        <Contacts />
        <BackToStart />
      </div>
      <Footer />
    </>
  );
}

export default App;
