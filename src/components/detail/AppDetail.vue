<template>
    <div class="app-detail app-box">
           <img :src="billboards.cover.origin" alt="" >  
           <div class="film-word1" data-reactid=".0.1.$FilmDetailView-3559.2.0">影片简介</div>
           <div class="film-word2" data-reactid=".0.1.$FilmDetailView-3559.2.1"><span data-reactid=".0.1.$FilmDetailView-3559.2.1.0" class="">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span><span data-reactid=".0.1.$FilmDetailView-3559.2.1.1">{{billboards.director}}</span></div>
           <div class="film-word2" data-reactid=".0.1.$FilmDetailView-3559.2.2"><span data-reactid=".0.1.$FilmDetailView-3559.2.2.0">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span><span data-reactid=".0.1.$FilmDetailView-3559.2.2.1"><b v-for='data in billboards.actors' :key='data.name'>{{data.name}}&nbsp;|&nbsp;</b></span></div>
           <div class="film-word2" data-reactid=".0.1.$FilmDetailView-3559.2.3"><span data-reactid=".0.1.$FilmDetailView-3559.2.3.0">地区语言：</span><span data-reactid=".0.1.$FilmDetailView-3559.2.3.1">{{billboards.nation}}</span><span data-reactid=".0.1.$FilmDetailView-3559.2.3.2">(</span><span data-reactid=".0.1.$FilmDetailView-3559.2.3.3">{{billboards.language}}</span><span data-reactid=".0.1.$FilmDetailView-3559.2.3.4">)</span></div>
           <div class="film-word2" data-reactid=".0.1.$FilmDetailView-3559.2.4"><span data-reactid=".0.1.$FilmDetailView-3559.2.4.0">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span><span data-reactid=".0.1.$FilmDetailView-3559.2.4.1">{{billboards.category}}</span></div>
            <div class="film-word2" data-reactid=".0.1.$FilmDetailView-3559.2.5"><span data-reactid=".0.1.$FilmDetailView-3559.2.5.0">上映日期：</span><span data-reactid=".0.1.$FilmDetailView-3559.2.5.1">{{getLocalTime(billboards.premiereAt)+"上映"}}</span></div> 
            <div class="film-word3" data-reactid=".0.1.$FilmDetailView-3559.2.6">{{billboards.synopsis}}</div> 
           <div class="operation" data-reactid=".0.1.$FilmDetailView-3559.3"><button class="cpn-primary-button " data-reactid=".0.1.$FilmDetailView-3559.3.0">立即购票</button></div>
    </div>
</template>

<script>
    
	import axios from 'axios'
    export default {
        name:'app-detail',
        mounted(){
        //    console.log(this.$route)
        },
        data:function(){
			return {
				billboards:{
                    cover:{origin:''}
                }
			}
		},
		 
		methods:{
			getData(){
                let that=this;
                 console.log(this.$route.params.id)
				//获取数据选择一个轻量级的小工具axios
//				https://m.maizuo.com/v4/api/billboard/home?__t=1514002748936
			    axios.get('http://localhost:9000/mz/v4/api/film/'+this.$route.params.id,{//需要从我们的域到目标域，中间需要加个标识,mz就是为了区分我们自己的域是跳向的哪个原来域
			    	//而真正的访问的目标域是不带有mz标识的。所以要去掉
			    	
			    	params:{_t:Date.now()}
			    }).then((response)=>{
					    console.log(response,666)
                        that.billboards=response.data.data.film
                        console.log(that.billboards.cover.origin,999)
					
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
			// this.getLocalTime()
		}
    }

</script>

<style lang="scss">
    img{
        height:2.1094rem;
    }
    .film-word1 {
    margin: 0.16rem auto;
    border-left: 0.16rem solid RGB(228, 200, 156);
    font-size: 0.16rem;
    padding-left: 0.04rem;
}
.film-word2 {
    height: 0.18rem;
    overflow: hidden;
    margin-bottom: 0.1rem;
    padding-left: 0.2rem;
    font-size: 0.12rem;
}
.film-word3 {
    text-overflow: ellipsis;
    margin-bottom: 0.8rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
     font-size: 0.14rem;
}
 .operation {
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
}
.cpn-primary-button {
    font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: 18px;
    color: #fff;
    -webkit-transition: 0.5s ease;
    outline: none;
}
</style>