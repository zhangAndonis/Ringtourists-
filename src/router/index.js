
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppMovie from '../components/movie/AppMovie.vue'
import AppIshit from '../components/movie/AppIshit.vue' 
import AppBegin from '../components/movie/AppBegin.vue' 
import AppDetail from '../components/detail/AppDetail.vue'
const routes = [
  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain,children:[
    
  ]},
  {path:'/movie',name:'movie',component:AppMovie,children:[
   
    {path:'',redirect:'now',name:'movie'},
    {path:'now',component:AppIshit,name:'now'},
    {path:'begin',component:AppBegin,name:'begin'}
   
  ]},
  {path:'/detail/:id',component:AppDetail,name:'detail'},
  {path:'**',redirect: '/main'}
  
]

const router = new Router({
  routes,
})

export default router