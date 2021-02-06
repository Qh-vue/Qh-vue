// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import router from './router'

Vue.config.productionTip = false
// Vue.use(VueI18n)
Vue.use(Element)

Vue.config.lang = 'zh-cn'
Vue.locale('zh-cn', zhLocale)
Vue.locale('en', enLocale)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  components: { App },
  template: '<App/>'
})



