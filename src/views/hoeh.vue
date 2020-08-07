<template>
	<div class="D-div">
		<div>
			<headuk></headuk>
		</div>
		<div>
			<khmh></khmh>
		</div>
		<div>
			<wyrab></wyrab>
		</div>
		<div>
			<wqaview class="pbsg"></wqaview>
		</div>
	</div>
</template>

<script>
	import headuk from '../components/dtwd/headuk.vue';
	import khmh from '../components/dtwd/khmh.vue';
	import wqaview from '../components/dtwd/wqaview.vue';
	import wyrab from '../components/dtwd/wyrab.vue';
	export default {
		components: {
			headuk,
			khmh,
			wqaview,
			wyrab
		}
	}
</script>

<style scoped>
	.D-div {
		background: #f2f2f2;
		padding-bottom: 10px;
	}

	.D-div>div:nth-child(2) {
		padding-top: 5px;
	}

	.D-div>div:nth-child(3) {
		padding-top: 10px;
	}

	.D-div>div:nth-child(4) {
		width: 100%;
		position: fixed;
		bottom: 0px;

	}
	.router-link-active {
		color: #F38232;
	}
	
</style>
