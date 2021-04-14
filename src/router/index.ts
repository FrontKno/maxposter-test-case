import { requestStore } from '@/store';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/note/:id',
    name: 'NoteView',
    component: () => import('../views/NoteView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  requestStore.cancelPendingRequests();
  next();
});

export default router;
