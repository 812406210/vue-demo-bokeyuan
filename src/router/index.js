import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import navigation from "@/components/private/navigation";
import childIndex from "@/components/private/navigationChild/index";
import notbook from "@/components/private/navigationChild/notbook";
import contact from "@/components/private/navigationChild/contact";
import describe from "@/components/private/navigationChild/describe";
import management from "@/components/private/navigationChild/management";
import article from "@/components/private/navigationChild/article/article";
import register from "@/components/indexComponents/register";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation,
      children:[
        {path: '/childIndex',component: childIndex},
        {path: '/notbook',component: notbook},
        {path: '/contact',component: contact},
        {path: '/describe',component: describe},
        {path: '/management',component: management},
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: article,
    },
  ]
})
