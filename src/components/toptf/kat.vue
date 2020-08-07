<template>
	<div>
		<div class="pbsg">哄睡</div>
		<div v-for="titms in texts">
			<div class="x-div1">
				<div>
					<img src="../../assets/imgs/kaw/1.png">
					<div>{{titms.txt}}</div>
				</div>
				<div>
					<img src="../../assets/imgs/kaw/2.png">
					<div>{{titms.txt1}}</div>
				</div>
				<div>
					<img src="../../assets/imgs/kaw/3.png">
					<div>{{titms.txt2}}</div>
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
					this.texts = res.data.kat.dtxt
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.pbsg {
		height: 50px;
		background: #F38232;
		text-align: center;
		color: #FFFFFF;
		font-size: 25px;
		line-height: 50px;
		margin-bottom: 10px;
	}

	.x-div1 {
		display: flex;
		font-size: 16px;
		text-align: center;
		padding-bottom: 10px;
		justify-content: space-around;

	}

	.x-div1 img {
		width: 120px;

	}
</style>
