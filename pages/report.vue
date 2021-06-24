<template>
  <div class="report">
    <Header />
    <div class="report_content">
      <Sidebar />
      <h1>Отчёты</h1>
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
  name: "кузщкеы"
}
</script>

<style scoped>
.report_content {
  display: flex;
}
</style>
