import './index.css'
import logo from '../../assets/logoFooter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt=""/>
        <p><strong>Endereço: </strong>
        Av. Francisco Mota, 572(Campus Leste da UFERSA) Prédio da PROEC (Antigo CTARN) Sala IAGRAM, após a FGD.<br/> Bairro: Costa e Silva CEP: 59625-900, RN</p>
        <p><strong>Email:</strong> contato@smarteye.tec.br</p>
        <p><span>Copyright</span> &copy; 2021 - SmartEye - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;