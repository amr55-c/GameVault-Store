<template>
  <div class="login-container">
    <h2>GameVault Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Username:</label>
        <input v-model="username" type="text" required />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      if (this.username === 'admin' && this.password === '123') {
        localStorage.setItem('userToken', 'fake-jwt-token');
        this.$router.push('/checkout');
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
div { margin-bottom: 10px; }
input { width: 100%; padding: 8px; }
button { width: 100%; padding: 10px; background-color: #42b983; color: white; border: none; cursor: pointer; }
</style>