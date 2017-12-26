<template>
	<div class="app-quckly-movie big" >
		<div class="movie" v-for="movie in billboards" :key="movie.id">
			<img :src="movie.cover.origin" alt="" >
			<div class="title-box1">
				
                    <div class="films-name">{{movie.name}}</div>
				    <div class="films-xi">{{getLocalTime(movie.premiereAt)+"上映"}}</div>
			
				
			</div>
		</div>
		
	</div>
</template>

<script>
	
	import axios from 'axios'
	export default{
		name:'app-quckly-movie',
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
			    axios.get('http://localhost:9000/mz/v4/api/film/coming-soon',{//需要从我们的域到目标域，中间需要加个标识,mz就是为了区分我们自己的域是跳向的哪个原来域
			    	//而真正的访问的目标域是不带有mz标识的。所以要去掉
			    	
			    	params:{_t:Date.now(),count:3}
			    }).then((response)=>{
                    that.billboards=response.data.data.films
			    })
				//因为有跨域问题，这时数据获取不到，所以需要解决跨域问题，用服务器代理的方法，做代理在config配置中的proxytable中去做代理
				
			
			},
		     getLocalTime(nS) {     
				var a= new Date(parseInt(nS).toString().substr(0,10) * 1000); 
			    var datas = a.getMonth()-0+1 +"月"+a.getDate()+"日"
			   
				return datas
			}     

		},
		created(){
			this.getData()
			
		},
		updated(){
			
		}
		
  		
	}
</script >

<style  lang='scss' >
.big{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 0.3rem;
	.movie{
	  width:3.41rem;
	  height: 2.41rem;
	  margin-top: 0.2rem;
	  img{
		  width: 100%;
		  height:1.91rem;
	  }
	   .title-box1{
	   width: 100%;
	   background: white;
	   display: flex;
	   justify-content: space-between;
	   height: 0.35rem;
	   align-items: center;
		  .films-name{
		   width: 2.5rem;
		   display: flex;
           font-size: 0.12rem;
           text-align: center;
           margin-left: 0.2rem;
		}
		.films-xi{
				width: 2rem;
				color: #9a9a9a;
                font-size: 0.08rem;
                color: #f78360;
                 text-align: center;
		}
	  
   }
   }
  
}

</style>