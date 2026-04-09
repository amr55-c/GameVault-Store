import { reactive } from 'vue'; 

export const cartStore = reactive({    
  state: {
    items: [],
    total: 0
  },
  addGame(game) {
    this.state.items.push(game);
    console.log("Game added to global store!");
  }
});