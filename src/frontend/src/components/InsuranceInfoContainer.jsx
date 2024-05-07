import React, { useState } from "react";

const InsuranceInformationContainer = () => {
	const [insuranceInfo, setInsuranceInfo] = useState({
		provider: "",
		policyNumber: "",
		groupNumber: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInsuranceInfo({ ...insuranceInfo, [name]: value });
	};

	return (
		<div className="container">
			<h2 className="form__heading">Insurance Information</h2>
			<div className="form__contact">
				<label>
					Insurance Provider:
					<input
						className="user__form__input"
						type="text"
						name="provider"
						value={insuranceInfo.provider}
						onChange={handleChange}
					/>
				</label>

				<label>
					Policy Number:
					<input
						className="user__form__input"
						type="text"
						name="policyNumber"
						value={insuranceInfo.policyNumber}
						onChange={handleChange}
					/>
				</label>

				<label>
					Group Number:
					<input
						className="user__form__input"
						type="text"
						name="groupNumber"
						value={insuranceInfo.groupNumber}
						onChange={handleChange}
					/>
				</label>
			</div>
		</div>
	);
};

export default InsuranceInformationContainer;
