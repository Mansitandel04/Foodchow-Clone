import React, { useState } from "react";
import "./ChooseService.css";
import pickup from "../../assets/media/pickup.png";
import dine_in from "../../assets/media/dine-in.png";
import delivery from "../../assets/media/delivery.png";

const ChooseService = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [pickupOption, setPickupOption] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState({
    bulding_no: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here
    console.log("delivery address submitted:", deliveryAddress);
    onClose();
  };

  const tables = [
    [3, 8, 5, 2, 4],
    [30, 15, 10, 1, 11],
    [100, 7, 26, "Cashier", 55],
    [null, 666, 9, "ROY10", null],
  ];

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {!selectedService && (
          <>
            <h3>Choose Service</h3>
            <div className="services">
              <button onClick={() => setSelectedService("pickup")}>
                <img src={pickup} />
                <p>Pick-up</p>
              </button>
              <button onClick={() => setSelectedService("dine-in")}>
                <img src={dine_in} />
                <p>Dine-in</p>
              </button>
              <button>
                <img
                  src={delivery}
                  onClick={() => setSelectedService("delivery")}
                />
                <p>Delivery</p>
              </button>
            </div>
          </>
        )}
        {selectedService === "pickup" && (
          <>
            <div className="pickup-options">
              <h3>Pick Up</h3>
              <hr />
              <div className="time-selection">
                <p>When Would You Like Order</p>
                <div className="time-options">
                  <button
                    className={pickupOption === "now" ? "active" : ""}
                    onClick={() => setPickupOption("now")}
                  >
                    Now
                  </button>
                  <button
                    className={pickupOption === "later" ? "active" : ""}
                    onClick={() => setPickupOption("later")}
                  >
                    Later
                  </button>
                </div>
              </div>

          
            </div>
          </>
        )}

        {selectedService === "dine-in" && (
          <>
            <div className="dinein-options">
              <h3 > Dine in</h3>
              <div className="time-selection">
                <p>Select Table NO </p>
                <div className="table-grid">
                  {tables.map((row, rowIndex) => (
                    <div key={rowIndex} className="table-row">
                      {row.map((table, colIndex) =>
                        table ? (
                          <button key={colIndex}>{table}</button>
                        ) : (
                          <div key={colIndex} className="empty-cell"></div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="action-buttons">
                <button
                  className="back-btn"
                  onClick={() => setSelectedService(null)}
                >
                  Back
                </button>
                <button className="confirm-btn" onClick={onClose}>
                  Confirm
                </button>
              </div>
            </div>{" "}
          </>
        )}

        {selectedService === "delivery" && (
          <> <div className="delivery-options">
            <h3>Delivery</h3>
            <p>Add delivery address</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    placeholder="Enter Bulding/Block no /Street name"
                    type="text"
                    name="bulding_no"
                    value={deliveryAddress.bulding_no}
                    onChange={handleChange}
                 
                  />
                </div>

                <div className="form-group">
                  <input
                    placeholder="Enter Area"
                    type="text"
                    name="area"
                    value={deliveryAddress.area}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    placeholder=" Nearest landmark or Locality "
                    type="text"
                    name="landmark"
                    value={deliveryAddress.landmark}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="City"
                    type="text"
                    name="city"
                    value={deliveryAddress.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button
                    className="back-btn"
                    type="button"
                    onClick={() => setSelectedService(null)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={onClose}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            </div>
          </>

        )}
      </div>
    </div>
  );
};

export default ChooseService;
