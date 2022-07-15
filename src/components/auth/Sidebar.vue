<template>
    <div>
     <button class="menu-side" @click="menuSide()"><span class="material-symbols-outlined">menu</span></button>
     <div v-if="navside" class="aside-padding"> 
            <div class="logo">
              <span>STM</span>
            </div>
           <div class="flex infin">
              Infin group
              <span class="material-symbols-outlined">unfold_more</span>
            </div>
        <ul class="">
          <li class="flex">
            <router-link to="/Dashboard/Order" class="flex">
              <span class="material-symbols-outlined">shop_two</span>
              <a href="#">Orders</a>
            </router-link>
            </li>
        
       
        <li class="flex">
          <router-link to="/Dashboard/Group" class="flex">
              <span class="material-symbols-outlined">group</span>
              <a href="#">Groups</a>
          </router-link>
        </li>
        <li class="flex">
          <router-link to="/Dashboard/User" class="flex">
            <span class="material-symbols-outlined">person</span>
            <a href="#">Users</a>
          </router-link>
        </li>
        <li class="flex">
          <router-link to="/Dashboard/Credit" class="flex">
            <span class="material-symbols-outlined">album</span>
            <a href="#">Credits</a>
          </router-link>
        </li>
        <li class="flex">
          <router-link to="/Dashboard/Documen" class="flex">
            <span class="material-symbols-outlined">feed</span>
            <a href="#">Documents</a>
          </router-link>
        </li>
      </ul>
      <div class="footer-aside">
        <button class="add">+ Add Food</button>
      </div>
     </div>
    </div>
   
</template>

<script>
export default{
    name: 'sidebar-app',
    data(){
      return{
      
        navside: Boolean,
      }
    },
    methods:{
      menuSide(){
        this.navside=!this.navside;
      },
     OpenOrder(){
       this.$router.push('Content')
     }
    }
}
</script>

<style scoped>
  .logo{
    margin: 1rem;
  }
</style>