export default function Services() {
	return (
		<div className="services__container" id="services">
			<div className="services__box">
				<div className="services__text">
					<h2 className="services__text__title">
						Keeping count of every second that counts
					</h2>
				</div>
				<div className="services__cards">
					<div className="services__card">
						<img
							src="../../assets/images/service1.png"
							alt="ambulance"
							className="services__card__image"
						/>
						<h3 className="services__card__title">
							Ambulance Services
						</h3>
						<p className="services__card__description">
							We provide the best ambulance services in the city.
							Our ambulances are equipped with the latest medical
							equipment and are driven by the best drivers in the
							city.
						</p>
					</div>
					<div className="services__card">
						<img
							src="../../assets/images/service2.png"
							alt="doctor"
							className="services__card__image"
						/>
						<h3 className="services__card__title">
							Doctor Consultation
						</h3>
						<p className="services__card__description">
							We provide the best doctor consultation services in
							the city. Our doctors are highly experienced and are
							available 24/7 to provide you with the best medical
							advice.
						</p>
					</div>
					<div className="services__card">
						<img
							src="../../assets/images/service3.png"
							alt="doctor"
							className="services__card__image"
						/>
						<h3 className="services__card__title">
							Doctor Allotment
						</h3>
						<p className="services__card__description">
							We allot the doctors that are compatible with your
							medical history and requirements. Our doctors are
							highly experienced and are available
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
