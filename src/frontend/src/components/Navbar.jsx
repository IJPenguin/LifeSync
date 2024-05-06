import { useState } from "react";

function Dropdown() {
	const handleLogout = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.reload();
	};

	return (
		<div className="dropdown">
			<ul className="dropdown__list">
				<li className="dropdown__list__item">Dashboard</li>
				<li className="dropdown__list__item">
					<a onClick={handleLogout}>Logout</a>
				</li>
			</ul>
		</div>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const userLoggedIn = (
		<div className="nav__container">
			<nav className="home__nav">
				<div className="home__nav__branding">
					<img
						src="../../assets/images/logo.png"
						className="home__nav__logo"
					/>
					<h1 className="home__nav__name">
						<a href="" className="home__nav__home__link">
							LifeSync
						</a>
					</h1>
				</div>
				<ul className="home__nav__list">
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							About Us
						</a>
					</li>
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							Devs
						</a>
					</li>
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							Services
						</a>
					</li>
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							Reviews
						</a>
					</li>
					<li className="home__nav__list__item home__nav__list__user">
						<a
							className="home__nav__list__link"
							onClick={() => setOpen(!open)}>
							{localStorage.getItem("name")}
						</a>
						{open && <Dropdown />}
					</li>
				</ul>
			</nav>
		</div>
	);

	const login = (
		<div className="nav__container">
			<nav className="home__nav">
				<div className="home__nav__branding">
					<img
						src="../../assets/images/logo.png"
						className="home__nav__logo"
					/>
					<h1 className="home__nav__name">
						<a href="" className="home__nav__home__link">
							Lifesync
						</a>
					</h1>
				</div>
				<ul className="home__nav__list">
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							About Us
						</a>
					</li>
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							Services
						</a>
					</li>
					<li className="home__nav__list__item">
						<a href="" className="home__nav__list__link">
							Reviews
						</a>
					</li>
					<li className="home__nav__list__item home__nav__list__user">
						<a href="/login" className="home__nav__list__link">
							Assess Yourself
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);

	const returnElement = localStorage.getItem("user") ? userLoggedIn : login;

	return returnElement;
}
