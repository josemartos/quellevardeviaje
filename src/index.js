import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import Cookies from './pages/Cookies.vue';

Vue.use(VueRouter);

// General styles
import 'styles/main.scss';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/politica-cookies', component: Cookies }
  ]
});

new Vue({
  el: '#app',
  router,
  render: function(h) {
    return h(App);
  }
});
