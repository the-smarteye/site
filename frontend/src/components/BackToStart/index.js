import "./index.css";
import icone from "../../assets/arrow-up.png";

const BackToStart = () => {

	return (
		<a href="#header">
			<div className="backtostart" id="backtostart">
				<img src={icone} alt="" />
			</div>
		</a>
	)
}

export default BackToStart;