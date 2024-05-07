import React, { useState } from "react";

const ContactInfoContainer = () => {
	const [contactInfo, setContactInfo] = useState({
		address: "",
		phoneNumber: "",
		emailAddress: "",
		emergencyContactName: "",
		emergencyContactRelationship: "",
		emergencyContactPhoneNumber: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactInfo({ ...contactInfo, [name]: value });
	};

	return (
		<div className="container">
			<h2>Contact Information</h2>
			<div className="form__contact">
				<label className="form__input__text">
					Address:
					<input
						className="user__form__input"
						type="text"
						name="address"
						value={contactInfo.address}
						onChange={handleChange}
					/>
				</label>
				<label className="form__input__text">
					Phone Number:
					<input
						className="user__form__input"
						type="text"
						name="phoneNumber"
						value={contactInfo.phoneNumber}
						onChange={handleChange}
					/>
				</label>
				<label className="form__input__text">
					Email Address:
					<input
						className="user__form__input"
						type="email"
						name="emailAddress"
						value={contactInfo.emailAddress}
						onChange={handleChange}
					/>
				</label>
			</div>

			<h2>Emergency Contact</h2>
			<div className="form__contact">
				<label>
					Name:
					<input
						className="user__form__input"
						type="text"
						name="emergencyContactName"
						value={contactInfo.emergencyContactName}
						onChange={handleChange}
					/>
				</label>
				<label>
					Relationship:
					<input
						className="user__form__input"
						type="text"
						name="emergencyContactRelationship"
						value={contactInfo.emergencyContactRelationship}
						onChange={handleChange}
					/>
				</label>
				<label>
					Phone Number:
					<input
						className="user__form__input"
						type="text"
						name="emergencyContactPhoneNumber"
						value={contactInfo.emergencyContactPhoneNumber}
						onChange={handleChange}
					/>
				</label>
			</div>
		</div>
	);
};

export default ContactInfoContainer;
