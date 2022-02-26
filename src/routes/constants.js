import Landing from "../pages/Landing";
import AboutUs from "../pages/AboutUs";

export const HOME_ROUTE = {
    path:'/',
    name:'Home',
    component:Landing,
}

export const ABOUT_US_ROUTE = {
    path:'/about-us',
    name:'About',
    component:AboutUs
}

export const DASHBOARD_ROUTE = {
    path:'/dashboard',
    name:'Dashboard',
    component:Landing
}

export const LOGIN_ROUTE = {
    path:'/login',
    name:'Login',
    component:Landing
}

export const NAVBAR_ROUTE = [
    HOME_ROUTE,
    ABOUT_US_ROUTE,
    DASHBOARD_ROUTE,
    LOGIN_ROUTE
]