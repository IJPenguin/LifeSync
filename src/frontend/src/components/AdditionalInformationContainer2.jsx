import React, { useState } from "react";

const AdditionalInformationContainer2 = () => {
  const [preferredHospital, setPreferredHospital] = useState("");
  const [languagePreference, setLanguagePreference] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [consentForDataSharing, setConsentForDataSharing] = useState(false);

  const handleCheckboxChange = () => {
    setConsentForDataSharing(!consentForDataSharing);
  };

  return (
    <div>
      <h2>Preferred Hospital or Medical Facility (if any)</h2>
      <input
        type="text"
        value={preferredHospital}
        onChange={(e) => setPreferredHospital(e.target.value)}
      />

      <h2>Language Preference for Communication</h2>
      <input
        type="text"
        value={languagePreference}
        onChange={(e) => setLanguagePreference(e.target.value)}
      />

      <h2>Special Instructions or Preferences (if any)</h2>
      <textarea
        rows="4"
        cols="50"
        value={specialInstructions}
        onChange={(e) => setSpecialInstructions(e.target.value)}
      />

      <h2>Consent for Data Sharing</h2>
      <label>
        <input
          type="checkbox"
          checked={consentForDataSharing}
          onChange={handleCheckboxChange}
        />
        I consent for my data to be shared.
      </label>
    </div>
  );
};

export default AdditionalInformationContainer2;
