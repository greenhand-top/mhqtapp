<template>
	<div class="D-div">
		<div class="pbsg">英文动画</div>
		<div>
			<headuk></headuk>
		</div>
		<div class="pbsg1">
			<div>今日英语动画推荐</div>
			<div>今天看什么？快来这里看看</div>
		</div>
		<div class="pbsg2">
			<div v-for="tiens in indexs" class="xdiv3">
				<div v-for="(tien,indexs) in tiens">
					<img :src="imgss[indexs][indexs]">
					<div>{{tien}}</div>
				</div>
			</div>
		</div>
		<div class="bouuton">
			<wqaview></wqaview>
		</div>
	</div>

</template>

<script>
	import wqaview from '../components/dtwd/wqaview.vue'
	import headuk from '../components/dtwd/headuk.vue'
	export default {
		components: {
			wqaview,
			headuk
		},
		data() {
			return {
				indexs: "",
				imgss: [
					[
						require("../assets/imgs/amdc/1.png"),
						require("../assets/imgs/amdc/2.png"),
					],
					[require("../assets/imgs/amdc/3.png"),
						require("../assets/imgs/amdc/4.png"),
					]
				],

			}
		},
		mounted() {
			this.axios
				.get("https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api")
				.then((res) => {
					this.indexs = res.data.fcgl

				})
				.catch((error) => {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.D-div {
		background: #F2F2F2;

	}

	.pbsg {
		width: 100%;
		color: #FFFFFF;
		font-size: 18px;
		line-height: 50px;
		background: #F38232;
		text-align: center;
	}

	.pbsg1 {
		text-align: center;
		margin-top: 10px;
		background: #FAFAFA;
		font-size: 20px;
		padding-bottom: 20px;
	}

	.pbsg1>div:nth-child(1) {
		color: #F38232;
		padding-top: 20px;
		font-weight: bold;
		padding-bottom: 10px;

	}

	.xdiv3 {
		font-size: 18px;
		display: flex;
		justify-content: space-around;
		text-align: center;
		background: #FAFAFA;
		color: #b3b3b3;
	}

	.xdiv3 img {
		width: 180px;
	}

	.pbsg2 {
		padding-bottom: 100px;
		background: #FAFAFA;
	}

	.bouuton {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}
</style>
