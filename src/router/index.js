import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NewBookmark from '../views/NewBookmark.vue'
import store from "../store";
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/new',
    component: NewBookmark
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["/"];
  const authNotRequiredRoutes = ["/login", "/register"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.path) > -1 && _isAuthenticated) next(false);

  if (authRequiredRoutes.indexOf(to.path) > -1) {
    if (_isAuthenticated) next();
    else next("/login");
  } else {
    next();
  }
});
export default router;