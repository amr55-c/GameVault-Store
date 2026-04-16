import { reactive } from 'vue';

export const cartStore = reactive({
  items: [],
  total: 0,
  
  addGame(game) {
    this.items.push(game);
    this.total += game.price;  
  },
  
  clearCart() {
    this.items = [];
    this.total = 0;
  }
});