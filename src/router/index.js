import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/index'
import service from '@/page/service.vue'
import serviceSecond from '@/page/serviceSecond.vue'
import serviceThrid from '@/page/serviceThrid.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,

       },
        {
            path: '/service',
            name: 'service',
            component: service,
        },
        {
            path: '/serviceSecond',
            name: 'serviceSecond',
            component: serviceSecond
        },
        {
            path: '/serviceThrid',
            name: 'serviceThrid',
            component: serviceThrid
        }
  ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {
            x: 0,
            y: 0
        }
    }
})
