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
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={contactInfo.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={contactInfo.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          name="emailAddress"
          value={contactInfo.emailAddress}
          onChange={handleChange}
        />
      </label>

      <h2>Emergency Contact</h2>
      <label>
        Name:
        <input
          type="text"
          name="emergencyContactName"
          value={contactInfo.emergencyContactName}
          onChange={handleChange}
        />
      </label>
      <label>
        Relationship:
        <input
          type="text"
          name="emergencyContactRelationship"
          value={contactInfo.emergencyContactRelationship}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="emergencyContactPhoneNumber"
          value={contactInfo.emergencyContactPhoneNumber}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ContactInfoContainer;
