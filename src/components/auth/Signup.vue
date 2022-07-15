<template>
<div class="login-page">
     <div class="logo">
        <span class="text-3xl">STM</span>
        <h4 class="mx-auto h-12 w-auto">Seven task manager</h4> 
    </div>
    <div class="container min-h-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
   
        <div class="form  w-full space-y-10">
            <div>
                <h1 class="mt-6 text-center text-3xl font-bold text-white-900">Get your free account</h1>
            </div>
            <form action="#" class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <button type="button" class="social-button outline-none relative flex py-2 px-3 justify-center font-medium">
                            <span class="absolute left-0 flex pl-3"><img class="mac h-5 w-5 text-indigo-500 group-hover:text-indigo-400" src="@/assets/icons8-mac-os-48.png" alt=""></span>Continue with Apple
                        </button>
                    </div>
                     <div>
                        <button type="button" class=" social-button outline-none relative flex py-2 px-2 justify-center font-medium">
                            <span class="absolute left-0 flex pl-3"><img class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" src="@/assets/icons8-logo-google-48.png" alt=""></span>Continue with Google
                        </button>
                    </div>
                    <div class="flex">
                        
                        <h2 >OR</h2>
                        
                    </div>
                    <div>
                        <label for="Email" class="justify-star">Work Email</label>
                        <input v-model="email" type="text" class=" py-2 px-3 justify-center font-medium" placeholder="hello@compagny.com" required>
                    </div>
                    <div>
                        <button class="login-button  flex py-2 px-3 justify-center font-medium" type="button">Continue with email</button>
                    </div>
                </div>
            </form>
            <div class="details">
                <p>Already have a account <strong><a href="/Dashboard">Login</a></strong> </p>
            </div>
        </div>

    </div>
</div>
</template>
<script>
export default {
    name: 'sign-up',
    data(){
        return {
            email:''
        }
    }
}
</script>
<style scoped>
.login-page{
	background: rgba(47,47,47,0.98);
	color: white;
 }
.logo{
	margin-left: 4rem;
}
button,
input{
	border: 2px solid gray;
	border-radius: 10px;
	width: 80%;
	display: block;
	margin: 1rem auto;
}
input{
	background: #000;
}
label{
	margin-left: 2rem;
}
.form{
	display: block;
	background: #000;
	width: 80%;
}

.container{
	margin: 0 auto;
}
p{
	color: greenyellow;
	margin-left: 2rem;
}
.login-button{
	background: #fff;
	color: gray;
}
.login-button:hover{
	border: 3px solid greenyellow;
}
.social-button:hover{
	background: gray;
	color: #000;
}
.social-button{
	font-size: 12px;
}
.details p{
	color: gray;
	text-align: center;
	margin: 1rem;
}
.details p strong{
	color: #fff;
}
strong:hover{
	text-decoration:underline;
}
 
h2{
   text-align: center;  
   width: 100%;
  
 }
@media only screen and (min-width: 600px) {
	/* For tablets: */
button,
 nput{
	width: 80%;
}
label,p{
	margin-left: 3rem;
}
.form{
	display: block;
	background: #000;
	width: 40%;
}
.details p{
	margin: 3rem;
}
}

 
</style>