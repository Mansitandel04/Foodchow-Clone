// BookTablePopup.jsx
import React, { useState } from "react";
import "./BookTablePopup.css";

const BookTablePopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    timeSlot: "",
    guests: 1,
    selectedOption: "",
  });

  const [personalDetail, setPersonalDetail] = useState({
    firstName: "",
    lastName: "",
    mobile: "+91",
    email: "",
    notes: "",
  });

  const [currentStep, setCurrentStep] = useState(1); // 1 = booking details, 2 = personal details

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetail((prev) => ({ ...prev, [name]: value }));
  };

  //function when proceed button clicked and 2nd form apper
  const handleProceed = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  //function for first booking detail
  const handleSubmit = (e) => {
    e.preventDefault();
    const completeBookingData = { ...formData, ...personalDetail };
    // Handle form submission here
    console.log("Booking submitted:", completeBookingData);

    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h3>Book A Table</h3>
        <hr />

        {currentStep === 1 ? (
          <>
            {" "}
            <form onSubmit={handleProceed}>
              <div className="search-section">
                <p>Select Date & Time</p>
              </div>
              <div className="option-section">
                <div className="option-header">
                  <span>Select Date</span>
                  <span>Select Time slot</span>
                </div>
                <div className="option-controls">
                  <select
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  >
                    <option value="">Select Date</option>
                    <option value="2025-07-20">July 20, 2025</option>
                    <option value="2025-07-21">July 21, 2025</option>
                    <option value="2025-07-22">July 22, 2025</option>
                    <option value="2025-07-23">July 23, 2025</option>
                    <option value="2025-07-24">July 24, 2025</option>
                    <option value="2025-07-25">July 25, 2025</option>
                  </select>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="">Select Time Slot</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="search-section">
                <p> Select slotes & No. of guests</p>
              </div>

              <div className="option-section">
                <div className="option-header">
                  <span>Availabe slots</span>
                  <span>No. of Guests</span>
                </div>
                <div className="option-controls">
                  <select
                    name="availableSlot"
                    value={formData.availableSlot}
                    onChange={handleChange}
                  >
                    <option value="">Select Available Time</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                  </select>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="10">10 Guests</option>
                    <option value="12">12 Guests</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="proceed-btn">
                Proceed
              </button>
            </form>{" "}
          </>
        ) : (
          <>
            <div className="booking-summary">
              
              <p>
                <span >Selected Date:</span> {formData.date}
              </p>
              <p>
                <span>Selected Timeslot:</span> {formData.timeSlot}
              </p>
              <p>
                <span>Selected Time:</span> {formData.availableSlot}
              </p>
              <p>
                <span>Selected Guest:</span> {formData.guests}
              </p>
            </div>
            <hr />

            <h4>Enter Personal Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                
                  <input
                  placeholder="Firstname"
                    type="text"
                    name="firstName"
                    value={personalDetail.firstName}
                    onChange={handlePersonalChange}
                    required
                  />
                </div>

                <div className="form-group">
               
                  <input
                    placeholder="lastname"
                    type="text"
                    name="lastName"
                    value={personalDetail.lastName}
                    onChange={handlePersonalChange}
                    required
                  />
                </div>

                <div className="form-group">
                  
                  <input
                    placeholder="MobileNumber"
                    type="number"
                    name="mobile"
                    value={personalDetail.mobile}
                    onChange={handlePersonalChange}
                    
                    required
                  />
                </div>
                <div className="form-group">
               
                  <input
                    placeholder="email address"
                    type="email"
                    name="email"
                    value={personalDetail.email}
                    onChange={handlePersonalChange}
                  
                    required
                  />
                </div>

              <div className="form-group">
                
                <textarea
                  placeholder="Any Notes (Optional)"
                  name="notes"
                  value={personalDetail.notes}
                  onChange={handlePersonalChange}
                  rows="3"
                />
              </div>

             <div className="form-actions">
              <button className="back-btn" type="button" onClick={()=> setCurrentStep(1)}>Back</button>
              <button type="submit" className="submit-btn">Submit</button>
             </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookTablePopup;
