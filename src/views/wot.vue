<template>
	<div class="D-div">
		<div>
			<div class="Ddiv2" v-show="!$store.state.dyn">
				<div>登录</div>
				<div><span>账号</span><input type="text" v-model="usr"></div>
				<div><span>密码</span><input type="password" v-model="par"></div>
				<button @click="but()">确定</button>
			</div>
			<div v-show="$store.state.dyn"><img class="IM" src="../assets/imgs/wot/1.png"></div>
		</div>

		<div class="x-div1">
			<div v-for="(titem,index) in wot" class="x-div2">
				<div>
					<div><img :src="imgs[index]"></div>
					<div>{{titem.txt}}</div>
				</div>
				<div>
					<div class="pbsg1">{{titem.txt1}}</div>
					<div class="pbsg"> > </div>
				</div>
			</div>
		</div>
		<div class="pars">
			<wqaview></wqaview>
		</div>

	</div>

</template>

<script>
	import wqaview from '../components/dtwd/wqaview.vue'
	export default {
		data() {
			return {
				wot: "",
				usr: "",
				par: "",
				pargg: "123456789",
				usrgg: "15869799669",
				imgs: [
					require("../assets/imgs/wot/2.png"),
					require("../assets/imgs/wot/3.png"),
					require("../assets/imgs/wot/4.png"),
					require("../assets/imgs/wot/5.png"),
					require("../assets/imgs/wot/6.png"),
					require("../assets/imgs/wot/7.png"),

				]
			}
		},
		components: {
			wqaview
		},
		mounted() {
			this.axios.get("https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api")
				.then((res) => {
					this.wot = res.data.wot.dtxt

				})
				.catch((errer) => {
					console.log(errer);
				})


		},
		methods: {
			but() {
				if (this.usr == "" || this.par == "") {
					alert("不能为空")
				} else if (this.usr != this.usrgg || this.par != this.pargg) {
					alert("账号或密码错误")
				} else {
					this.$router.push({
						path: '/hoeh'
					});
					this.$store.commit('yows')
				}
				
			}

		}

	}
</script>

<style scoped>
	.D-div {
		background: #F2F2F2;
		padding-bottom: 30px;

	}

	.Ddiv2 {
		width: 100%;
		height: 221px;
		background: #F38232;
		text-align: center;
	}

	.IM {
		width: 100%;

	}

	.x-div1 {
		margin-top: 5px;
		background: #FFFFFF;
	}

	.x-div2 {
		width: 100%;
		display: flex;

	}


	.x-div2>div {
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #dedede;
		font-size: 18px;
		display: flex;
		position: relative;
		align-items: center;
	}

	.x-div2 img {
		width: 40px;
		height: 40px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.pbsg {
		position: absolute;
		right: 20px;
	}

	.pbsg1 {
		position: absolute;
		right: 40px;
	}

	.pars {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}

	.Ddiv2>div:nth-child(1) {
		text-align: center;
		padding-top: 10px;
		color: #FFFFFF;
		padding-bottom: 10px;
		font-size: 20px;
	}

	.Ddiv2 input {
		border: none;
		border-radius: 5px;
		height: 35px;
		padding-left: 5px;
	}

	.Ddiv2>div:nth-child(2) {
		width: 100%;
		font-size: 20px;
		padding-bottom: 10px;
	}

	.Ddiv2>div:nth-child(3) {
		width: 100%;
		font-size: 20px;
	}

	.Ddiv2>div>span {
		color: #FFFFFF;
		margin-right: 10px;
	}

	.Ddiv2>button {
		border: none;
		background: #FFFFFF;
		color: #F38232;
		margin-top: 20px;
		border-radius: 5px;
		border: 1px solid #FFFFFF;
		font-size: 16px;
		width: 60px;
		height: 40px;
	}

	.Ddiv2>button:hover {
		background: red;
		color: #FFFFFF;
	}
</style>
