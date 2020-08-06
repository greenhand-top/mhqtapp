<template>
	<div id="add">
		<div class="Ddiv1">
			<div class="pbsg">
				<div>{{ wyraad.head.txt }}</div>
				<div>
					{{ wyraad.head.txt1 }}<span>{{ wyraad.head.txt3 }}</span>
				</div>
			</div>
			<div class="Ddiv2">
				<div v-for="(titme, index) in wyraad.body.txt1">
					<div><img :src="imgss[index]" /></div>
					<div class="pbsg5">{{ titme.txt }}</div>
				</div>
			</div>
			<div class="Ddiv2">
				<div v-for="(titme, index) in wyraad.body.txt2">
					<div><img :src="imgss1[index]" /></div>
					<div class="pbsg5">{{ titme.txt }}</div>
				</div>
			</div>
		</div>
		<div class="Ddiv1">
			<div class="pbsg">
				<div>{{ tgduradd.head.txt }}</div>
				<div>
					{{ tgduradd.head.txt1 }}<span>{{ tgduradd.head.txt3 }}</span>
				</div>
			</div>
			<div class="Ddiv3">
				<div v-for="(titme, index) in tgduradd.body.txt1">
					<div><img :src="imgss2[index]" /></div>
					<div class="pbsg5">{{ titme.txt }}</div>
				</div>
			</div>
			<div class="Ddiv3">
				<div v-for="(titme, index) in tgduradd.body.txt2">
					<div><img :src="imgss2[index]" /></div>
					<div class="pbsg5">{{ titme.txt }}</div>
				</div>
			</div>
		</div>
		<div class="Ddiv1">
			<div class="pbsg">
				<div>{{ xwsg.head.txt }}</div>
				<div>
					{{ xwsg.head.txt1 }}<span>{{ xwsg.head.txt3 }}</span>
				</div>
			</div>
			<div>
				<van-swipe class="my-swipe" @change="onChange">

					<van-swipe-item>
						<div class="xdiv1" v-for="(titm , index) in xwsg.body.txt1">
							<div>
								<div><img :src="imgss4[index]"></div>
								<div class="pbsg5"> {{titm.txt}}</div>
							</div>
						</div>
					</van-swipe-item>
					<van-swipe-item>
						<div class="xdiv1" v-for="(titm , index) in xwsg.body.txt1">
							<div>
								<div><img :src="imgss4[index]"></div>
								<div class="pbsg5"> {{titm.txt}}</div>
							</div>
						</div>
					</van-swipe-item>

					<template #indicator>
						<div class="custom-indicator">
							<div v-for="(Img,index) in imgss3">
								<img :src="Img" :class="{'fef': crint == !index }" />
							</div>

						</div>
					</template>
				</van-swipe>
			</div>
		</div>
		<div class="Ddiv1">
			<div class="pbsg">
				<div>{{ sgmkg.head.txt }}</div>
				<div>
					{{ sgmkg.head.txt1 }}<span>{{ sgmkg.head.txt3 }}</span>
				</div>
			</div>
			<div class="Ddiv4">
				<div class="xdiv2" v-for="(titme, index) in sgmkg.body.txt1">
					<div><img :src="imgss5[index]" /></div>
					<div class="pbsg2">
						<span>{{ titme.txt }}</span>
						<span>{{ titme.txt1 }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="Ddiv1">
			<div class="pbsg">
				<div>{{ tgduradd.head.txt }}</div>
				<div>
					{{ tgduradd.head.txt1 }}<span>{{ tgduradd.head.txt3 }}</span>
				</div>
			</div>
			<div class="Ddiv3">
				<div v-for="(titme, index) in qtwq.body.txt1">
					<div><img :src="imgss6[index]" /></div>
					<div class="pbsg5">{{ titme.txt }}</div>
				</div>
			</div>
			<div class="Ddiv3 buot">
				<div v-for="(titme, index) in qtwq.body.txt2">
					<div><img :src="imgss6[index]" /></div>
					<div class="pbsg5">{{ titme.txt }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				wyraad: "",
				tgduradd: "",
				xwsg: "",
				sgmkg: "",
				qtwq: "",
				crint: 0,


				imgss: [
					require("../../assets/imgs/7.png"),
					require("../../assets/imgs/8.png"),
				],
				imgss1: [
					require("../../assets/imgs/9.png"),
					require("../../assets/imgs/10.png"),
				],
				imgss2: [
					require("../../assets/imgs/12.png"),
					require("../../assets/imgs/8.png"),
					require("../../assets/imgs/7.png"),
				],
				imgss3: [
					require("../../assets/imgs/14.png"),
					require("../../assets/imgs/14.png"),
				],
				imgss4: [
					require("../../assets/imgs/13.png"),
					require("../../assets/imgs/13.png"),
					require("../../assets/imgs/13.png"),
				],
				imgss5: [
					require("../../assets/imgs/0.png"),
					require("../../assets/imgs/1.png"),
					require("../../assets/imgs/0.png"),
				],
				imgss5: [
					require("../../assets/imgs/0.png"),
					require("../../assets/imgs/1.png"),
					require("../../assets/imgs/0.png"),
				],
				imgss6: [
					require("../../assets/imgs/15.png"),
					require("../../assets/imgs/8.png"),
					require("../../assets/imgs/7.png"),
				],
			};
		},
		methods: {
			onChange(index) {
				this.crint = index;

			},
		},
		mounted() {
			this.axios
				.get(
					"https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api", {
						params: {},
					}
				)
				.then((res) => {
					this.wyraad = res.data.wyraad;
					this.tgduradd = res.data.rgdurwab;
					this.xwsg = res.data.xwsg;
					this.sgmkg = res.data.sgmkg;
					this.qtwq = res.data.qtwq;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	#add {
		background: #f2f2f2;
	}

	#add>div:nth-child(1)~div {
		margin-top: 20px;
	}

	.Ddiv1 {
		width: 100%;
		padding-bottom: 30px;
		background: #fafafa;
	}

	.pbsg {
		text-align: center;
		padding-top: 30px;
		font-size: 18px;
	}

	.pbsg>div:nth-child(1) {
		color: #f38232;
		font-weight: bold;
		font-size: 30px;
	}

	.pbsg>div:nth-child(2) {
		position: relative;
		padding-top: 10px;
	}

	.pbsg span {
		position: absolute;
		color: #f38232;
		right: 10px;
	}

	.fef {
		opacity: 0.5;
		transform: scale(.5);
		transition: all .5s;
	}

	.Ddiv2 {
		display: flex;
		justify-content: space-around;
		font-size: 20px;
		text-align: center;
		padding-top: 30px;
	}

	.Ddiv2 img {
		width: 160px;
	}

	.Ddiv3 {
		display: flex;
		font-size: 20px;
		text-align: center;
		justify-content: space-around;
		margin-top: 30px;


	}

	.Ddiv3 img {
		width: 100px;
	}

	.my-swipe .van-swipe-item {
		font-size: 20px;
		text-align: center;
		background-color: #fafafa;
		display: flex;
		justify-content: space-around;
		height: 270px;

	}

	.custom-indicator {
		display: flex;
		position: absolute;
		left: 50%;
		bottom: 5px;
		transform: translateX(-50%);

	}

	.custom-indicator img {
		width: 30px;
		height: 30px;
	}

	.xdiv1 {
		width: 100px;
		font-size: 10px;
	}

	.xdiv1 img {
		width: 100px;
		margin-top: 20px;

	}

	.xdiv2 {
		margin-top: 30px;
	}

	.xdiv2 img {
		width: 96%;
		margin-left: 2%;
	}

	.Ddiv4>div {
		position: relative;
	}

	.pbsg2 {
		width: 96%;
		position: absolute;
		bottom: 5px;
		font-size: 18px;
		left: 2%;
		height: 50px;
		line-height: 50px;
		display: flex;
		background: rgba(255, 255, 255, .7);
		justify-content: space-between;
	}

	.pbsg5 {
		font-size: 15px;
	}

	.buot {
		padding-bottom: 60px;
	}
</style>
