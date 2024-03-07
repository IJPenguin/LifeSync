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
      <h2>Insurance Information</h2>
      <label>
        Insurance Provider:
        <input
          type="text"
          name="provider"
          value={insuranceInfo.provider}
          onChange={handleChange}
        />
      </label>

      <label>
        Policy Number:
        <input
          type="text"
          name="policyNumber"
          value={insuranceInfo.policyNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Group Number:
        <input
          type="text"
          name="groupNumber"
          value={insuranceInfo.groupNumber}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default InsuranceInformationContainer;
