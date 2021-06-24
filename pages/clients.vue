<template>
  <div class="clients">
    <Header />
    <div class="clients_content">
      <Sidebar />
      <div class="clients_wall">
        <h1>Клиентская База</h1>
        <div class="clients_buttons">
          <button class="btn">Список клиентов</button>
          <button class="btn">Учётные данные</button>
        </div>
      </div>
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
  name: "clients"
}
</script>

<style scoped>
.clients_content {
  display: flex;
}

.clients_buttons {
  display: flex;
}

.btn {
  margin-top: 50px;
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  width: 200px;
  height: 120px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 15px;
}

.btn:last-child {
  margin-left: 50px;
}
</style>
