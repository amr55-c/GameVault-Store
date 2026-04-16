import { reactive } from 'vue';

export const cartStore = reactive({
  items: [],
  total: 0,
  
  addGame(game) {
    this.items.push(game);
    this.total += game.price;
  },

  removeGame(index) {
    this.total -= this.items[index].price;
    this.items.splice(index, 1);
  },
  
  clearCart() {
    this.items = [];
    this.total = 0;
  }
});