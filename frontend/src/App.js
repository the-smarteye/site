import "./App.css";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import setup from "./assets/undraw_Website_setup_re_d4y9.svg";
import circuit from "./assets/undraw_circuit_board_4c4d.svg";
import manRed from "./assets/manRed.png";
import womanPink from "./assets/womanPink.png";
import manGreen from "./assets/manGreen.png";
import womanRed from "./assets/womanRed.png";
import data from "./assets/undraw_Data_trends_re_2cdy.svg";
import collaboration from "./assets/undraw_real_time_collaboration_c62i.svg";

function App() {
  return (
    <>
      <div className="App">
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
        <div className="__line">
          <Avatar avatar={manRed} name="Membro 1" description="Lorem Ipsum" />
          <Avatar
            avatar={womanPink}
            name="Membro 1"
            description="Lorem Ipsum"
          />
          <Avatar avatar={manGreen} name="Membro 1" description="Lorem Ipsum" />
          <Avatar avatar={womanRed} name="Membro 1" description="Lorem Ipsum" />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
