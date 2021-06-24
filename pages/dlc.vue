<template>
  <div class="dlc">
    <Header />
    <div class="dlc_content">
      <Sidebar />
      <h1>Дополнительно</h1>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
export default {
  components: {
    Header,
    Sidebar,
  },
  name: "dlc"
}
</script>

<style scoped>
.dlc_content {
  display: flex;
}
</style>
