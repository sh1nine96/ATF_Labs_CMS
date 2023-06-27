import axios from "axios";

const API_BASE_URL = "http://localhost:8080/ClientManagement"; // Replace with your backend API URL

class ClientService {
  getClients() {
    return axios.get(`${API_BASE_URL}/readService/listAll`);
  }

  getClientById(id) {
    return axios.get(`${API_BASE_URL}/readService/findById/?id=${id}`);
  }

  async createClient(client) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/createService/addNewClients`,
        client
      );
      return response.data;
    } catch (error) {
      console.error("Error creating client:", error);
      throw error;
    }
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
