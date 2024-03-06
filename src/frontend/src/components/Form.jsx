import '../Form.css';
import { useState } from 'react';
// Contact Information:

// Address
// Phone Number
// Email Address (if available)
// Emergency Contact:

// Name of Emergency Contact
// Relationship to Patient
// Phone Number of Emergency Contact
// Medical History:
// different test reports submission (png,jpeg,pdf) , a drop down menu to select different type of test (blood test, urine test, etc. add yourself about 5-6)

// Allergies (e.g., food allergies, medication allergies)
// Current Medications (including dosage and frequency)
// Chronic Medical Conditions (e.g., diabetes, hypertension)
// Past Surgeries or Medical Procedures
// Family Medical History (if known)
// Vital Health Information:

// Blood Type
// Height and Weight
// Known Medical Alerts (e.g., pacemaker, insulin pump)
// Insurance Information:

// Insurance Provider
// Policy Number
// Group Number (if applicable)
// Primary Care Physician:

// Name of Primary Care Physician
// Contact Information for Primary Care Physician
// Advanced Directives:

// Living Will or Healthcare Proxy (if applicable)
// End-of-Life Preferences (if applicable)
// Additional Information:

// Preferred Hospital or Medical Facility (if any)
// Language Preference for Communication
// Special Instructions or Preferences (if any)
// Consent for Data Sharing:
function Form() {

  const [formData, setFormData] = useState({
    username: 'default',
    email: 'Your email here...',
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Languages</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
              <label htmlFor="javascript">Javascript</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

