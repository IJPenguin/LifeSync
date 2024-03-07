import "../Form.css";
import { useState } from "react";
import ContactInfoContainer from "./ContactInfoContainer";
import MedicalHistoryContainer from "./MedicalHistoryContainer";
import AdditionalInformationContainer from "./AdditionalInformationContainer";
import AdditionalInformationContainer2 from "./AdditionalInformationContainer2";
import InsuranceInformationContainer from "./InsuranceInfoContainer";
import PrimaryCarePhysicianContainer from "./PrimaryCarePhysicianContainer";
import Navbar from "./Navbar"; // Import the Navbar component

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
    console.log(formData);
  };

  return (
    <div className="global">
      <Navbar />

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
