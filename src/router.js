import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import mainAuth from './auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        authName: mainAuth.name
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});

router.beforeEach(mainAuth.createNavigationGuard());
router.addRoutes(mainAuth.createCallbackRoutes(router));

export default router;
