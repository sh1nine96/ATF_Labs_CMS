import axios from "axios";

const API_BASE_URL = "http://localhost:8080/ClientManagement"; // Replace with your backend API URL

class InvoiceService {
  getClientDetails(id) {
    return axios.get(`${API_BASE_URL}/readService/findById/?id=${id}`);
  }

  getInvoices() {
    return axios.get(`${API_BASE_URL}/readService/listAllInvoices`);
  }

  getInvoiceById(id) {
    return axios.get(`${API_BASE_URL}/readService/findInvoiceById/?id=${id}`);
  }

  async createInvoice(invoice) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/createService/addNewInvoices`,
        invoice
      );
      return response.data;
    } catch (error) {
      console.error("Error creating invoice:", error);
      throw error;
    }
  }

  updateInvoice(id, invoice) {
    return axios.put(
      `${API_BASE_URL}/updateService/updateExistingInvoiceRecord/${id}`,
      invoice
    );
  }

  // deleteInvoice(id) {
  //   return axios.delete(
  //     `${API_BASE_URL}/deleteService/deleteInvoicebyId/?id=${id}`
  //   );
  // }

  async deleteInvoice(id) {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/deleteService/deleteInvoicebyId/?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error deleting invoice with ID: ${id}`, error);
      throw error;
    }
  }
}

export default new InvoiceService();
