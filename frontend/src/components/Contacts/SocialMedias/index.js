import "./index.css";

const SocialMedias = ({ icon, title }) => {
	return (
		<div className="media">
			<div className="icon">
				<img src={icon} alt="" />
			</div>
			<span className="name">{title}</span>
		</div>
	)
}

export default SocialMedias;