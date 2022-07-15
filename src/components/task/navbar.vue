<template>
    <nav class="navbar">
     <!-- LOGO -->
     <div class="logo">STM</div>
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
         <li><a href="/"><img src="" alt=""></a></li>
        <li><button class="add"><a href="/Signup">Sign in</a></button></li>
      
       </div>
     </ul>
   </nav>
</template>
<style scoped>
  .menu li .add a{
    color: beige;
  }
   .menu li .add a:hover{
    color: black;
   }
</style>