import Login from './components/Login.vue';
import Home from './components/Home.vue';

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
];