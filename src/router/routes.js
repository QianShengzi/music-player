export const routes = [
    {
        path: '/register',
        name: 'Register',
        component: r => require(['../views/Register.vue'], r)
    },
    {
        path: '/login',
        name: 'Login',
        component: r => require(['../views/Login.vue'], r)
    },
    {
        path: '/home',
        name: 'Home',
        component: r => require(['../views/Home.vue'], r)
    },
    {
        path: '/main',
        name: 'Main',
        component: r => require(['../views/Main.vue'], r),
        children: [
            {
                path: '/',
                name: 'MusicHall',
                component: r => require(['../views/Main/MusicHall.vue'], r),
                children: [
                    {
                        path: 'comment',
                        name: 'Comment',
                        component: r => require(['../views/Main/Comment.vue'], r),
                    }
                ]
            },
            {
                path: 'mycollect',
                name: 'MyCollect',
                component: r => require(['../views/Main/MyCollect.vue'], r),
            },
            {
                path: 'discover',
                name: 'Discover',
                component: r => require(['../views/Main/Discover.vue'], r),
            },
            {
                path: 'playerinterface',
                name: 'PlayerInterface',
                component: r => require(['../views/Main/PlayerInterface.vue'], r)
            },
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'MusicHall'
        }
    }
]