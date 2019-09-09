import Home from '@/modules/home/home'
import Category from '@/modules/category/category'
import Cart from '@/modules/cart/cart'
import User from '@/modules/user/user'
import Login from "@/modules/login/login"
import Search from "@/modules/search/search"

export default [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/category",
        name: "category",
        component: Category
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
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
    },
    {
        path: "/search",
        name: "search",
        component: Search,
    },
]