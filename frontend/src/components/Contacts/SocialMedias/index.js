import "./index.css";

const SocialMedias = ({ icon, title }) => {
	return (
		<div className="media">
			<a href="https://www.instagram.com/the_smarteye/" target="_blank" rel="noreferrer">
				<div className="icon">
					<img src={icon} alt="" />
				</div>
				<span className="name">{title}</span>
			</a>
		</div>
	)
}

export default SocialMedias;