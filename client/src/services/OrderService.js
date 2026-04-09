import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

export default {
  getProducts() {
    return apiClient.get('/products');
  },
  placeOrder(orderData) {
    return apiClient.post('/orders', orderData);
  }
}