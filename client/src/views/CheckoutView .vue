<template>
  <div class="checkout-container">
    <h1>GameVault - Checkout Page</h1>
    
    <div v-if="loading">Loading Data...</div>
    
    <div v-else class="game-grid">
      <ProductCard 
        v-for="game in games" 
        :key="game.id" 
        :product="game"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import OrderService from '../services/OrderService';
import ProductCard from '../components/ProductCard.vue';
import { cartStore } from '../stores/CartStore';
export default {
  name: 'CheckoutView',
  components: { ProductCard },
  data() {
    return {
      games: [],
      loading: true
    };
  },
  async mounted() {
    try {
      const response = await OrderService.getProducts();
      this.games = response.data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    handleAddToCart(game) {
      console.log("Added to cart:", game.name);
      cartStore.addGame(game); 
  alert(game.name + " added to store!");
    }
  }
}
</script>