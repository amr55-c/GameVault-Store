import { reactive } from 'vue';

export const cartStore = reactive({
  items: [],
  get total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
  addGame(product) {
    this.items.push(product);
  },
  removeGame(index) {
    this.items.splice(index, 1);
  },
  clearCart() {
    this.items = [];
  }
});