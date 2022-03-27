// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import Element from 'element-ui';
import router from "./router";

Vue.config.productionTip = false

Vue.use(router)
Vue.use(Element, { size: 'small', zIndex: 3000 });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
