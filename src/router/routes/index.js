import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home', //no need login
    component: lazy(() => import('../../views/Home/Home')),
    meta: {
      authRoute: false
    }
  },
  {
    path: '/register', //no need login
    component: lazy(() => import('../../views/RegisterBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: false
    }
  },
  {
    path: '/datasync',
    component: lazy(() => import('../../views/Datasync')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/Dashboard/Dashboard')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/profile',
    component: lazy(() => import('../../views/Pages/Social/profile')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/verified', //no need login
    component: lazy(() => import('../../views/VerifyEmailBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: false
    }
  },
  {
    path: '/user/confirm_token', //no need login
    component: lazy(() => import('../../views/EmailVerification')),
    layout: 'BlankLayout',
    meta: {
      authRoute: false
    }
  },
  {
    path: '/mainfeed', //no need login
    component: lazy(() => import('../../views/Pages/Social/NewsFeed/index')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/contentdetail', //no need login
    component: lazy(() => import('../../views/Pages/Social/NewsDetails/index')),
    meta: {
      authRoute: false
    }
  },
  {
    path: '/edit',
    component: lazy(() => import('../../views/Pages/Social/Write/index')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/login', //no need login
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: false
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
