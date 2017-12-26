<template>
	<div class="app-main app-box main-box">
		<app-banner></app-banner>
	    <app-now-movie></app-now-movie>
		<div class="hot-movie">更多热映电影</div>
		<div class="quickly"><div class="quickly-movie">即将上映</div></div>
		<app-quckly-movie></app-quckly-movie>
		 
	    <router-view></router-view>
	</div>
</template>

<script>
	import AppBanner from './AppBanner.vue'
	import AppNowMovie from './AppNowMovie.vue'
	import AppQucklyMovie from './AppQucklyMovie.vue'
	export default{
		name:"app-main",
		components:{
			AppBanner,AppNowMovie,AppQucklyMovie
		}
	}
</script>

<style lang='scss'>
    .main-box{
	   .hot-movie{
		width: 1.6rem;
		height: 0.3rem;
		border: 1px solid #aaa;
		border-radius: 0.1rem;
		margin: 0.2rem auto;
		display: flex;
		justify-content: center;
		align-items: center;
	   }
	   .quickly{
		   margin-top: 0.5rem;
		   border-bottom: 2px solid #ccc;
		   display: flex;
		   justify-content: center;
		   align-items: center;
		   position: relative;
		   .quickly-movie{
			   position: absolute;
			   width: 0.65rem;
			   height: 0.2rem;
			   background-color: #a7a7a7;
			   border-radius: 0.08rem;
			   display: flex;
			   justify-content: center;
			   align-items: center;
			   font-size: 0.1rem;
			   color: #eee;
		   }
	   }	
	}
	
</style>