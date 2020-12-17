import vueRouter from 'vue-router'


import User from './components/User'
import UserAuth from './components/UserAuth'
import UserBalance from './components/UserBalance'
import UserTransaction from './components/UserTransaction'
import App from './App'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/user/auth',
                name: "user_auth",
                component: UserAuth
            },
            {
                path: '/user/balance/:username',
                name: "user_balance",
                component: UserBalance
            },
            {
                path: '/user/transaction/:username',
                name: "user_transaction",
                component: UserTransaction
            },
        ]
    })



export default router