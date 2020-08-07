<template>
	<div>
		<div class="Ddiv1">全部</div>
		<div v-for="titme in texts">
			<div class="x-div1">
				<div>
					<div><img src="../../assets/imgs/17.png"></div>
					<div>{{titme.txt}}</div>
				</div>
				<div>
					<div><img src="../../assets/imgs/17.png"></div>
					<div>{{titme.txt1}}</div>
				</div>
				<div>
					<div><img src="../../assets/imgs/17.png"></div>
					<div>{{titme.txt2}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				texts: ""
			}
		},
		mounted() {
			this.axios.get("https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api")
				.then((res) => {
					this.texts = res.data.wguk.dtxt
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.Ddiv1 {
		height: 50px;
		background: #F38232;
		text-align: center;
		color: #FFFFFF;
		font-size: 25px;
		line-height: 50px;
		margin-bottom: 10px;
	}
	.x-div1 img{
		width: 120px;	
	}
	.x-div1{
		display: flex;
		font-size: 14px;
		justify-content: space-around;
		text-align: center;
		padding-bottom: 10px;
		
	}
</style>
