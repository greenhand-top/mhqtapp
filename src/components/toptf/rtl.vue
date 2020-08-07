<template>
	<div class="buon">
		<div class="Ddiv1">
			插画
		</div>
	 <div v-for="times in texts">
			<div class="x-div">
				<div>
					<img src="../../assets/imgs/16.png">
					<div>{{times.txt}}</div>
				</div>
				<div>
					<img src="../../assets/imgs/16.png">
					<div>{{times.txt1}}</div>
				</div>
				<div>
					<img src="../../assets/imgs/16.png">
					<div>{{times.txt2}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				texts:""
			}
		},
		mounted() {
			this.axios.get("https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api")
				.then((res)=>{
					this.texts = res.data.rtl.dtxt
				})
				.catch((error)=>{
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.buon{
		background: #FAFAFA;
	}
	.Ddiv1{
		height: 50px;
		background: #F38232;
		text-align: center;
		color: #FFFFFF;
		font-size: 25px;
		line-height: 50px;
		margin-bottom: 10px;
		
	}
	.x-div{
		display: flex;
		font-size: 14px;
		justify-content: space-around;
		text-align: center;
		margin-top: 20px;
	}
	.x-div img{
		width: 100px;
	}
	.x-div>div{
		width:100px ;
	}
</style>
