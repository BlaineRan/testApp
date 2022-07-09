export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'bridge-info',
    icon: 'table',
    path: '/bridge',
    routes: [
      {
        name: 'bridge-list',
        icon: 'table',
        path: '/bridge/bridgeList',
        component: './TableList',
      },
      {
        name: 'bridge-map',
        icon: 'table',
        path: '/bridge/bridgeMap',
        component: './testPage/Map',
      },
    ]
  },


  {
    path: '/check',
    name: 'check',
    icon: 'crown',
    access: 'caAdmin',
    routes: [
      {
        path: '/check/daily-check',
        name: 'daily-check',
        icon: 'smile',
        component: './checkPage/dailyCheck',
      },
      {
        path: '/check/periodic-check',
        name: 'periodic-check',
        icon: 'smile',
        component: './checkPage/periodicCheck',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
