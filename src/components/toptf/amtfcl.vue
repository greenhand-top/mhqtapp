<template>
	<div>
		<div class="Ddiv1">英文动画</div>
		<div v-for="titms in texts">
			<div class="x-div">
				<div><img src="../../assets/imgs/0.png"></div>
				<div class="pbsg">
					<span>{{titms.txt}}</span>
					<span>{{titms.txt1}}</span>
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
					this.texts = res.data.amtfcl.dtxt

				}).catch((error) => {
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

	.x-div img {
		width: 100%;
	}

	.x-div {
		position: relative;
		width: 96%;
		margin-left: 2%;
	}

	.pbsg{
		width: 100%;
		position: absolute;
		font-size: 16px;
		bottom: 0px;
		height: 40px;
	
		background: rgba(255, 255, 255, 0.7);
		line-height: 40px;
		justify-content: space-between;
		display: flex;

	}
</style>
