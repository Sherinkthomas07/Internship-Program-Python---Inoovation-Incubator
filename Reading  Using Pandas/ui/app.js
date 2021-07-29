const routes=[
    {path:'/home',component:home},
    {path:'/dataview',component:csv},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')