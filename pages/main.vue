<template>
  <div class="main">
    <Header />
    <div class="main_content">
      <Sidebar />
      <h1>Главая</h1>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
export default {
  components: {
    Header,
    Sidebar
  },
  name: "main"
}
</script>

<style scoped>
.main_content {
  display: flex;
}
</style>
