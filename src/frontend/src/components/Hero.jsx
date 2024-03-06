export default function Hero() {
	return (
		<div className="hero__container">
			<div className="hero__text">
				<h2 className="hero__text__subtitle">
					INNOVATIVE MEDICAL SERVICE
				</h2>
				<h1 className="hero__text__title">
					Smart Ambulance & Healthcare Service Provider
				</h1>
				<button className="hero__text__button">Get Started</button>
			</div>
			<div className="hero__images">
				<img
					src="../../assets/images/hero_doctors.png"
					alt=""
					className="hero__doctor"
				/>
				<img
					src="../../assets/images/hero_ambulance.png"
					alt="ambulance"
					className="hero__ambulance"
				/>
			</div>
		</div>
	);
}
