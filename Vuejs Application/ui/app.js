const routes=[
    {path:'/home',component:home},
    {path:'/sherin',component:csv},
    {path:'/revisit/:id',name:'revisit',component:revisit}
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')