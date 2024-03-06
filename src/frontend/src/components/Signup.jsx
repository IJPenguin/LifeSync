import { useState } from "react";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div className="signup__main__container">
			<div className="signup__card">
				<div className="signup__flex__container">
					<h1 className="signup__heading">Create Your Account!</h1>
					<form onSubmit={handleSubmit} className="signup__form">
						<input
							className="signup__form__email"
							type="text"
							placeholder="Username"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							className="signup__form__email"
							type="email"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className="signup__form__password"
							type="password"
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit" className="signup__button">
							Sign Up
						</button>
					</form>

					{/* <p className="signup__text">
                        Already have an account?{" "}
                        <Link to="/login" className="signup__login__link">
                            Login
                        </Link>
                    </p> */}
				</div>
				<img
					src="/assets/images/signup_img.png"
					className="signup__img"
				/>
			</div>
		</div>
	);
}
