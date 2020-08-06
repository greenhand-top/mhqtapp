<template>
	<div>
		<div class="pbsg">贝儿机器人</div>
		<div class="rtty" id="rtty" >
			<div class="x-div" v-for="(tite,index) in rtty">
				<div v-show="index >= !0">{{tite.tfef}}</div>
				<div v-show="index >= !0"><img src="../assets/imgs/14.png"></div>
			</div>
		</div>
		<div class="posar">
			<div><van-icon name="volume-o" /></div>
			<div><input type="text" v-model="inrs.impw" ref="id"></div>
			<div><button @click="but()">发送</button></div>
		</div>
		<div class="par"><wqaview></wqaview></div>
	</div>
</template>

<script>
	import wqaview from '../components/dtwd/wqaview.vue'
	export default{
		components:{
			wqaview
		},
		data(){
			return{
				rtty:[
					{
					tfef:"",	
					}
				],
				inrs:{
				   impw:""	
				}
				
			}
		},
		methods:{
			but(){
		    this.rtty.push({
					tfef : this.inrs.impw
				})
				 this.inrs.impw = ""
			}
		},
	
		
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	.fefe{
	
	}
	.x-div{
		display: flex;
	   padding-top: 10px;
	   justify-content: flex-end;
		
	}
	.x-div>div:nth-child(1){
		font-size: 16px;
		padding: 0 20px;
		height: 40px;
		background: greenyellow;
		text-align: center;
		line-height: 40px;
		
		
		
	}
	.pbsg{
		height: 50px;
		background: #F38232;
		text-align: center;
		color: #FFFFFF;
		line-height: 50px;	
		font-size: 18px;
	}
	.rtty{
		background: #FaFaFa;
		height: 550px;
	}
	.posar{
		width: 100%;
		height: 50px;
		border-top: 1px solid #999;
		border-bottom: 1px solid #999;	
		background: #F2F2F2;
		position: fixed;
		bottom: 100px;
		display: flex;
		align-items: center;
		line-height: 50%;
	}
	.par{
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	.posar>div:nth-child(1){
		font-size: 25px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.posar>div:nth-child(2){
	   width: 240px;  
	   height: 35px;
	}
	.posar>div>input{
	  width: 100%;
	   height: 35px;
	   border-radius: 5px;
	  border: none;
	  font-size: 14px;
	  padding-left: 5px;
	}
	.posar>div>button{
		background:none;
		border: none;
		font-size: 12px;
		margin-left: 20px;
		background: #999999;
		color: #FFFFFF;
		width: 50px;
		height: 35px;
	}
	
	
</style>
