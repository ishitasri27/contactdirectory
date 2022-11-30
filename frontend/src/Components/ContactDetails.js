import React from "react";
import "./style.css";

const ContactDetails = () => {
  return (
    <div>
      <div className="card text-dark bg-info mb-3">
        <div className="card-body">
          <h5 className="card-title">Ishita Srivastava</h5>
          <p className="card-text">Address: Kanpur</p>
          <h5 className="card-header">Contact Number : 7388927865</h5>
        </div>
      </div>
      <div className="card text-dark bg-info mb-3">
        <div className="card-body">
          <h5 className="card-title">Ishika Gupta</h5>
          <p className="card-text">Address: Prayagraj</p>
          <h5 className="card-header">Contact Number : 8317049382</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;