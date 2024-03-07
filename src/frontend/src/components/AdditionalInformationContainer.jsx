import React, { useState } from "react";

const AdditionalInformationContainer = () => {
  const [advancedDirectives, setAdvancedDirectives] = useState({
    livingWillOrHealthcareProxy: "",
    endOfLifePreferences: "",
  });
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "livingWillOrHealthcareProxy" ||
      name === "endOfLifePreferences"
    ) {
      setAdvancedDirectives({ ...advancedDirectives, [name]: value });
    } else {
      setAdditionalInfo(value);
    }
  };

  return (

<div className="container">
      <h2>Advanced Directives</h2>
      <label>
        Living Will or Healthcare Proxy (if applicable):
        <input
          type="text"
          name="livingWillOrHealthcareProxy"
          value={advancedDirectives.livingWillOrHealthcareProxy}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        End-of-Life Preferences (if applicable):
        <input
          type="text"
          name="endOfLifePreferences"
          value={advancedDirectives.endOfLifePreferences}
          onChange={handleChange}
        />
      </label>

      <h2>Additional Information</h2>
      <textarea
        rows="4"
        cols="50"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
    </div>
  );
};

export default AdditionalInformationContainer;
