<template>
	<div class="app-banner swiper-container">
		<div class="swiper-wrapper">
			<div v-for="billboard in billboards" :key="billboard.id" class="swiper-slide">
				<img width="100%" :src="billboard.imageUrl" :title="billboard.name"/>
			</div>
		</div>
        <div class="swiper pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import axios from 'axios'
	export default{
		name:'app-banner',
		data:function(){
			return {
				billboards:[
					
				
				]
			}
		},
		 
		methods:{
			getData(){
				let that=this;
				//获取数据选择一个轻量级的小工具axios
//				https://m.maizuo.com/v4/api/billboard/home?__t=1514002748936
			    axios.get('http://localhost:9000/mz/v4/api/billboard/home',{//需要从我们的域到目标域，中间需要加个标识,mz就是为了区分我们自己的域是跳向的哪个原来域
			    	//而真正的访问的目标域是不带有mz标识的。所以要去掉
			    	
			    	params:{_t:Date.now()}
			    }).then((response)=>{
			    	
			    	that.billboards=response.data.data.billboards
			    })
				//因为有跨域问题，这时数据获取不到，所以需要解决跨域问题，用服务器代理的方法，做代理在config配置中的proxytable中去做代理
				
			
			}
		},
		created(){
			this.getData()
			
		},
		updated(){
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,//可选选项，自动滑动
			})
		}
		
  		
	}
</script>

<style>
</style>