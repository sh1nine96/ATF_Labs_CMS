import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClientService from "../services/ClientService";
import "../css/updateClientComponent.css";
const UpdateClientComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState({
    id: "",
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
  console.log(id);

  useEffect(() => {
    console.log(id);
    fetchClient();
  }, []);

  const fetchClient = () => {
    console.log(id);
    ClientService.getClientById(id)

      .then((response) => {
        setClient(response.data);
      })
      .catch((error) => {
        console.error("Error fetching client: ", error);
      });
  };

  const updateClient = () => {
    const { ...clientData } = client;
    ClientService.updateClient(id, clientData)
      .then((response) => {
        console.log("Client updated successfully: ", response.data);
        navigate(`/ClientManagement/readService/listAll`);
      })
      .catch((error) => {
        console.log("Error updating client: ", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };

  return (
    <div className="update-client-container">
      <h2 className="update-client-heading">Update Client</h2>
      <form className="update-client-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Main Contact Person: </label>
          <input
            type="text"
            name="mainContactPerson"
            value={client.mainContactPerson}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Address: </label>
          <input
            type="text"
            name="address"
            value={client.address}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">City: </label>
          <input
            type="text"
            name="city"
            value={client.city}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Country: </label>
          <input
            type="text"
            name="country"
            value={client.country}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">GST-Number: </label>
          <input
            type="text"
            name="gstNumber"
            value={client.gstNumber}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email: </label>
          <input
            type="text"
            name="email"
            value={client.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone: </label>
          <input
            type="text"
            name="phone"
            value={client.phone}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button
          type="button"
          onClick={updateClient}
          className="update-client-button"
        >
          Update Client
        </button>
      </form>
    </div>
  );
};

export default UpdateClientComponent;
