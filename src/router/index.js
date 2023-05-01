{
    path: '/user',
        component: Layout,
            redirect: '/user/userInfo/list',
                name: 'userInfo',
                    meta: { title: '用户管理', icon: 'table' },
                        alwaysShow: true,
                            children: [
                                {
                                    path: 'userInfo/list',
                                    name: '用户列表',
                                    component: () =>import('@/views/yygh/userInfo/list'),
                                    meta: { title: '用户列表', icon: 'table' }
                                }
                            ]
},