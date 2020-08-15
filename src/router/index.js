import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagination from '../view/Pagination.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/pagination",
        name: "Pagination",
        component: Pagination
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router