<template>
    <h1>Add Task</h1>
    <div class="container w-full">
        <form class=" rounded p-7 w-4/5 mx-auto flex">
            <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
                <input  v-model="task.name" type="text" placeholder="name of the task" class="w-full border text-black rounded py-2 px-3 mt-5">
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
             <button @click="saveTask()" type="button" class="rounded-full w-full mt-5 px-2 py-3 outine-none font-bold text-white hover:bg-black ">Add taks</button>
             </div>

        </form>
    </div>
</template>

<style scoped>
h1{
    font-size: 20px;
    text-transform:uppercase;
    text-align: center;
    margin: 2rem;
   font-weight: bolder;
   color: #555;
}
button{
    background: #dc4c3e;
}
button:hover{
    background: #b03d32;
}
input,textarea,select{
    border: 2px solid #555;
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
            console.log("here is task data", this.task)
            
            let taksId= Math.ceil(Date.now());
            console.log("task id:", taksId);
            
            let taskOwner = localStorage.getItem("username");
            console.log("this is the task owner:", taskOwner);
            this.task.id = taksId;
            this.task.owner= taskOwner;
            this.task.createdate= new Date(Date.now());
            this.task.status ="PROGRESS"
            
            
            // validation cheker
            let validation=this.validator(this.task);
            if(validation){
               let tasks= localStorage.getItem('tasks');
               if(tasks){
                   tasks=JSON.parse(tasks);
                   tasks.push(this.task);
                  
               } 
               else{
                   tasks=[];
                   tasks.push(this.task);
                }
                localStorage.setItem("tasks", JSON.stringify(tasks));
                alert("Task added successfully");
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
        }
    }
}
</script>