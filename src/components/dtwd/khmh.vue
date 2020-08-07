<template>
	<div class="Ddiv1">
		<router-link :to="fhfd[index]" v-for="(teim, index) in indexs.txts" :key="index" tag="div">
			<img :src="imgss[index]" />
			<div>{{ teim }}</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//require
				indexs: "",
				fhfd: ["/jhft", "/kat", "/rtl", "/amtfcl", "/wguk"],
				imgss: [
					require("../../assets/imgs/2.png"),
					require("../../assets/imgs/3.png"),
					require("../../assets/imgs/4.png"),
					require("../../assets/imgs/5.png"),
					require("../../assets/imgs/6.png"),
				],
			};
		},
		mounted() {
			this.axios
				.get(
					"https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api", {
						params: {},
					}
				)
				.then((res) => {
					this.indexs = res.data.hohe;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	};
</script>

<style scoped>
	.Ddiv1 {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fafafa !important;
		font-size: 18px;
	}

	.Ddiv1>div {
		margin-right: 10px;
	}

	.Ddiv1>div>img {
		width: 40px;
		height: 40px;

	}
</style>
