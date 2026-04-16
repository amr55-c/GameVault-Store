<template>
  <div class="checkout-page">
    <header class="header">
      <h1>GameVault Store</h1>
      <button @click="logout" class="logout-btn">Logout 🚪</button>
    </header>

    <div class="content-wrapper">
      <div class="games-section">
        <h2>Available Games</h2>
        <div class="products-grid">
          <ProductCard v-for="game in games" :key="game.id" :product="game">
            <template v-slot:header>
              <h3>{{ game.name }}</h3>
            </template>

            <p>Exclusive Price: ${{ game.price }}</p>

            <template v-slot:footer>
              <button @click="addToCart(game)" class="buy-btn">Add to Cart 🎮</button>
            </template>
          </ProductCard>
        </div>
      </div>

      <div class="cart-section">
        <h2>Your Cart 🛒</h2>
        <ul v-if="cartStore.items.length > 0" class="cart-list">
          <li v-for="(item, index) in cartStore.items" :key="index">
            {{ item.name }} <span>(${{ item.price }})</span>
          </li>
        </ul>
        <p v-else>Cart is empty.</p>
        <div class="total-box">
          <h3>Total: ${{ cartStore.total }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';    
import { cartStore } from '../stores/CartStore';

export default {
  components: { ProductCard },
  data() {
    return {
      cartStore,
      games: []
    };
  },
  mounted() {
    this.fetchGames();
  },
  methods: {
    fetchGames() {
      this.games = [
        { id: 1, name: "FIFA 24", price: 50, description: "Football Simulation" },
        { id: 2, name: "GTA V", price: 40, description: "Action Adventure" },
        { id: 3, name: "Cyberpunk", price: 60, description: "Sci-Fi RPG" }
      ];
    },
    addToCart(game) {
      this.cartStore.addGame(game);
    },
    logout() {
      localStorage.removeItem('userToken');
      this.cartStore.clearCart();
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.checkout-page { padding: 20px; font-family: sans-serif; }
.header { display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 10px; }
.logout-btn { background: #ff4757; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; }
.content-wrapper { display: flex; gap: 20px; margin-top: 20px; }
.games-section { flex: 2; }
.products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.cart-section { flex: 1; background: #f9f9f9; padding: 20px; border-radius: 10px; height: fit-content; border: 1px solid #ddd; }
.buy-btn { background: #1e90ff; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; width: 100%; }
.cart-list { list-style: none; padding: 0; }
.cart-list li { display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px dotted #ccc; }
.total-box { margin-top: 15px; border-top: 2px solid #333; }
</style>