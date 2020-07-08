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
    path: '/register',
    component: () => import('@/views/register/index')
  },
  {
    path: '/forgetPsw',
    component: () => import('@/views/forgetPsw/index')
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
      meta: {
        title: '首页',
        icon: 'dashboard',
        roles: ['admin', 'editor'], //你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
        noCache: true // 不会被 <keep-alive> 缓存
      }
    }]
  },

  {
    path: '/releaseWaste',
    component: Layout,
    children: [{
      path: 'releaseWaste',
      name: 'releaseWaste',
      component: () => import('@/views/releaseWaste/index'),
      meta: {
        title: '发布废品',
        icon: 'dashboard'
      }
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
        path: 'checkWaste',
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
        path: 'certification',
        name: 'certification',
        component: () => import('@/views/certification/index'),
        meta: { title: '实名认证', icon: 'form' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: {
          title: '外部链接',
          icon: 'link'
        }
      }
    ]
  },

  // 顶部导航
  {
    path: '/accountInfo',
    component: Layout,
    redirect: '/accountInfo/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/accountInfo/index'),
        name: 'accountInfo',
        meta: { title: '账号信息', icon: 'user', noCache: true }
      }
    ]
  },

  {
    path: '/securitySettings',
    component: Layout,
    redirect: '/securitySettings/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/securitySettings/index'),
        name: 'securitySettings',
        meta: { title: '账号信息', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/addAccount',
    component: Layout,
    redirect: '/addAccount/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/addAccount/index'),
        name: 'addAccount',
        meta: {
          title: '添加账号',
          icon: 'user',
          noCache: true,
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/API',
    component: Layout,
    redirect: '/API/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/API/index'),
        name: 'API',
        meta: {
          title: 'API网关',
          icon: 'user',
          noCache: true,
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/authority',
    component: Layout,
    redirect: '/authority/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/authority/index'),
        name: 'authority',
        meta: {
          title: '权限管理',
          icon: 'user',
          noCache: true,
          roles: ['admin']
        }
      }
    ]
  },

  // 404 页面一定要最后加载，如果放在constantRouterMap一同声明了404，后面的所以页面都会被拦截到404
  { path: '*', redirect: '/404', hidden: true }

  // END
]

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [

]

const createRouter = () => new Router({
  mode: 'history', // require service support
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
