import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import DrinkView from '../views/DrinkView.vue'
import SweetView from '../views/SweetView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView
  },
  {
    path: '/drink',
    name: 'drink',
    component: DrinkView
  },
  {
    path: '/sweet',
    name: 'sweet',
    component: SweetView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.name,
    next();
})
export default router
