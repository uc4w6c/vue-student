import Vue from 'vue'
import 'es6-promise/auto'
import App from './App'
import ErrorBoundary from './ErrorBoundary.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.performance = true // NODE_EN 'development'で測定有効化

// ErrorBoundaryコンポーネントのインストール
Vue.component(ErrorBoundary.name, ErrorBoundary)

Vue.config.errorHandler = (err, vm, info) => {
  console.error('errorHaandler err:', err)
  console.error('errorHaandler vm:', vm)
  console.error('errorHaandler info:', info)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
