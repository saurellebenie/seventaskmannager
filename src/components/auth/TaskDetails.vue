<template>
  <h1>Task Details</h1>
  <div class="container w-full">
        <form class="bg-gray-400 rounded p-7 w-4/5 mx-auto flex">
            <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
                <input  v-model="task.name" type="text" placeholder="name of the task" class="w-full border rounded py-2 px-3 mt-5" readonly>
                <textarea  v-model="task.description" name="description" 
                id="" 
                cols="30"
                rows="10"
                class="w-full border rounded py-3 px-2 mt-5"
                placeholder="descibe your task"></textarea>
                
                
                <select  v-model="task.priority" name="priority" id="" class="w-full border rounded py-3 px-2 mt-5">
                    <option value="HIGH">HIGH</option>
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                </select>
            </div>
             <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
                <input v-model="task.dueDate" type="date" name="dueDate" id="" class="w-full border rounded py-3 px-2 mt-5" placeholder="Due Date" readonly>

                <select  v-model="task.category" name="priority" id="" class="w-full border rounded py-3 px-2 mt-5">
                    <option value="SCHOOL" selected>SCHOOL</option>
                    <option value="HOUSEHOLD" selected>HOUSEHOLD</option>
                    <option value="CAREER" selected>CAREER</option>
                </select>

                <input type="text" class="w-full border rounded py-3 px-2 mt-5" name="name" placeholder="other info" readonly>
             <button @click="this.$router.push('/home')" type="button" class="rounded-full w-full mt-5 px-2 py-3 outine-none bg-green-400 font-bold text-white hover:bg-black ">Go Back</button>
             </div>

        </form>
    </div>
</template>



<style scoped>
h1{
    font-size: 20px;
    text-transform:uppercase;
}

</style>

<script>
export default {
    name: 'Add-Task',
     data() {
    return {
      task: {
        id: "",
        name: "",
        description: "",
        dueDate: "",
        priority: "",
        owner: "",
        category: "",
        createdAt: "",
        status: "",
      },
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.task = tasks.find((task) => task.id == id);
  }
    
}
</script>