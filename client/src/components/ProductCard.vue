<template>
  <div class="product-card">
    <div class="product-header">
      <slot name="header">
        <h3>{{ product.name }}</h3>
      </slot>
    </div>

    <div class="product-body">
      <p class="description">{{ product.description }}</p>
      
      <div class="rating-box" v-if="product.rating">
        <span class="stars">⭐ {{ product.rating }}</span>
        <span class="reviews">({{ product.reviewsCount }} reviews)</span>
      </div>

      <slot>
        <p class="price">Price: <strong>${{ product.price }}</strong></p>
      </slot>
    </div>

    <div class="product-footer">
      <slot name="footer">
        <button class="buy-btn" @click="$emit('add-to-cart', product)">Add to Cart 🛒</button>
      </slot>
      
      <button class="ar-btn" @click="simulateAR">
        AR Preview 🥽
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    simulateAR() {
      alert(`Opening Web 4.0 AR Camera...\nVisualizing "${this.product.name}" in your room!`);
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin: 10px;
  border-radius: 12px;
  text-align: center;
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.description {
  color: #666;
  font-size: 0.9rem;
  height: 40px;
}

.rating-box {
  margin: 10px 0;
  font-size: 0.85rem;
  background: #fdf9f0;
  padding: 5px;
  border-radius: 5px;
}
.stars { color: #f39c12; font-weight: bold; }
.reviews { color: #95a5a6; margin-left: 5px; }

.price {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 10px 0;
}

.product-footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
}

.buy-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.ar-btn {
  background: #2ecc71;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
}

.ar-btn:hover { background: #27ae60; }
.buy-btn:hover { background: #2980b9; }
</style>