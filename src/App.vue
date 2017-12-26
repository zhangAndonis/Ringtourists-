<template>
  <div id="app ">
  <app-header :toggleNav='toggleNav'></app-header>
  
  <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
  	<app-nav :toggleNav='toggleNav' v-if="isNavShow"></app-nav>
  </transition>
  
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
  	<div v-on:click="toggleNav" v-if="isNavShow" class="mask"></div>
  </transition>
  
  <router-view></router-view>
  </div>
 
</template>

<script>
import AppHeader from './components/head/AppHeader.vue'
import AppNav from './components/nav/AppNav.vue'

export default {
  name: 'app',
	components:{
		AppHeader,AppNav
	},
	data:function(){
		return{
			isNavShow:false
		}
		
	},
	methods:{
		toggleNav(){
			this.isNavShow=!this.isNavShow
		}
	}
}
</script>

<style lang="scss">

		@import './styles/app.scss';
		.mask{
			width:100%;
			height:100%;
			position:fixed;
			left:0;
			top:0;
			z-index:498;
			background: rgba(0,0,0,0.2);
			transition-duration: 0.5s;
		}
</style>
