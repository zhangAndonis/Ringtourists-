<template>
	<div class="app-begin">
		
         <section v-for='movie in billboards' :key='movie.id'>
            <div class="movie-con">
                <div class="movie-con-left"><img :src="movie.poster.origin" alt=""></div>  
                <div class="movie-con-right">
                    <div class="film"><div class="p">{{movie.name}}</div><span><i class="fa fa-angle-right" aria-hidden="true"></i></span></div>
                    <div class="film-intro">{{movie.intro}}</div>
                    <div class="film-counts">
                        <div class="left"><span>{{getLocalTime(movie.premiereAt)}}</span>上映</div>
                        <div class="right">星期<span>{{getLocalTime1(movie.premiereAt)}}</span></div>
                    </div>
                </div>  
            </div>
        </section> 
	</div>
</template>

<script>
import axios from 'axios'
	export default{
        name:'app-begin',
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
			    	
			    	params:{_t:Date.now(),count:40}
			    }).then((response)=>{
					    console.log(response)
						that.billboards=response.data.data.films
					
			    })
				//因为有跨域问题，这时数据获取不到，所以需要解决跨域问题，用服务器代理的方法，做代理在config配置中的proxytable中去做代理
				
			
			},
		     getLocalTime(nS) {     
				var str ='';
				str =nS;
				var ns = str.toString().substring(0,10)
                var date =new Date(parseInt(ns) * 1000);
              
			    var datas = date.getMonth()-0+1 +"月"+date.getDate()+"日"
				return datas
			}, getLocalTime1(nS) {     
				var str ='';
				str =nS;
				var ns = str.toString().substring(0,10)
                var date =new Date(parseInt(ns) * 1000);
              
                var datas = date.getDay()
                switch(datas){
                    case 1:return '一';break;
                    case 2:return '二';break;
                    case 3:return '三';break;
                    case 4:return '四';break;
                    case 5:return '五';break;
                    case 6:return '六';break;
                    case 7:return '日';break;
                }
				
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
.app-begin{
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
                width: 1.3rem;
                height: 0.24rem;
                lighting-color: 0.24rem;
                display: flex;
                justify-content: space-between;
                 font-size: 0.12rem;
                  color: #ffb375;
                 span{
                         color: #ffb375;
                 }
           }
       }
   }
}
}

</style>