import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import logoFooter from '../../assets/imagens/logos/logoFooter.png';
import "./index.css";

const Rodape = () => {
  return (
    <div>
      <footer className="text-center text-white">
        <div className="container p-4 pb-0">
          <div className="col-12">
            <img href="/" src={logoFooter} alt="Logo Rodapé" id="logoRodape" />
          </div><br />

          <div className="col-12">
            <p><b>Endereço: </b>
              Av. Francisco Mota, 572 (Campus Leste da UFERSA) - Prédio da PROEC (Antigo CTARN) - Sala IAGRAM, após a FGD. <br /> 
              Bairro: Costa e Silva CEP: 59625-900, RN
            </p>
            <p><b>Email:</b> contato@smarteye.tec.br</p>          
          </div>

          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/the_smarteye/" 
              role="button" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </section>
        </div>

        <div className="text-center p-3" id="copyright">
          &copy; 2021 Copyright - SmartEye - Todos os direitos reservados. 
        </div>
      </footer>
    </div>
  );
}

export default Rodape;