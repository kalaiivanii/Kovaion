import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../Styles/adddetails.css";

const Adddetails = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fields = [
    { label: "Email*", type: "email", name: "email1", isPhone: false, required: true },
    { label: "Email", type: "email", name: "email2", isPhone: false },
    { label: "Title", type: "text", name: "title" },
    { label: "Phone Number", type: "tel", name: "phone", isPhone: true },
    { label: "Mobile*", type: "tel", name: "mobile", isPhone: true, required: true },
    { label: "Lead Score", type: "text", name: "leadScore" },
    { label: "Industry", type: "text", name: "industry" },
    { label: "Annual Revenue", type: "text", name: "revenue", isPhone: true },
    { label: "Email OTP Out", type: "text", name: "otp" },
    { label: "Company", type: "text", name: "company" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Email", type: "email", name: "email3" },
    { label: "FAX", type: "tel", name: "fax", isPhone: true },
    { label: "Website", type: "text", name: "website" },
    { label: "Lead Status", type: "text", name: "status" },
    { label: "No of Emp", type: "number", name: "employees" },
    { label: "Rating", type: "text", name: "rating" },
    { label: "Secondary Email", type: "email", name: "secondary" },
  ];

  // Generic save function to localStorage
  const saveDataToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem("formDataList")) || [];
    savedData.push(data);
    localStorage.setItem("formDataList", JSON.stringify(savedData));
  };

  // Save & go to home
  const onSubmitSave = (data) => {
    saveDataToLocalStorage(data);
    navigate("/");
  };

  // Save & reset for new form
  const onSubmitSaveAndNew = (data) => {
    saveDataToLocalStorage(data);
    reset(); // reset form to blank
  };

  // Cancel action
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit(onSubmitSave)}>
      {fields.map((field, index) => (
        <div className="form-group" key={index}>
          <label>{field.label}</label>
          {field.isPhone ? (
            <div className="phone-field">
              <select {...register(`${field.name}Code`)}>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type={field.type}
                placeholder="0000000000"
                {...register(field.name, field.required ? { required: `${field.label} is required` } : {})}
              />
            </div>
          ) : (
            <>
              <input
                type={field.type}
                placeholder="Place holder text"
                {...register(field.name, field.required ? { required: `${field.label} is required` } : {})}
              />
              {errors[field.name] && (
                <small className="error-text">{errors[field.name].message}</small>
              )}
            </>
          )}
        </div>
      ))}

      <div className="button-group">
        {/* Save button - default form submit */}
        <button type="submit" className="btn outline-btn">Save</button>

        {/* Cancel button */}
        <button type="button" className="btn outline-btn" onClick={handleCancel}>Cancel</button>

        {/* Save & New - custom handler */}
        <button
          type="button"
          className="btn filled-btn"
          onClick={handleSubmit(onSubmitSaveAndNew)}
        >
          Save & New
        </button>
      </div>
    </form>
  );
};

export default Adddetails;
