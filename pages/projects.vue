<template>
    <div class="projects">
      <Header />
      <div class="projects_content">
        <Sidebar />
        <h1>Проекты</h1>
      </div>
    </div>
</template>

<script>
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
export default {
  components: {
    Sidebar,
    Header,
  },
  name: "projects"
}
</script>

<style scoped>
.projects_content {
  display: flex;
}
</style>
