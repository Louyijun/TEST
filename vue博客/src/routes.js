import showblogs from './components/showblogs.vue'
import addblog from './components/addblog.vue'
import singleblog from './components/singleblog.vue'
export default[
    {path:"/",component:showblogs},
    {path:"/add",component:addblog},
    {path:"/blog/:id",component:singleblog},
]