import "../Form.css";
import { useEffect, useState } from "react";
import ContactInfoContainer from "./ContactInfoContainer";
import MedicalHistoryContainer from "./MedicalHistoryContainer";
import AdditionalInformationContainer from "./AdditionalInformationContainer";
import AdditionalInformationContainer2 from "./AdditionalInformationContainer2";
import InsuranceInformationContainer from "./InsuranceInfoContainer";
import PrimaryCarePhysicianContainer from "./PrimaryCarePhysicianContainer";
import Navbar from "./Navbar"; // Import the Navbar component
import axios from "axios";

function Form() {
	const [formData, setFormData] = useState({});

	const onChangeHandler = (event) => {
		if (event.target.name === "languages") {
			let copy = { ...formData };
			if (event.target.checked) {
				copy.languages.push(event.target.value);
			} else {
				copy.languages = copy.languages.filter(
					(el) => el !== event.target.value
				);
			}
			setFormData(copy);
		} else {
			setFormData(() => ({
				...formData,
				[event.target.name]: event.target.value,
			}));
		}
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		useEffect(() => {
			fetchData();
		}, []);
	};

	const fetchData = async () => {
		try {
			const response = await axios.post("http://localhost:6969");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="global">
			<Navbar />
			<div className="h_cont">
				<h1 className="services__text__title ">
					User Medical Report Form
				</h1>
			</div>
			<div className="App">
				<form onSubmit={onSubmitHandler}>
					<ContactInfoContainer />
					<MedicalHistoryContainer />
					<AdditionalInformationContainer />
					<AdditionalInformationContainer2 />
					<InsuranceInformationContainer />
					<PrimaryCarePhysicianContainer />
					<div className="form-group">
						<button className="btn" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Form;
