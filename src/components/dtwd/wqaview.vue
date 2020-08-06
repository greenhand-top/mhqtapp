<template>
<div>
	<div><router-view></router-view></div>
	<div class="Ddiv1">
		<router-link to="/hoeh" tag="div">
			<van-icon name="coupon-o" size="40" />
			<div>故事</div>
		</router-link>
		<router-link to="/amdc" tag="div">
			<van-icon name="fire-o" size="40"/>
			<div>动画</div>
		</router-link>
		<router-link to="/#" tag="div" class="pase">
			<img src="../../assets/imgs/11.png">
		</router-link>
		<router-link to="/#/#/#/##" tag="div">
			<van-icon name="friends-o" size="40" />
			<div>智能</div>
		</router-link>
		<router-link to="/#/#/##" tag="div">
			<van-icon name="user-circle-o"  size="40" />
			<div>我的</div>
		</router-link>
	</div>
</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
 .Ddiv1{
	width:100%;
	height: 70px;
	background: #ffffff;
	display: flex;
	text-align: center;
     justify-content: space-around;
	align-items:center;
     font-size: 12px;
    position: relative;
   

 }

 .pase>img{
	width: 60px; 
	height: 60px;
	position: absolute;
    top: 0;
	left: 50%;
	transform: translate(-50%,-30%);

 }
 .router-link-active{
   color: #F38232;
 }
</style>
