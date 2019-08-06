import Home from '@/modules/home/home'
import User from '@/modules/user/user'
import Login from "@/modules/login/login"

export default [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/user",
        name: "user",
        component: User
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    }
]