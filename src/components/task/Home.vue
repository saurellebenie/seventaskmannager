<template>
<Navbar />
   <h1 class="font-bold text-center text-lg p-4">Task Home</h1> 
      <div class="container addTask-search mt-3 flex justify-center">
       <button @click="this.$router.push('/addtask')" class="bg-gray-500 rounded-full py-2 px-8 
       mr-10 text-white font-bold">Add Task</button>
       <input class="border rounded-full py-2 px-8" type="search" placeholder="Search a task">
      </div>
       <!-- Task list -->
       <h1 class="font-bold text -center text-lg p-4 mt-5">Task List</h1>
       <div class="container justify-center">
           <div class="container list-header flex justify-between mx-auto border bg-gray-500 text-black">
               <span class="font-bold pl-8 py-4 px-2 py-2">Name</span>
                <span class="font-bold pr-8 py-4 px-2 py-2">Actions</span>
           </div>
       </div>
       <div class="container task-actions mt-2 justify-center">
           
           <div v-for="task of tasks" :key="task?.id" class=" container task-item flex justify-center ">
               <span class="w-2/3">{{task?.name}}</span>
               <div class="container actions flex justify-self-end w-1/3 ">
                   
                   <span class="rounded bg-green-400 font-bold 
                   text-white p-2 mx-1  apitalize cursor-pointer hover:bg-gray-600" 
                   @click="this.$router.push('/edittask/'+ task?.id)">Edit</span>
                   
                   <span class="rounded bg-yellow-400 font-bold 
                   text-white p-2 mx-1  apitalize cursor-pointer hover:bg-gray-600" 
                   @click="this.$router.push('/taskdetails/'+ task?.id)">View</span>
                   
                   <span class="rounded bg-red-400 font-bold 
                   text-white p-2 mx-1 capitalize cursor-pointer hover:bg-gray-600" 
                   @click="deleteTask(task?.id)">Delete</span>
                </div>
            </div>
       
       </div>
       
  
</template>
<script>
import Navbar from './navbar.vue';
export default {
    name: "task-home",
    data() {
        return {
            tasks: []
        };
    },
    methods: {
        deleteTask(id) {
            let confirm = window.confirm("Are you sure you want to delete this task?");
            if (confirm) {
                let tasks = localStorage.getItem("tasks");
                tasks = JSON.parse(tasks);
                tasks = tasks.filter((task) => task.id !== id);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                alert("Task deleted successfully");
                window.location.reload();
            }
            else {
                alert("Task not deleted");
            }
        },
        getTasks() {
            let tasks = localStorage.getItem("tasks");
            if (tasks) {
                this.tasks = JSON.parse(tasks);
                if (this.tasks.length < 1) {
                    alert("No tasks available. Please start by adding a new task");
                }
            }
            else {
                alert("No tasks available. Please start by adding a new task");
            }
        }
    },
    mounted() {
        this.getTasks();
    },
    components: { Navbar }
}
</script>
<style>

   
</style>