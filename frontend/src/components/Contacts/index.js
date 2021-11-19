import "./index.css";
import SocialMedias from "./SocialMedias";
import instagram from "../../assets/sociais/instagram.svg";
// import facebook from "../../assets/sociais/facebook.svg";
import whatsapp from "../../assets/sociais/whatsapp.svg";
import linkedin from "../../assets/sociais/linkedin.svg";

import maps from "../../assets/maps.png";

const Contacts = () => {
	return (
		<div className="contacts" id="contacts">

			<h1 className="title">Contatos</h1>

			<div className="options">
				<div className="form">
					<h2 className="textus">Fale Conosco</h2>

					<form action="" method="post">
						<input type="text" placeholder="Nome" />
						<input type="email" name="email" id="email" placeholder="Email" />
						<input type="text" placeholder="Assunto" />
						<textarea name="message" id="" cols="30" rows="10" placeholder="Mensagem" />
						<button type="submit">Enviar</button>
					</form>
				</div>

				<div className="location">
					<h2 className="localization">Localização</h2>

					<img src={maps} alt="" className="map" />

					<div className="socialmedias">
						<SocialMedias icon={instagram} title="Instagram" />
						{/* <SocialMedias icon={facebook} title="Facebook" /> */}
						<SocialMedias icon={whatsapp} title="WhatsApp" />
						<SocialMedias icon={linkedin} title="LinkedIn" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;