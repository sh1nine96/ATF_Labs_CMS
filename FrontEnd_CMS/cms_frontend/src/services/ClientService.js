import axios from "axios";

const API_BASE_URL = "http://localhost:8080/ClientManagement"; // Replace with your backend API URL

class ClientService {
  getClients() {
    return axios.get(`${API_BASE_URL}/readService/listAll`);
  }

  getClientById(id) {
    return axios.get(`${API_BASE_URL}/readService/findById/?id=${id}`);
  }

  createClient(client) {
    return axios.post(`${API_BASE_URL}/createService/addNewClients`, client);
  }

  updateClient(id, client) {
    return axios.put(
      `${API_BASE_URL}/updateService/updateExistingClientRecord/?id=${id}`,
      client
    );
  }

  deleteClient(id, callback) {
    return axios.delete(
      `${API_BASE_URL}/deleteService/deleteClientbyId/?id=${id}`
    );
  }
}

export default new ClientService();
