<template>

<div class="main">
  <div class="section-padding">
    <nav class="navbar">
     <!-- LOGO -->
     <div class="logo"></div>
     <!-- NAVIGATION MENU -->
     <ul class="nav-links">
       <!-- USING CHECKBOX HACK -->
       <input type="checkbox" id="checkbox_toggle">
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <!-- NAVIGATION MENUS -->
       <div class="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/">About</a></li>
         <li><a href="/">Services</a></li>
         <li><a href="/"><span class="material-symbols-outlined">notifications</span></a></li>
          <li><img src="" alt="#"></li>
      
       </div>
     </ul>
   </nav>
    <Header />
    <router-view></router-view>
  </div>
  
  <div class="main-aside">
    <Sidebar />
  </div>
</div>

</template>
<script>

import Sidebar from '@/components/auth/Sidebar.vue'
import Header from '../task/Header.vue';

export default {
    name: "Dashboard-app",
    components: {
    Sidebar,
    Header
}
};
</script>
<style scoped>


</style>

