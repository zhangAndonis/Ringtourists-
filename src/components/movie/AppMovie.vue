<template>
	<div class="app-movie app-box">
		<div class="header-top">
            <div class="header-top-left"><router-link to='/movie/now'>正在热映</router-link></div>
            <div class="header-top-right"> <router-link to='/movie/begin'>即将上映</router-link></div>
        </div>
		 
       
		<router-view></router-view>
	</div>
</template>

<script>
import AppIshit from './AppIshit'
import AppBegin from './AppBegin'
	export default{
		name:'app-movie',
		components:{
			AppIshit,AppBegin
		}
	}
</script>
   
<style lang='scss'>
  .header-top{
    height: 0.45rem;
    display: flex;
    justify-content: center;
     background: #fcfcfc;
   color: #6a6a6a;
    .header-top-left{
        width: 1.725rem;
        height: 0.45rem;
        display: flex;
        color: #fe6e00;
        justify-content: center;
        align-items: center;
         border-bottom: 1px solid pink;
    }
    .header-top-right{
        width: 1.725rem;
        height: 0.45rem;
        display: flex;
        justify-content: center;
		align-items: center;
		 border-bottom: 1px solid pink;
    }
}
</style>