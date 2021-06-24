<template>
  <div class="container">
    <div class="header_wrapper">
      <Header />
    </div>
    <Sidebar />
    <div class="wall">
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar";
import Header from "~/components/Header";
export default {
  components: {
    Sidebar,
    Header
  }
}
</script>

<style>
</style>
