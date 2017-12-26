<template>
	<div class="app-header">
		
		<div v-on:click="toggleNav" class="nav iconf">
			<i class="fa fa-bars"></i>
		</div>
		<div class="info-box">
			<div class="title">卖座电影</div>
			<div class="info">
				<div class="city">
					北京<i class="fa fa-angle-down"></i>
				</div>
				<div class="user iconf">
					<i class="fa fa-user" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'app-header',
		props:['toggleNav']
	}
</script>

<style lang="scss">
	.app-header{
		    background: #282828;
		    position: fixed;
		    z-index: 500;
		    top: 0;
		    right: 0;
		    left: 0;
		    width: auto;
		    height: 0.5rem;
		    line-height: 0.5rem;
		    overflow: hidden;
		    display:flex;
		    
		    .iconf{
		    	width:0.5rem;
		    	height:0.5rem;
		    	display:flex;
		    	color:dimgray;
		    	justify-content: center;
		    	align-items: center;
		    	font-size:16px;
		    }
		    .nav{
		    	border-right:1px solid #666666;
		    	flex-grow:0;
		    	flex-shrink:0;
		    	
		    }
		    .info-box{
		    	flex-grow:1;
		    	display:flex;
		    	justify-content: space-between;
		    	align-items: center;
		    	.title{
		    		padding-left:10px;
		    		color:#CCCCCC;
		    	}
		    	.info{
		    		display: flex;
					.city{
						color:dimgray;
						font-size:15px;
						
					}
					.user{
						font-size:15px;
					}
		    	}
		    }
	}
</style>