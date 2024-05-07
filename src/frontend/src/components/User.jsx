import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function User() {
	return (
		<>
			<Navbar />
			<div>
				<h1 className="user__heading">User Services</h1>
				<div className="user__button__container">
					<Link to="/form">
						<button className="hero__text__button">
							Upload Medical Data
						</button>
					</Link>
					<Link to="/ambulance">
						<button className="hero__text__button">
							Call an Ambulance
						</button>
					</Link>
					<Link to="/check">
						<button className="hero__text__button">
							Self AI Assessment
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
