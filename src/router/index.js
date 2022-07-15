// import Vue from 'vue';
import {createWebHistory, createRouter } from 'vue-router'
import Home from '../components/task/Home'
import Login from '../components/auth/Login'
import AddTask from '../components/auth/AddTask'
import EditTask from '../components/auth/EditTask'
import TaskDetails from '../components/auth/TaskDetails'
import Dashboard from '../components/auth/Dashboard'
import Order from '../components/task/Order.vue'
import Sidebar from '../components/auth/Sidebar'
import navbar from '../components/task/navbar'
import Signup from '../components/auth/Signup'
import Group from '../components/task/Group.vue'
import Credit from '../components/task/Credit'
import Documen from '../components/task/Documen'
import User from '../components/task/User'
import Header from '../components/task/Header'


// Vue.use(Router)

const routes = [
    {
        path: '/Signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children:[
            {
                path: 'Group',
                name: 'Group',
                component: Group
            },
            {
                path: 'addtask',
                name: 'addTask',
                component:AddTask
            },
            {
                path: 'edittask/:taskId',
                name: 'editTask',
                component: EditTask
            },
            {
                path: 'taskdetails/:id',
                name: 'taskDetails',
                component: TaskDetails
            },
            {
                path: 'Order',
                name: 'Order',
                component: Order,
            },
            {
                path: 'User',
                name: 'User',
                component: User,
            },
            {
                path:'Documen',
                name: 'Documen',
                component: Documen,
            },
            {
                path: 'Credit',
                name: 'Credit',
                component:  Credit,
            },
            {
                path: '/Sidebar',
                name: 'Sidebar',
                component: Sidebar,
            },
            {
                path: '/Header',
                name: 'Header',
                component: Header
            }
        ]
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        
    },
    {
        path: '/Login',
        name: 'login',
        component: Login,
        
    },
    {
        path: '/navbar',
        name: 'navbar',
        component: navbar,
    }
   
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),routes
})

export default router