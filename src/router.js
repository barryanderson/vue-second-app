import { createRouter, createWebHistory } from 'vue-router';

import CoachList from './pages/coaches/CoachList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestList from './pages/requests/RequestList.vue';
import RequestRegistration from './pages/requests/RequestRegistration.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: RequestRegistration }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
export default router;
