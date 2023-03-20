import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component: () => import ('../views/FrontLayoutView.vue'),
      children:[
        {
          path: '',
          component: () => import('../views/frontPage/HomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/frontPage/AboutView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/frontPage/ProductsView.vue')
        },
        {
          path: 'product/:id',
          component: () => import('../views/frontPage/ProductView.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/frontPage/CartView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/frontPage/LoginView.vue')
        },
      ] 
    },
    {
      path:'/admin',
      component: () => import('../views/dashboard/dashboardLayout.vue'),
      children:[
        {
          path:'',
          component:() => import('../views/dashboard/AdminProductsView.vue')
        },
        {
          path:'orders',
          component:() => import('../views/dashboard/AdminOrdersView.vue')
        },
        {
          path:'coupon',
          component:() => import('../views/dashboard/AdminCouponView.vue')
        }
      ]
    },
    {
          path:'/:pathMatch(.*)*',
          component:() => import('../views/frontPage/NotFoundView.vue')
    }

  ]
})

export default router
