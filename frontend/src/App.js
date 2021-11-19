import "./App.css";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Menu from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import BackToStart from "./components/BackToStart";
import setup from "./assets/servicos/undraw_Website_setup_re_d4y9.svg";
import circuit from "./assets/servicos/undraw_circuit_board_4c4d.svg";
import VictoriaIris from "./assets/equipe/VictoriaÍris.jpg";
import LeonardoCasillo from "./assets/equipe/LeonardoCasillo.jpg";
import LeonardoFranca from "./assets/equipe/LeonardoFrança.jpg";
import MiltonMendes from "./assets/equipe/MiltonMendes.jpg";
import RogerioFernandes from "./assets/equipe/RogérioFernandes.jpg";
// import setas from "./assets/Setas.png";
import data from "./assets/servicos/undraw_Data_trends_re_2cdy.svg";
import collaboration from "./assets/servicos/undraw_real_time_collaboration_c62i.svg";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <About />
        <h1 id="services">Serviços</h1>
        <div className="__line">
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
            description="A plataforma aceita entradas de diversos tipos de sensores para captura 
              de dados do ambiente, entrada de dados manual e processamento de imagens de 
              satélite."
          />
          <Card
            imgA={collaboration}
            title="Visualização em Tempo Real"
            description="Os dados são disponibilizados em dashboards para que o usuário tenha 
              insights do mundo real."
          />
        </div>
        {/* <button className="_button">Mais</button> */}
        <h1 id="members">Equipe</h1>
        <p className="_p">
          O Smarteye conta com uma equipe com um amplo leque de expertises para suprir as 
          necessidades da proposta, entre elas inteligencia artificial, IoT , manejo ambiental e 
          desenvolvimento.
        </p>
        <div className="__line">
          <Avatar
            avatar={VictoriaIris}
            name="Victoria Íris"
            description=""
          />
          <Avatar
            avatar={LeonardoCasillo}
            name="Leonardo Casillo"
            description=""
          />
          <Avatar
            avatar={LeonardoFranca}
            name="Leonardo França"
            description=""
          />
          <Avatar
            avatar={MiltonMendes}
            name="Milton Mendes"
            description=""
          />
          <Avatar
            avatar={RogerioFernandes}
            name="Rogério Fernandes"
            description=""
          />
        </div>
        {/* <button
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
        </button> */}
        <Contacts />
        <BackToStart />
      </div>
      <Footer />
    </>
  );
}

export default App;
