<template>
  <div class="product-card">
    <slot name="title">
      <h3>{{ product.name }}</h3>
    </slot>
    
    <p>{{ product.description }}</p>
    
    <button @click="$emit('add-to-cart', product.id)">Buy Now</button>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>