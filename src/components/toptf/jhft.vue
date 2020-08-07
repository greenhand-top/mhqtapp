<template>
	<div>
		<div class="Ddiv1">
			早教
		</div>
		<div>
			<div v-for="titme in text" class="Ddiv2">
				<div>
					<div><img src="../../assets/imgs/jhft/2.png"></div>
					<div>{{titme.txt}}</div>
				</div>
				<div>
					<div><img src="../../assets/imgs/jhft/2.png"></div>
					<div>{{titme.txt1}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			}
		},
		mounted() {
			this.axios.get("https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api")
				.then((res) => {
					this.text = res.data.jhft.dtxt
					console.log(res);
				})
				.catch((erret) => {
					console.log(erret);
				})

		}

	}
</script>

<style scoped>
	.Ddiv1 {
		width: 100%;
		height: 50px;
		background: #F38232;
		color: #FFFFFF;
		text-align: center;
		line-height: 50px;
		font-size: 25px;
	}
	.Ddiv2 img{
		width: 170px;
	}
	.Ddiv2{
		display: flex;
		justify-content: space-around;
		font-size: 14px;
		text-align: center;
		padding-top: 10px;
	}
	.Ddiv2>div{
		padding-bottom: 10px;
	}
</style>
