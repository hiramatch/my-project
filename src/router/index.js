import Vue from 'vue'
import Router from 'vue-router'
import Scene1 from '@/components/Scene1'
import Scene2 from '@/components/Scene2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Scene1
    },
    {
      path: '/scene1',
      name: 'scene1',
      component: Scene1
    },
    {
      path: '/scene2',
      name: 'scene2',
      component: Scene2
    }
  ]
})
