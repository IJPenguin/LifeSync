import React, { useState } from "react";

const PrimaryCarePhysicianContainer = () => {
  const [hasPrimaryCarePhysician, setHasPrimaryCarePhysician] = useState(false);
  const [physicianInfo, setPhysicianInfo] = useState({
    name: "",
    contact: "",
  });

  const handleCheckboxChange = (e) => {
    setHasPrimaryCarePhysician(e.target.checked);
    if (!e.target.checked) {
      // Clear physician info if checkbox is unchecked
      setPhysicianInfo({
        name: "",
        contact: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhysicianInfo({ ...physicianInfo, [name]: value });
  };

  return (
    <div className="container">
      <h2>Primary Care Physician</h2>
      <label>
        <input
          type="checkbox"
          checked={hasPrimaryCarePhysician}
          onChange={handleCheckboxChange}
        />
        Has Primary Care Physician
      </label>

      {hasPrimaryCarePhysician && (
        <div>
          <label>
            Name of Primary Care Physician:
            <input
              type="text"
              name="name"
              value={physicianInfo.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Contact Information for Primary Care Physician:
            <input
              type="text"
              name="contact"
              value={physicianInfo.contact}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default PrimaryCarePhysicianContainer;
