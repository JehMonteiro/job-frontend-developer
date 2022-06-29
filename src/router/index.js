import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue';
import Acessorios from '../views/Acessorios.vue';
import Carrinho from '../views/Carrinho.vue';
import Eletronicos from '../views/Eletronicos.vue';
import Masculino from '../views/Masculino.vue';
import Feminino from '../views/Feminino.vue';
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/acessorios',
    name: 'acessorios',
    component: Acessorios
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: Carrinho
  },
  {
    path: '/eletronicos',
    name: 'eletronicos',
    component: Eletronicos
  },
  {
    path: '/masculino',
    name: 'masculino',
    component: Masculino
  },
  {
    path: '/feminino',
    name: 'feminino',
    component: Feminino
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({ history: createWebHistory(),routes });

export default router;
