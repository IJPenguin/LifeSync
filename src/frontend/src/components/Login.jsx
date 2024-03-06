import React, { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div className="login__main__container">
			<div className="login__card">
				<img
					src="/assets/images/login_img.jpeg"
					className="login__img"
				/>
				<div className="login__flex__container">
					<h1 className="login__heading">Log In</h1>
					<form onSubmit={handleSubmit} className="login__form">
						<input
							type="email"
							className="login__form__email"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							className="login__form__password"
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit" className="login__button">
							Login
						</button>
					</form>
					{/* <p className="login__text">
                        Need to Signup?{" "}
                        <Link to="/signup" className="login__signup__link">
                            Create Account
                        </Link>
                    </p> */}
				</div>
			</div>
		</div>
	);
}
