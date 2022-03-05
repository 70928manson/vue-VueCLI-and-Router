import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  //前台
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    //巢狀路由
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        name: '產品頁面',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/CartView.vue'),
      },
    ]
  },
  //登入行為
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  //後台
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    //巢狀路由
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/Dashboard/CouponView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active', //bootstrap樣式
})

export default router
