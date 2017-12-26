<template>
	<div class="app-ishit">
		
        <section v-for='movie in billboards' :key='movie.id'>
            <div class="movie-con">
                <div class="movie-con-left"><img :src="movie.cover.origin" alt=""></div>  
                <div class="movie-con-right">
                    <div class="film"><div class="p">{{movie.name}}</div><span>{{movie.grade}}<i class="fa fa-angle-right" aria-hidden="true"></i></span></div>
                    <div class="film-intro">{{movie.intro}}</div>
                    <div class="film-counts">
                        <div class="left"><span>{{movie.cinemaCount}}</span>家影院上映</div>
                        <div class="right"><span>{{movie.watchCount}}</span>人购票</div>
                    </div>
                </div>  
            </div>
        </section>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
        name:'app-ishit',
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
			    	
			    	params:{_t:Date.now(),count:40}
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
</script>

<style lang='scss'>
.app-ishit{
    background: #fcfcfc;
   
section{
   display: flex;
   justify-content: center;
  
   .movie-con{
       width:3.45rem;
       height: 1.25rem;
       display: flex;
       justify-content: center;
        border-bottom:1px dashed #ccc;
       align-items: center;
    //    flex-direction: column;
       .movie-con-left{
           width: 0.6rem;
           height: 0.8256rem;
            img{
            width: 100%;
            height:100%;
        }
       }
       .movie-con-right{
           margin-left: 0.15rem;
           width: 2.4375rem;
           height: 0.8256rem;
           .film{
               width: 2.4375rem;
               height: 0.32rem;
               padding: 0;
               margin: 0;
               display: flex;
               justify-content: center;

               .p{
                   width: 2.0913rem;
                   height: 0.32rem;
                   display: inline-block;
                    line-height: 0.32rem;
                    font-size: 0.16rem;
               }
               span{
                   width: 0.3462rem;
                   height: 0.32rem;
                   display:block;
                   color: #fc7103;
                   font-size: 0.16rem;
                   line-height: 0.32rem;

               }
           }
           .film-intro{
                width: 2.4375rem;
                height: 0.24rem;
                lighting-color: 0.24rem;
                font-size: 0.12rem;
           }
           .film-counts{
                width: 2.1rem;
                height: 0.24rem;
                lighting-color: 0.24rem;
                display: flex;
                justify-content: space-between;
                 font-size: 0.12rem;
                 span{
                         color: #8aa2bf;
                 }
           }
       }
   }
}
}

</style>