<template>
	<div class="app-now-movie big" >
		<router-link :to='"/detail/"+movie.id' v-for="movie in billboards" :key="movie.id" class="movie">
        
	
	
			<img :src="movie.cover.origin" alt="" >
			<div class="title-box">
				<div class="films-left">
                    <div class="films-name">{{movie.name}}</div>
				    <div class="films-xi"><span>{{movie.cinemaCount}}</span>家影院上映<span>{{movie.watchCount}}人购票</span></div>
				</div>
				<div class="films-right">
					{{movie.grade}}
				</div>
			</div>
			

			
	
		</router-link>
		 <!-- <router-view></router-view> -->
	</div>
</template>

<script>
	
	import axios from 'axios'
	export default{
		name:'app-now-movie',
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
			    axios.get('http://localhost:9000/mz/v4/api/film/now-playing',{//需要从我们的域到目标域，中间需要加个标识,mz就是为了区分我们自己的域是跳向的哪个原来域
			    	//而真正的访问的目标域是不带有mz标识的。所以要去掉
			    	
			    	params:{_t:Date.now()}
			    }).then((response)=>{
					
						that.billboards=response.data.data.films
					
			    })
				//因为有跨域问题，这时数据获取不到，所以需要解决跨域问题，用服务器代理的方法，做代理在config配置中的proxytable中去做代理
				
			
			}
		},
		created(){
			this.getData()
			
		},
		updated(){
			
		}
		
  		
	}
</script >

<style  lang='scss'>
.big{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	
	.movie{
	  width:3.41rem;
	  height: 2.41rem;
	  margin-top: 0.2rem;
	  img{
		  width: 100%;
		  height:1.91rem;
	  }
	   .title-box{
	   width: 100%;
	   background: white;
	   display: flex;
	   justify-content: space-between;
	   height: 0.5rem;
	   .films-left{
		 width: 2.82rem;
		  height: 0.5rem;
		  padding-left: 0.1rem;
		  padding-top: 0.08rem;
		  .films-name{
		   width: 2.5rem;
		   display: flex;
		   font-size: 0.12rem;
		}
		.films-xi{
				width: 2.82rem;
				color: #9a9a9a;
				font-size: 0.08rem;
		}
	   }
	   .films-right{
		   width: 0.5rem;
		   height:0.5rem;
		   display: flex;
		   justify-content: center;
		   align-items: center;
		   color: #f78360;
		   font-size: 0.18rem;
	   }
   }
   }
  
}

</style>