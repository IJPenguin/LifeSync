import React, { useState } from "react";

const VitalHealthInfoContainer = () => {
  const [vitalInfo, setVitalInfo] = useState({
    bloodType: "",
    height: "",
    weight: "",
    medicalAlerts: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVitalInfo({ ...vitalInfo, [name]: value });
  };

  return (
    <div className="container">
      <h2>Vital Health Information</h2>
      <label>
        Blood Type:
        <input
          type="text"
          name="bloodType"
          value={vitalInfo.bloodType}
          onChange={handleChange}
        />
      </label>

      <label>
        Height (cm):
        <input
          type="number"
          name="height"
          value={vitalInfo.height}
          onChange={handleChange}
        />
      </label>

      <label>
        Weight (kg):
        <input
          type="number"
          name="weight"
          value={vitalInfo.weight}
          onChange={handleChange}
        />
      </label>

      <label>
        Known Medical Alerts:
        <textarea
          name="medicalAlerts"
          value={vitalInfo.medicalAlerts}
          onChange={handleChange}
        ></textarea>
      </label>
    </div>
  );
};

export default VitalHealthInfoContainer;
