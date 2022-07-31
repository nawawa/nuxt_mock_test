<template>
  <section>
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <div>
        <label for="basic_id">id</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for="basic_password">password</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </section>
</template>

<script>
export default {  
  data: () => ({
    name: '',
    password: '',
  }),
  methods: {
    login() {
      if (this.name === this.$config.BASIC_NAME && this.password === this.$config.BASIC_PATH) {
        this.$cookiz.set("authenticated", true)
        return this.$router.push('/')
      } else {
        this.$cookiz.set("authenticated", false)
      }
    }
  }
}
</script>