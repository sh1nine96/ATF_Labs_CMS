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

  createInvoice(id, invoice) {
    return axios.post(`${API_BASE_URL}/createService/addNewInvoices/`, invoice);
  }

  updateInvoice(id, invoice) {
    return axios.put(
      `${API_BASE_URL}/updateService/updateExistingInvoiceRecord/${id}`,
      invoice
    );
  }

  deleteInvoice(id, callback) {
    return axios.delete(
      `${API_BASE_URL}/deleteService/deleteInvoicebyId/?id=${id}`
    );
  }
}

export default new InvoiceService();
