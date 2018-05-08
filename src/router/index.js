import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dialog from '@/components/Dialog'
import Password from '@/components/Password'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/password',
      name: 'Password',
      component: Password
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})
