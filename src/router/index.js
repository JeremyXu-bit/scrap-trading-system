import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '发布废品', icon: 'dashboard' }
    }]
  },

  {
    path: '/acceptWaste',
    component: Layout,
    children: [
      {
        path: 'acceptWaste',
        name: 'acceptWaste',
        component: () => import('@/views/acceptWaste/index'),
        meta: { title: '接受废品', icon: 'example' }
      }
    ]
  },

  {
    path: '/sendWaste',
    component: Layout,
    children: [
      {
        path: 'sendWaste',
        name: 'sendWaste',
        component: () => import('@/views/sendWaste/index'),
        meta: { title: '发货', icon: 'table' }
      }
    ]
  },

  {
    path: '/storageWaste',
    component: Layout,
    children: [
      {
        path: 'storageWaste',
        name: 'storageWaste',
        component: () => import('@/views/storageWaste/index'),
        meta: { title: '入库废品', icon: 'tree' }
      }
    ]
  },

  {
    path: '/outWaste',
    component: Layout,
    children: [
      {
        path: 'outWaste',
        name: 'outWaste',
        component: () => import('@/views/outWaste/index'),
        meta: { title: '出库废品', icon: 'nested' }
      }
    ]
  },

  {
    path: '/acceptanceWaste',
    component: Layout,
    children: [
      {
        path: 'acceptanceWaste',
        name: 'acceptanceWaste',
        component: () => import('@/views/acceptanceWaste/index'),
        meta: { title: '验收废品', icon: 'link' }
      }
    ]
  },

  {
    path: '/inquiry',
    component: Layout,
    redirect: '/inquiry/inquiry',
    name: '',
    meta: { title: '查询', icon: 'example' },
    children: [
      {
        path: 'inquiry',
        name: 'inquiry',
        component: () => import('@/views/inquiry/index'),
        meta: { title: '废品', icon: 'table' }
      },
      {
        path: 'shipment',
        name: 'shipment',
        component: () => import('@/views/shipment/index'),
        meta: { title: '发货', icon: 'tree' }
      },
      {
        path: 'stockIn',
        name: 'stockIn',
        component: () => import('@/views/stockIn/index'),
        meta: { title: '入库单', icon: 'tree' }
      },
      {
        path: 'stockOut',
        name: 'stockOut',
        component: () => import('@/views/stockOut/index'),
        meta: { title: '出库单', icon: 'tree' }
      },
      {
        path: 'receipt',
        name: 'receipt',
        component: () => import('@/views/receipt/index'),
        meta: { title: '验收单', icon: 'tree' }
      }
    ]
  },

  {
    path: '/checkWaste',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'checkWaste',
        component: () => import('@/views/checkWaste/index'),
        meta: { title: '审核废品', icon: 'form' }
      }
    ]
  },

  {
    path: '/certification',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'certification',
        component: () => import('@/views/certification/index'),
        meta: { title: '实名认证', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
