<template>
  <div class="product-card">
    <slot name="header">
      <h3>{{ product.name }}</h3>
    </slot>

    <div class="product-body">
      <p>{{ product.description }}</p>
      <slot>
        <p>Price: {{ product.price }}</p>
      </slot>
    </div>

    <div class="product-footer">
      <slot name="footer">
        <button @click="$emit('add-to-cart', product)">Buy Now</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
}
.product-footer {
  margin-top: 10px;
}
</style>