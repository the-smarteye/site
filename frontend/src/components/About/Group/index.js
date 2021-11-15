import "./index.css";
const Group = ({ icon, title, text }) => {
	return (
		<div className="group">
			<div className="icon">
				<img src={icon} alt="" />
			</div>
			<div className="content">
				<h2>{title}</h2>
				<span className="text">
					{text}
				</span>
			</div>
		</div>
	);
}

export default Group;