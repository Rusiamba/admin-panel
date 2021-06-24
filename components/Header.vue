<template>
  <div class="header">
    <div class="header__menu" v-on:click="clickMenu">
      <img src="https://img.icons8.com/fluent/48/000000/menu--v2.png"/>
    </div>
    <h1 style="color: white">Личный Кабинет</h1>
  </div>
</template>

<script>
export default {
  computed: {
    store() {
      return this.$store.state.header.open.openRoll;
    },
  },
  methods: {
    clickMenu(store) {
      this.$store.commit('diff');
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.88);
  }

  .header__menu {
    cursor: pointer;
    margin-top: 10px;
  }

  h1 {
    margin-left: 20px;
  }
</style>
