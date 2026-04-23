<template>
  <div class="checkout-page">
    <header class="page-header">
      <div class="logo">
        <h1>GameVault 🎮</h1>
        <span class="version-tag">Web 4.0 Ready</span>
      </div>
      
      <div class="search-container">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search for games (Intelligent Search)..." 
          class="search-input"
        />
      </div>

      <button @click="logout" class="logout-btn">Logout</button>
    </header>

    <div class="main-layout">
      <section class="games-grid-section">
        <h3>Electronic Catalog 📂</h3>
        <div class="grid">
          <ProductCard 
            v-for="game in filteredGames" 
            :key="game.id" 
            :product="game"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </section>

      <aside class="sidebar">
        <div class="cart-container">
          <h3>Your Shopping Cart 🛒</h3>
          <ul v-if="cartStore.items.length > 0" class="cart-list">
            <li v-for="(item, index) in cartStore.items" :key="index" class="cart-item">
              <span>{{ item.name }}</span>
              <span class="item-price">${{ item.price }}</span>
              <button @click="cartStore.removeGame(index)" class="remove-btn">×</button>
            </li>
          </ul>
          <p v-else class="empty-msg">Your cart is waiting for games...</p>
          
          <div class="total-section">
            <h4>Total: ${{ cartStore.total }}</h4>
            <button class="checkout-btn" v-if="cartStore.items.length > 0">Proceed to Payment</button>
          </div>
        </div>

        <div v-if="cartStore.items.length > 0" class="ai-recommendations">
          <h4>Smart Suggestions 🤖</h4>
          <p class="ai-hint">Based on your interests in Web 3.0</p>
          <div class="recommendation-card">
            <strong>Elden Ring</strong>
            <p>98% Match for you!</p>
          </div>
        </div>
      </aside>
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
      searchQuery: '',
      games: [
        { id: 1, name: "FIFA 24", price: 50, description: "Ultimate Sports Experience", rating: 4.8, reviewsCount: 1250 },
        { id: 2, name: "GTA V", price: 40, description: "Open World Adventure", rating: 4.9, reviewsCount: 5400 },
        { id: 3, name: "Cyberpunk", price: 60, description: "Futuristic RPG Action", rating: 4.3, reviewsCount: 820 },
        { id: 4, name: "Spider-Man", price: 70, description: "Heroic Web-Slinging", rating: 4.7, reviewsCount: 2100 }
      ]
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => 
        game.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    handleAddToCart(product) {
      this.cartStore.addGame(product);
      alert(`🔥 Trending Choice! ${Math.floor(Math.random() * 50) + 5} others are looking at ${product.name} right now.`);
    },
    logout() {
      localStorage.removeItem('userToken');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.checkout-page { padding: 20px; max-width: 1200px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.page-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 2px solid #eee; margin-bottom: 20px; }
.version-tag { font-size: 0.7rem; background: #e74c3c; color: white; padding: 2px 8px; border-radius: 10px; margin-left: 10px; vertical-align: middle; }
.search-input { padding: 12px 20px; width: 350px; border-radius: 25px; border: 1px solid #ddd; outline: none; transition: 0.3s; }
.search-input:focus { border-color: #3498db; box-shadow: 0 0 8px rgba(52,152,219,0.2); }
.main-layout { display: flex; gap: 30px; }
.games-grid-section { flex: 3; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
.sidebar { flex: 1; }
.cart-container, .ai-recommendations { background: #fdfdfd; padding: 20px; border-radius: 15px; border: 1px solid #eee; margin-bottom: 20px; }
.ai-recommendations { background: #f0f7ff; border: 1px dashed #3498db; }
.ai-hint { font-size: 0.75rem; color: #3498db; margin-bottom: 10px; }
.cart-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; font-size: 0.9rem; }
.remove-btn { background: none; border: none; color: #e74c3c; font-weight: bold; cursor: pointer; }
.checkout-btn { width: 100%; padding: 12px; background: #2c3e50; color: white; border: none; border-radius: 8px; margin-top: 15px; cursor: pointer; }
.logout-btn { background: #95a5a6; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; }
</style>