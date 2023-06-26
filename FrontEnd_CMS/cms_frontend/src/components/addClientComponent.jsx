import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from "../services/ClientService";
import "../css/addClientComponent.css";

const AddClientComponent = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    name: "",
    mainContactPerson: "",
    address: "",
    city: "",
    country: "",
    gstNumber: "",
    email: "",
    phone: "",
    isDeleted: false,
  });

  const addNewClient = () => {
    const payload = [client];
    ClientService.createClient(payload)
      .then((response) => {
        console.log("Client added successfully: ", response.data);
        navigate("/ClientManagement/readService/listAll");
      })
      .catch((error) => {
        console.log("Error adding client: ", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };

  return (
    <div className="container">
      <h2>Add New Client</h2>
      <form className="form-container">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Main Contact Person:</label>
          <input
            type="text"
            name="mainContactPerson"
            value={client.mainContactPerson}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={client.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={client.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={client.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>GST-Number:</label>
          <input
            type="text"
            name="gstNumber"
            value={client.gstNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={client.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={client.phone}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          onClick={addNewClient}
          formAction="/ClientManagement/createService/addNewClients"
        >
          Add New Client
        </button>
      </form>
    </div>
  );
};

export default AddClientComponent;
