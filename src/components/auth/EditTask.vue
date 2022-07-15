<template>
    <h1>Edit Task</h1>
    <div class="container w-full">
        <form class="bg-gray-400 rounded p-7 w-4/5 mx-auto flex">
            <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
                <input  v-model="task.name" type="text" placeholder="name of the task" class="w-full border rounded py-2 px-3 mt-5">
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
                <input v-model="task.dueDate" type="date" name="dueDate" id="" class="w-full border rounded py-3 px-2 mt-5" placeholder="Due Date">

                <select  v-model="task.category" name="priority" id="" class="w-full border rounded py-3 px-2 mt-5">
                    <option value="SCHOOL" selected>SCHOOL</option>
                    <option value="HOUSEHOLD" selected>HOUSEHOLD</option>
                    <option value="CAREER" selected>CAREER</option>
                </select>

                <input type="text" class="w-full border rounded py-3 px-2 mt-5" name="name" placeholder="other info">
             <button @click="saveTask()" type="button" class="rounded-full w-full mt-5 px-2 py-3 outine-none bg-green-400 font-bold text-white hover:bg-black ">Save Changes</button>
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
    data(){
        return{
            task:{
                id: "",
                name:"",
                description: "",
                dueDate: "",
                priority: "",
                owner: "",
                category: "",
                createdate: "",
                status: ""
            }
        }

    },
    methods:{
        saveTask(){
            // validation cheker
            let validation=this.validator(this.task);
            if(validation){
               let tasks= localStorage.getItem('tasks');
               if(tasks){
                   tasks=JSON.parse(tasks);
                   tasks=tasks.filter((task) => task.id !== this.task.id);
                  tasks.push(this.task);
                  localStorage.setItem("tasks", JSON.stringify(tasks));
                alert("Task added successfully");
               } 
                }
                
            },
      
        validator(task={name:"", description:"", dueDate:"", priority:"", category:""}){
            //check task name
            if(task.name.length <1){
                alert("taks name is required");
                return false
            }
            // check description
             if(task.description.length <1){
                alert("taks decsription is required");
                return false
            }
            // check duedate
             if(task.dueDate.length <1){
                alert("taks dueDate is required");
                return false
            }
            // check priority
             if(task.priority.length <1){
                alert("taks prioroty is required");
                return false
            }
            // check categuory
             if(task.category.length <1){
                alert("taks categuory is required");
                return false
            }
            // success
            return true;
        },
     
    },
        mounted() {
    const id = this.$route.params.taskId;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.task = tasks.find((task) => task.id == id);
  }
}
</script>