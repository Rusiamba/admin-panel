<template>
    <div class="sidebar">
      <nav class="sidebar_nav">
        <ul class="sidebar_nav-ul">
          <li>
            <div class="sidebar_nav-wrapp" v-on:click="$router.push('/main')">
              <img src="https://img.icons8.com/offices/32/000000/home.png"/>
              <span class="sidebar_nav-text">Главная</span>
            </div>
          </li>
          <li>
            <div class="sidebar_nav-wrapp" v-on:click="$router.push('/clients')">
              <img src="https://img.icons8.com/office/30/000000/user-group-man-man--v1.png"/>
              <span class="sidebar_nav-text">Информация о клиентах</span>
            </div>
          </li>
          <li>
            <div class="sidebar_nav-wrapp" v-on:click="$router.push('/projects')">
              <img src="https://img.icons8.com/office/30/000000/windows10-personalization.png"/>
              <span class="sidebar_nav-text">Проекты</span>
            </div>
          </li>
          <li>
            <div class="sidebar_nav-wrapp" v-on:click="$router.push('/dlc')">
              <img src="https://img.icons8.com/office/30/000000/puzzle.png"/>
              <span class="sidebar_nav-text">Дополнительно</span>
            </div>
          </li>
          <li>
            <div class="sidebar_nav-wrapp" v-on:click="$router.push('/report')">
              <img src="https://img.icons8.com/office/30/000000/news.png"/>
              <span class="sidebar_nav-text">Отчёты</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style>
 .sidebar {
   width: 30vh;
   height: 93vh;
   background-color: rgba(0, 0, 0, 0.88);
 }

 .sidebar_layout, .sidebar_nav-text {
   color: white;
 }

 .sidebar_nav {
   margin-top: -25px;
 }

 .sidebar_nav-ul {
   padding: 0;
 }

 .sidebar_nav-wrapp {
   border-left: 0;
   cursor: pointer;
   margin-top: 25px;
   height: 50px;
   display: flex;
 }

 .sidebar_nav-text {
   margin-top: 5px;
   margin-left: 40px;
 }

 .sidebar_nav-wrapp:hover {
   border: solid 1px silver;
   border-left: none;
 }

 li {
   list-style: none;
 }

 img {
   width: 30px;
   height: 30px;
 }
</style>
